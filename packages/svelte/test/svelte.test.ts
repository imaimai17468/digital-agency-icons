import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  iconNames,
  toPascalCase,
} from '@imaimai17468/digital-agency-icons-core';
import { flushSync, mount, unmount } from 'svelte';
import { compile as compileSvelte5 } from 'svelte/compiler';
import { compile as compileSvelte4 } from 'svelte4/compiler';
import { describe, expect, it } from 'vite-plus/test';
import * as Icons from '../src/index.js';

const componentsDir = join(import.meta.dirname, '../src/components');

const readComponents = async () => {
  const files = await readdir(componentsDir);
  return Promise.all(
    files.map(async (file) => ({
      file,
      source: await readFile(join(componentsDir, file), 'utf-8'),
    }))
  );
};

describe('svelte icons', () => {
  it('exports one component per icon', () => {
    for (const name of iconNames) {
      expect(Icons).toHaveProperty(toPascalCase(name));
    }
  });

  it('compiles every component with Svelte 4 and Svelte 5 without warnings', async () => {
    const components = await readComponents();
    expect(components).toHaveLength(iconNames.length);
    for (const { file, source } of components) {
      expect(compileSvelte4(source, { filename: file }).warnings).toEqual([]);
      expect(compileSvelte5(source, { filename: file }).warnings).toEqual([]);
    }
  });

  it('renders size, color and an accessible title', () => {
    const target = document.createElement('div');
    const component = mount(Icons.AddFill, {
      target,
      props: { size: 32, color: 'red', title: '追加', 'aria-label': '追加' },
    });
    flushSync();
    const svg = target.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('32');
    expect(svg?.getAttribute('role')).toBe('img');
    expect(svg?.getAttribute('aria-label')).toBe('追加');
    expect(svg?.querySelector('path')?.getAttribute('fill')).toBe('red');
    expect(svg?.querySelector('title')?.textContent).toBe('追加');
    void unmount(component);
  });
});
