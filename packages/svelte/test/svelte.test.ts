import {
  iconNames,
  toPascalCase,
} from '@imaimai17468/digital-agency-icons-core';
import { flushSync, mount, unmount } from 'svelte';
import { describe, expect, it } from 'vite-plus/test';
import * as Icons from '../dist/index.js';

describe('svelte icons', () => {
  it('exports one component per icon', () => {
    for (const name of iconNames) {
      expect(Icons).toHaveProperty(toPascalCase(name));
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
