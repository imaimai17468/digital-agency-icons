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

function generateIconComponent(iconName: string, pathData: string): string {
  const componentName = toPascalCase(iconName);

  return `import React from 'react';

export interface ${componentName}Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  style,
  'aria-label': ariaLabel,
  title,
}) => {
  const svgProps: React.SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: { verticalAlign: 'middle', ...style },
  };

  if (ariaLabel) {
    svgProps['aria-label'] = ariaLabel;
  }

  if (title) {
    svgProps.role = 'img';
  }

  return (
    <svg {...svgProps}>
      {title && <title>{title}</title>}
      <path d="${pathData}" fill={color} />
    </svg>
  );
};

${componentName}.displayName = '${componentName}';
`;
}

async function generateIcons() {
  const iconsDir = join(import.meta.dirname, '../../core/src/icons');
  const outputDir = join(import.meta.dirname, '../src/components');

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

    await writeFile(join(outputDir, `${componentName}.tsx`), componentCode);

    iconNames.push(componentName);
  }

  // Generate index file
  const indexContent = iconNames
    .map((name) => `export * from './components/${name}';`)
    .join('\n');

  await writeFile(
    join(import.meta.dirname, '../src/index.ts'),
    indexContent + '\n'
  );

  console.log(`✓ Generated ${iconNames.length} React components`);
}

generateIcons().catch(console.error);
