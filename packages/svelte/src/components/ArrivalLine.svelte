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
  <path d="M18.3 10.9001C18.9 11.4001 19.4 12.0001 19.8 12.7001C20.1749 13.4499 19.847 13.7605 19.7221 13.8788C19.7137 13.8868 19.7063 13.8938 19.7 13.9001C19.6 14.0001 19.4 14.0001 19.2 14.0001C18.7 14.0001 18.1 13.8001 18 13.7001L4.4 8.7001C3.3 8.3001 2 7.3001 2 5.8001V3.3001L3.5 3.9001L4.2 6.0001L8 7.2001L8.6 1.6001L10.6 2.5001L12.1 8.6001C14.4 9.3001 15.9 9.8001 16.2 9.9001C17.2 10.2001 17.6 10.4001 18.3 10.9001ZM9 19.5H22V21H9V19.5Z" fill={color} />
</svg>
