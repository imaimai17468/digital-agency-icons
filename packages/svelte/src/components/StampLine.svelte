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
  <path d="M18 12C19.1 12 20 12.9 20 14V18.5H4V14C4 12.9 4.9 12 6 12H9.6L8.3 7.3C7.7 4.9 9.5 2.5 12 2.5C14.5 2.5 16.4 4.9 15.7 7.3L14.4 12H18ZM10.2 4.9C9.8 5.5 9.6 6.2 9.8 6.9L11.2 12H12.9L14.2 6.9C14.4 6.2 14.2 5.5 13.8 4.9C13.4 4.3 12.7 4 12 4C11.3 4 10.6 4.3 10.2 4.9ZM18.5 14C18.5 13.7 18.3 13.5 18 13.5H6C5.7 13.5 5.5 13.7 5.5 14V17H18.5V14ZM2.5 22V20.5H21.5V22H2.5Z" fill={color} />
</svg>
