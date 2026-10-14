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
  <path d="M4 2H16.7L20 5.2V22H4V2ZM5.5 3.5V20.5H18.5V6.5H15.5V3.5H5.5ZM7 11H17V12.5H7V11ZM17 8H7V9.5H17V8ZM9.39844 15.1999L11.2984 16.8999L14.5984 13.8999L15.5984 15.0999L11.2984 18.9999L8.39844 16.2999L9.39844 15.1999Z" fill={color} />
</svg>
