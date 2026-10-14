import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, basename } from 'path';

const __dirname = import.meta.dirname;

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

function generateIconComponent(iconName: string, pathData: string): string {
  const componentName = toPascalCase(iconName);

  return `<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface ${componentName}Props {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  'aria-label'?: string;
  title?: string;
}

const props = withDefaults(defineProps<${componentName}Props>(), {
  size: 24,
  color: 'currentColor',
});

const svgStyle = computed(() => {
  const baseStyle: StyleValue = { verticalAlign: 'middle' };
  if (props.style) {
    if (typeof props.style === 'string') {
      return baseStyle;
    }
    return { ...baseStyle, ...props.style };
  }
  return baseStyle;
});

const svgAttrs = computed(() => {
  const attrs: Record<string, any> = {};
  if (props['aria-label']) {
    attrs['aria-label'] = props['aria-label'];
  }
  if (props.title) {
    attrs.role = 'img';
  }
  return attrs;
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.class"
    :style="svgStyle"
    v-bind="svgAttrs"
  >
    <title v-if="title">{{ title }}</title>
    <path d="${pathData}" :fill="color" />
  </svg>
</template>
`;
}

async function generateIcons() {
  const iconsDir = join(__dirname, '../../core/src/icons');
  const outputDir = join(__dirname, '../src/components');

  await mkdir(outputDir, { recursive: true });

  const files = await readdir(iconsDir);
  const svgFiles = files.filter((file) => file.endsWith('.svg'));

  const iconNames: string[] = [];

  for (const file of svgFiles) {
    const filePath = join(iconsDir, file);
    const svgContent = await readFile(filePath, 'utf-8');
    const fileName = basename(file, '.svg');
    const componentName = toPascalCase(fileName);

    const pathData = await extractPathFromSVG(svgContent);

    const componentCode = generateIconComponent(fileName, pathData);

    await writeFile(join(outputDir, `${componentName}.vue`), componentCode);

    iconNames.push(componentName);
  }

  // Generate index file
  const indexContent = iconNames
    .map((name) => `export { default as ${name} } from './components/${name}.vue';`)
    .join('\n');

  await writeFile(join(__dirname, '../src/index.ts'), indexContent + '\n');

  console.log(`✓ Generated ${iconNames.length} Vue components`);
}

generateIcons().catch(console.error);
