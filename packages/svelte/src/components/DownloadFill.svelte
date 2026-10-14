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
  <path d="M17.9977 8.5998L19.3977 9.9998L11.9977 17.3998L4.59766 9.9998L5.99766 8.5998L10.9977 13.5998V2.7998H12.9977V13.5998L17.9977 8.5998ZM2.69922 19.1997H21.1992V21.1997H2.69922V19.1997Z" fill={color} />
</svg>
