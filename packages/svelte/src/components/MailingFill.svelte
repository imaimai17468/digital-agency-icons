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
  <path d="M8.4 2.5H11.5C9.5 3.9 8.2 6.2 8.2 8.7V16.5H2V8.9C2 5.4 4.9 2.5 8.4 2.5ZM13.0016 22H11.0016V16.4H9.60156V8.7C9.60156 5.4 12.3016 2.6 15.6016 2.5H15.8016C19.2016 2.5 22.0016 5.2 22.0016 8.7V9.2V16.5H13.0016V22ZM12.5016 10.8H19.0016V9.5H12.5016V10.8Z" fill={color} />
</svg>
