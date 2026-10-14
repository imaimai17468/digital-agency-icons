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
  <path d="M18.8 4.8002C19.6 4.7002 20.4 4.8002 21.2 5.0002C22.0259 5.27551 22.0097 5.71926 22.0014 5.94501C22.0007 5.96525 22 5.98374 22 6.0002C21.8459 6.38543 21.2763 6.77067 20.9772 6.97295C20.8881 7.03322 20.823 7.07724 20.8 7.1002L7.6 13.2002C7.1 13.4002 6.4 13.6002 5.8 13.6002C5.1 13.6002 4.4 13.4002 3.8 12.8002L2 11.0002L3.4 10.3002L5.5 11.3002L9 9.5002L5.4 5.0002L7.4 4.2002L12.8 7.5002C14.1 6.8002 16.2 5.7002 16.6 5.5002C17.5 5.1002 18 4.9002 18.8 4.8002ZM2 19.5H15V21H2V19.5Z" fill={color} />
</svg>
