import {
  iconNames,
  toPascalCase,
} from '@imaimai17468/digital-agency-icons-core';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vite-plus/test';
import * as Icons from '../dist/index.js';

describe('react icons', () => {
  it('exports one component per icon', () => {
    for (const name of iconNames) {
      expect(Icons).toHaveProperty(toPascalCase(name));
    }
  });

  it('renders size, color and an accessible title', () => {
    const markup = renderToStaticMarkup(
      createElement(Icons.AddFill, {
        size: 32,
        color: 'red',
        title: '追加',
        'aria-label': '追加',
      })
    );
    expect(markup).toContain('width="32"');
    expect(markup).toContain('fill="red"');
    expect(markup).toContain('role="img"');
    expect(markup).toContain('aria-label="追加"');
    expect(markup).toContain('<title>追加</title>');
  });
});
