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
  <path d="M15 2H9V5H5V20H7.6C7.5 20.2 7.5 20.3 7.5 20.5C7.5 21.3 8.2 22 9 22C9.8 22 10.5 21.3 10.5 20.5C10.5 20.3 10.5 20.2 10.4 20H13.6C13.5 20.2 13.5 20.3 13.5 20.5C13.5 21.3 14.2 22 15 22C15.8 22 16.5 21.3 16.5 20.5C16.5 20.3 16.5 20.2 16.4 20H19V5H15V2ZM9.5 16.5H8.5V9H9.5V16.5ZM12.5 16.5H11.5V9H12.5V16.5ZM13.5 5H10.5V3.5H13.5V5ZM15.5 9V16.5H14.5V9H15.5Z" fill={color} />
</svg>
