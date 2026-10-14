import { describe, expect, it } from 'vite-plus/test';
import {
  getIconBaseName,
  getIconVariant,
  iconData,
  iconNames,
  toCamelCase,
  toPascalCase,
} from '../dist/index.js';

describe('name utils', () => {
  it('converts snake_case to PascalCase and camelCase', () => {
    expect(toPascalCase('arrow_right_fill')).toBe('ArrowRightFill');
    expect(toCamelCase('arrow_right_fill')).toBe('arrowRightFill');
  });

  it('splits a file name into base name and variant', () => {
    expect(getIconBaseName('arrow_right_fill')).toBe('arrow_right');
    expect(getIconVariant('arrow_right_fill')).toBe('fill');
    expect(getIconVariant('arrow_right_line')).toBe('line');
  });
});

describe('icon data', () => {
  it('ships a fill and a line variant for every icon', () => {
    const baseNames = new Set(iconNames.map(getIconBaseName));
    for (const baseName of baseNames) {
      expect(iconNames).toContain(`${baseName}_fill`);
      expect(iconNames).toContain(`${baseName}_line`);
    }
  });

  it('extracts a non-empty path for every icon', () => {
    expect(iconNames.length).toBeGreaterThan(0);
    for (const name of iconNames) {
      expect(iconData[name]?.path).toMatch(/^M/);
    }
  });
});
