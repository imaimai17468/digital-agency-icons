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
  <path d="M13.7016 2.80012C16.2016 2.90012 18.5016 4.10012 20.1016 5.90012C23.5016 9.70012 23.1016 15.6001 19.2016 18.9001C17.5016 20.4001 15.4016 21.2001 13.1016 21.2001C10.5016 21.2001 8.00156 20.1001 6.20156 18.1001L6.00156 17.9001L7.50156 16.6001L7.70156 16.8001C10.3016 19.8001 14.9016 20.0001 17.9016 17.4001C20.9016 14.8001 21.1016 10.2001 18.5016 7.20012C15.9016 4.20012 11.3016 4.00012 8.30156 6.60012C6.90156 7.80012 6.10156 9.50012 5.90156 11.4001L7.80156 9.50012L9.30156 10.9001L4.90156 15.2001L0.601562 10.9001L2.00156 9.50012L3.90156 11.4001C4.10156 9.00012 5.20156 6.70012 7.00156 5.10012C8.90156 3.40012 11.2016 2.60012 13.7016 2.80012ZM11.7031 12.7998V7.2998H13.7031V11.9998L17.1031 15.2998L15.7031 16.6998L11.7031 12.7998Z" fill={color} />
</svg>
