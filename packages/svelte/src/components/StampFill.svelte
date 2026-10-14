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
  <path d="M12.0001 3C14.4001 3 16.1001 5.3 15.5001 7.5L14.5001 11.2H9.50011L8.50011 7.5C7.90011 5.3 9.60011 3 12.0001 3ZM4 14.5V18.5H20V14.5C20 13.4 19.1 12.5 18 12.5H6C4.9 12.5 4 13.4 4 14.5ZM21.5 20.5H2.5V22H21.5V20.5Z" fill={color} />
</svg>
