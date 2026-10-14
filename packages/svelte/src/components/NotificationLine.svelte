<script>
  /** @type {number | string} */
  export let size = 24;
  /** @type {string} */
  export let color = 'currentColor';
  /** @type {string} */
  let className = '';
  export { className as class };
  /** @type {string} */
  export let style = '';
  /** @type {string | undefined} */
  export let title = undefined;

  $: svgStyle = `vertical-align: middle;${style ? ' ' + style : ''}`;
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  style={svgStyle}
  aria-label={$$props['aria-label']}
  role={title ? 'img' : undefined}
>
  {#if title}
    <title>{title}</title>
  {/if}
  <path d="M18 9.5C18 12.6 19.9 16.1 19.9 16.1L20 16.3V18H4V16.3L4.1 16.1C4.1 16.1 6 12.6 6 9.5C6 7.7 6.8 6.1 8 5C8.5 4.6 9 4.3 9.6 4C9.65 3.95 9.725 3.925 9.8 3.9C9.875 3.875 9.95 3.85 10 3.8C10.1 2.8 10.9 2 12 2C13.1 2 13.9 2.8 14 3.8C14.05 3.85 14.125 3.875 14.2 3.9C14.275 3.925 14.35 3.95 14.4 4C15 4.2 15.5 4.6 16 5C17.2 6.1 18 7.7 18 9.5ZM7.5 9.5C7.5 12.4 6.1 15.5 5.6 16.5H18.4C17.9 15.5 16.5 12.4 16.5 9.5C16.5 8.8 16.3 8.1 16 7.5C15.6 6.6 14.9 5.9 14 5.5C13.4 5.2 12.7 5 12 5C11.3 5 10.6 5.2 10 5.5C9.1 5.9 8.4 6.6 8 7.5C7.7 8.1 7.5 8.8 7.5 9.5ZM14.5 19.5C14.5 20.9 13.4 22 12 22C10.6 22 9.5 20.9 9.5 19.5H14.5Z" fill={color} />
</svg>
