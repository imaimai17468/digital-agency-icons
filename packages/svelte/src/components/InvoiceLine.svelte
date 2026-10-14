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
  <path d="M14.5 4.6L11.8 2H1.5V18H5.5V16.5H3V3.5H10.5V6H13.7H14.5V4.6ZM9.1 6.5H4.5V8H9.1V6.5ZM4.5 9.5H7V11H4.5V9.5ZM16.4 11.5L14.8 14.4L13.1 11.5H12L13.7 14.5H12.3V15.5H14.2V16.5H12.3V17.5H14.2V19H15.2V17.5H17.3V16.5H15.2V15.5H17.3V14.5H15.8L17.5 11.5H16.4ZM20.6992 15C20.6992 11.7 17.9992 9 14.6992 9C11.3992 9 8.69922 11.7 8.69922 15C8.69922 18.3 11.3992 21 14.6992 21C17.9992 21 20.6992 18.3 20.6992 15ZM7.19922 15C7.19922 10.9 10.5992 7.5 14.6992 7.5C18.8992 7.5 22.1992 10.9 22.1992 15C22.1992 19.1 18.7992 22.5 14.6992 22.5C10.5992 22.5 7.19922 19.1 7.19922 15Z" fill={color} />
</svg>
