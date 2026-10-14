import {
  iconNames,
  toPascalCase,
} from '@imaimai17468/digital-agency-icons-core';
import { describe, expect, it } from 'vite-plus/test';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import * as Icons from '../dist/index.js';

describe('vue icons', () => {
  it('exports one component per icon', () => {
    for (const name of iconNames) {
      expect(Icons).toHaveProperty(toPascalCase(name));
    }
  });

  it('renders size, color and an accessible title', async () => {
    const markup = await renderToString(
      createSSRApp({
        render: () =>
          h(Icons.AddFill, {
            size: 32,
            color: 'red',
            title: '追加',
            'aria-label': '追加',
          }),
      })
    );
    expect(markup).toContain('width="32"');
    expect(markup).toContain('fill="red"');
    expect(markup).toContain('role="img"');
    expect(markup).toContain('aria-label="追加"');
    expect(markup).toContain('<title>追加</title>');
  });

  it('keeps a string style next to the base style', async () => {
    const markup = await renderToString(
      createSSRApp({
        render: () => h(Icons.AddFill, { style: 'color: red' }),
      })
    );
    expect(markup).toContain('style="vertical-align:middle;color:red;"');
  });
});
