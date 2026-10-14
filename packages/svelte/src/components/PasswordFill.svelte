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
  <path d="M16 8H18.5V17H5.5V8H14.5V6C14.5 4.6 13.4 3.5 12 3.5C10.6 3.5 9.5 4.6 9.5 6V6.5H8V6C8 3.8 9.8 2 12 2C14.2 2 16 3.8 16 6V8ZM7.5 20.5C7.5 21.3284 6.82843 22 6 22C5.17157 22 4.5 21.3284 4.5 20.5C4.5 19.6716 5.17157 19 6 19C6.82843 19 7.5 19.6716 7.5 20.5ZM10.5 20.5C10.5 19.7 11.2 19 12 19C12.8 19 13.5 19.7 13.5 20.5C13.5 21.3 12.8 22 12 22C11.2 22 10.5 21.3 10.5 20.5ZM18 22C18.8284 22 19.5 21.3284 19.5 20.5C19.5 19.6716 18.8284 19 18 19C17.1716 19 16.5 19.6716 16.5 20.5C16.5 21.3284 17.1716 22 18 22Z" fill={color} />
</svg>
