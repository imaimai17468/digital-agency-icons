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
  <path d="M14 4.6V6.2C9.5 6.6 5.9 10.4 6 15C6 16.1 6.2 17.1 6.5 18H1.5V2H11.3L14 4.6ZM12.7 5.5L10.5 3.3V5.5H12.7ZM8 5.7H3.5V7H8V5.7ZM6 8.7H3.5V10H6V8.7ZM13.5992 7.6C13.8992 7.5 14.2992 7.5 14.6992 7.5C18.8992 7.5 22.1992 10.9 22.1992 15C22.1992 19.1 18.7992 22.5 14.6992 22.5C11.5992 22.5 8.99922 20.7 7.79922 18C7.39922 17.1 7.19922 16.1 7.19922 15C7.19922 11.2 9.99922 8.1 13.5992 7.6ZM15.2992 15.5H17.2992V14.5H15.6992L17.3992 11.5H16.2992L14.6992 14.4L13.0992 11.5H11.9992L13.6992 14.5H12.2992V15.5H14.2992V16.5H12.2992V17.5H14.2992V19H15.2992V17.5H17.2992V16.5H15.2992V15.5Z" fill={color} />
</svg>
