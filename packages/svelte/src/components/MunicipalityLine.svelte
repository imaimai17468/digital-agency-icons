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
  <path d="M8 2V7H9.5V3.5H20.5V22H22V2H8ZM11.5 5.5H18.5V7H11.5V5.5ZM18.5 8.5H14V10H18.5V8.5ZM12 20V15H7V20H12ZM8.5 16.5H10.5V18.5H8.5V16.5ZM1.9 16.4L1 15.2L9.5 8.5L18 15.2L17.1 16.4L15.5 15.2V22H14V14L9.5 10.5L5 14V22H3.5V15.1L1.9 16.4Z" fill={color} />
</svg>
