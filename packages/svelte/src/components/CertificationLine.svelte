<script lang="ts">
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

  const svgStyle = $derived(`vertical-align: middle;${style ? ' ' + style : ''}`);
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
  <path d="M22.5 20H1.5V4H22.5V20ZM3 18.5H21V5.5H3V18.5ZM9 9.5V14.5H6.5V9.5H9ZM10.5 8H5V16H9.6H10.5V8ZM12.5 8H19V9.5H12.5V8ZM19 11.2002H12.5V12.7002H19V11.2002ZM12.5 14.5H19V16H12.5V14.5Z" fill={color} />
</svg>
