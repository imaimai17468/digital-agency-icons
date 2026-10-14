import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, basename } from 'path';

function toPascalCase(str: string): string {
  return str
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

async function extractPathFromSVG(svgContent: string): Promise<string> {
  const pathMatch = svgContent.match(/<path[^>]*d="([^"]+)"/);
  return pathMatch ? pathMatch[1] : '';
}

function generateIconComponent(pathData: string): string {
  return `<script lang="ts">
  let {
    size = 24,
    color = 'currentColor',
    class: className = '',
    style = '',
    title,
    'aria-label': ariaLabel,
  }: {
    size?: number | string;
    color?: string;
    class?: string;
    style?: string;
    title?: string;
    'aria-label'?: string;
  } = $props();

  const svgStyle = $derived(\`vertical-align: middle;\${style ? ' ' + style : ''}\`);
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  style={svgStyle}
  aria-label={ariaLabel}
  role={title ? 'img' : undefined}
>
  {#if title}
    <title>{title}</title>
  {/if}
  <path d="${pathData}" fill={color} />
</svg>
`;
}

async function generateIcons() {
  const iconsDir = join(import.meta.dirname, '../../core/src/icons');
  const outputDir = join(import.meta.dirname, '../src/components');

  await mkdir(outputDir, { recursive: true });
  await mkdir(join(import.meta.dirname, '../types'), { recursive: true });

  const files = await readdir(iconsDir);
  const svgFiles = files.filter((file) => file.endsWith('.svg'));

  const iconNames: string[] = [];

  for (const file of svgFiles) {
    const filePath = join(iconsDir, file);
    const svgContent = await readFile(filePath, 'utf-8');
    const fileName = basename(file, '.svg');
    const componentName = toPascalCase(fileName);

    const pathData = await extractPathFromSVG(svgContent);

    const componentCode = generateIconComponent(pathData);

    await writeFile(join(outputDir, `${componentName}.svelte`), componentCode);

    iconNames.push(componentName);
  }

  // Generate index file
  const indexContent = iconNames
    .map(
      (name) =>
        `export { default as ${name} } from './components/${name}.svelte';`
    )
    .join('\n');

  await writeFile(
    join(import.meta.dirname, '../src/index.ts'),
    indexContent + '\n'
  );

  const declarationContent = [
    "import type { Component } from 'svelte';",
    '',
    'export interface IconProps {',
    '  size?: number | string;',
    '  color?: string;',
    '  class?: string;',
    '  style?: string;',
    '  title?: string;',
    "  'aria-label'?: string;",
    '}',
    '',
    ...iconNames.map(
      (name) => `export declare const ${name}: Component<IconProps>;`
    ),
  ].join('\n');

  await writeFile(
    join(import.meta.dirname, '../types/index.d.ts'),
    declarationContent + '\n'
  );

  console.log(`✓ Generated ${iconNames.length} Svelte components`);
}

generateIcons().catch(console.error);
