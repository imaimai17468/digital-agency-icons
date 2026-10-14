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
  <path d="M19.9 16.1L20 16.3V18H4V16.3L4.1 16.1C4.1 16.1 6 12.6 6 9.5C6 7.7 6.8 6.1 8 5C8.5 4.6 9 4.3 9.6 4C9.65 3.95 9.725 3.925 9.8 3.9C9.875 3.875 9.95 3.85 10 3.8C10.1 2.8 10.9 2 12 2C13.1 2 13.9 2.8 14 3.8C14.05 3.85 14.125 3.875 14.2 3.9C14.275 3.925 14.35 3.95 14.4 4C15 4.2 15.5 4.6 16 5C17.2 6.1 18 7.7 18 9.5C18 12.6 19.9 16.1 19.9 16.1ZM14.5 19.5C14.5 20.9 13.4 22 12 22C10.6 22 9.5 20.9 9.5 19.5H14.5Z" fill={color} />
</svg>
