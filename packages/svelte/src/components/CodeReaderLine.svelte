<script lang="ts">
  let {
    size = 24,
    color = 'currentColor',
    class: className = '',
    style = '',
    title,
    'aria-label': ariaLabel,
  }: {
    size?: number | string;
    color?: string;
    class?: string;
    style?: string;
    title?: string;
    'aria-label'?: string;
  } = $props();

  const svgStyle = $derived(`vertical-align: middle;${style ? ' ' + style : ''}`);
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  style={svgStyle}
  aria-label={ariaLabel}
  role={title ? 'img' : undefined}
>
  {#if title}
    <title>{title}</title>
  {/if}
  <path d="M2.5 7.5H4V4H7.5V2.5H2.5V7.5ZM2.5 21.5H7.5V20H4V16.5H2.5V21.5ZM21.5 21.5H16.5V20H20V16.5H21.5V21.5ZM20 7.5H21.5V2.5H16.5V4H20V7.5ZM9.5 7.5V9.5H7.5V7.5H9.5ZM11 6H6V11H11V6ZM16.5 9.5V7.5H14.5V9.5H16.5ZM13 6H18V11H13V6ZM9.5 14.5V16.5H7.5V14.5H9.5ZM11 13H6V18H11V13ZM13 13H18V18H13V13Z" fill={color} />
</svg>
