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
  <path d="M2 4H22V7H2V4ZM2 17.3V8.5H22V17.2C22 18.8 20.7 20 19.2 20H4.7C3.2 20 2 18.8 2 17.3ZM12 13.4L10.4 10.5H9.1L10.8 13.5H9.4V14.5H11.4V15.5H9.4V16.5H11.4V18H12.4V16.5H14.4V15.5H12.4V14.5H14.4V13.5H13L14.7 10.5H13.6L12 13.4Z" fill={color} />
</svg>
