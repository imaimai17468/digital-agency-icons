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
  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM12.7 18H11.2V9.5H12.7V18ZM11.3 6.3C11.5 6.1 11.7 6 12 6C12.3 6 12.5 6.1 12.7 6.3C12.9 6.5 13 6.7 13 7C13 7.3 12.9 7.5 12.7 7.7C12.5 7.9 12.3 8 12 8C11.7 8 11.5 7.9 11.3 7.7C11.1 7.5 11 7.3 11 7C11 6.7 11.1 6.5 11.3 6.3Z" fill={color} />
</svg>
