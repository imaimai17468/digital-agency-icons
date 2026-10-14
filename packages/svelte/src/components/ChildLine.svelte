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
  <path d="M2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM19.5 8C18 5.3 15.2 3.5 12 3.5C9 3.5 6.4 5.1 4.8 7.4C5.7 7.8 6.6 8 7.6 8C9.6 8 11.4 7.3 12.8 5.9C13.1 5.6 13.6 5.6 13.9 5.9C15.2 7.2 17.1 8 19 8H19.5ZM3.5 12C3.5 16.7 7.3 20.5 12 20.5C16.7 20.5 20.5 16.7 20.5 12C20.5 11.1 20.4 10.2 20.1 9.4C19.8 9.5 19.4 9.5 19 9.5C16.9 9.5 14.9 8.7 13.3 7.4C11.7 8.8 9.7 9.5 7.6 9.5C6.4 9.5 5.2 9.3 4.1 8.8C3.7 9.8 3.5 10.9 3.5 12ZM9.60156 12C9.60156 12.5523 9.15385 13 8.60156 13C8.04928 13 7.60156 12.5523 7.60156 12C7.60156 11.4477 8.04928 11 8.60156 11C9.15385 11 9.60156 11.4477 9.60156 12ZM15.5 13C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11C14.9477 11 14.5 11.4477 14.5 12C14.5 12.5523 14.9477 13 15.5 13ZM8.39844 16.5999L9.49844 15.4999C10.7984 16.7999 13.1984 16.7999 14.3984 15.3999L15.4984 16.4999C14.5984 17.4999 13.2984 17.9999 11.9984 17.9999C10.6984 17.9999 9.39844 17.4999 8.39844 16.5999Z" fill={color} />
</svg>
