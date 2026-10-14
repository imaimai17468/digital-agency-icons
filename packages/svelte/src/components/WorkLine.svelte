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
  <path d="M17 6.5V3.5H7V6.5H2V20.5H22V6.5H17ZM8.5 5H15.5V6.5H8.5V5ZM20.5 19H3.5V12.6C5.4 13.5 7.4 14.1 9.5 14.3V16.5H14.5V14.3C16.6 14 18.6 13.5 20.5 12.6V19ZM13 15H11V13H13V15ZM20.5 10.9C18.6 11.9 16.6 12.5 14.5 12.8V11.5H9.5V12.8C7.4 12.5 5.4 11.9 3.5 10.9V8H20.5V10.9Z" fill={color} />
</svg>
