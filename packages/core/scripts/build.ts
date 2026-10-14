import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, basename } from 'path';

const __dirname = import.meta.dirname;

interface IconData {
  name: string;
  variant: 'fill' | 'line';
  svg: string;
  path: string;
  viewBox: string;
  width: number;
  height: number;
}

function toPascalCase(str: string): string {
  return str
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function getIconBaseName(fileName: string): string {
  return fileName.replace(/_(fill|line)\.svg$/, '');
}

function getIconVariant(fileName: string): 'fill' | 'line' {
  return fileName.includes('_fill') ? 'fill' : 'line';
}

async function extractPathFromSVG(svgContent: string): Promise<string> {
  // Extract the path d attribute
  const pathMatch = svgContent.match(/<path[^>]*d="([^"]+)"/);
  return pathMatch ? pathMatch[1] : '';
}

async function buildIcons() {
  const iconsDir = join(__dirname, '../src/icons');
  const outputDir = join(__dirname, '../src/generated');

  // Create output directory
  await mkdir(outputDir, { recursive: true });

  // Read all SVG files
  const files = await readdir(iconsDir);
  const svgFiles = files.filter((file) => file.endsWith('.svg'));

  const icons: IconData[] = [];

  for (const file of svgFiles) {
    const filePath = join(iconsDir, file);
    const svgContent = await readFile(filePath, 'utf-8');
    const fileName = basename(file, '.svg');

    const pathData = await extractPathFromSVG(svgContent);

    const iconData: IconData = {
      name: fileName,
      variant: getIconVariant(fileName),
      svg: svgContent,
      path: pathData,
      viewBox: '0 0 24 24',
      width: 24,
      height: 24,
    };

    icons.push(iconData);
  }

  // Group icons by base name
  const iconGroups = new Map<string, IconData[]>();
  for (const icon of icons) {
    const baseName = getIconBaseName(icon.name);
    if (!iconGroups.has(baseName)) {
      iconGroups.set(baseName, []);
    }
    iconGroups.get(baseName)!.push(icon);
  }

  // Generate icon data file
  const iconDataContent = `// This file is auto-generated. Do not edit manually.
import type { IconData } from '../types';

export const iconData: Record<string, IconData> = ${JSON.stringify(
    Object.fromEntries(icons.map((icon) => [icon.name, icon])),
    null,
    2
  )};

export const iconNames = ${JSON.stringify(icons.map((icon) => icon.name))} as const;

export type IconName = typeof iconNames[number];
`;

  await writeFile(join(outputDir, 'icon-data.ts'), iconDataContent);

  // Generate index file
  const indexContent = `export * from './icon-data';
`;

  await writeFile(join(outputDir, 'index.ts'), indexContent);

  console.log(`✓ Generated ${icons.length} icon definitions`);
  console.log(`✓ Found ${iconGroups.size} unique icons with variants`);
}

buildIcons().catch(console.error);
