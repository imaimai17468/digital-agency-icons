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
  <path d="M15.5 5.5C15.5 7.4 13.9 9 12 9C10.1 9 8.5 7.4 8.5 5.5C8.5 3.6 10.1 2 12 2C13.9 2 15.5 3.6 15.5 5.5ZM14 5.5C14 4.4 13.1 3.5 12 3.5C10.9 3.5 10 4.4 10 5.5C10 6.6 10.9 7.5 12 7.5C13.1 7.5 14 6.6 14 5.5ZM14 15.5C14 16.6046 13.1046 17.5 12 17.5C10.8954 17.5 10 16.6046 10 15.5C10 14.3954 10.8954 13.5 12 13.5C13.1046 13.5 14 14.3954 14 15.5ZM11.9969 18.5C10.2969 18.5 8.89687 19.5 8.29688 21H15.6969C15.0969 19.5 13.6969 18.5 11.9969 18.5ZM10.7984 11.8999C7.89844 11.8999 5.49844 14.2999 5.49844 17.1999H5.39844V20.9999H3.89844V17.1999C3.89844 13.3999 6.99844 10.3999 10.6984 10.3999H13.1984C16.9984 10.3999 19.9984 13.4999 19.9984 17.1999V20.9999H18.4984V17.1999C18.4984 14.2999 16.1984 11.8999 13.2984 11.8999H10.7984Z" fill={color} />
</svg>
