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
  <path d="M19.8016 4.2C18.7016 3.1 17.2016 2.5 15.6016 2.5C14.0016 2.5 12.6016 3.1 11.4016 4.2L4.20156 11.4C1.90156 13.7 1.90156 17.4 4.20156 19.7C5.30156 20.8 6.80156 21.4 8.40156 21.4C9.90156 21.4 11.4016 20.8 12.6016 19.7L19.8016 12.5C20.9016 11.4 21.5016 9.9 21.5016 8.3C21.5016 6.8 20.9016 5.3 19.8016 4.2ZM11.5016 18.7C9.80156 20.4 7.00156 20.4 5.30156 18.7C3.60156 17 3.60156 14.2 5.30156 12.5L8.40156 9.4L14.6016 15.6L11.5016 18.7ZM18.7016 11.5L15.6016 14.6L9.40156 8.4L12.5016 5.3C13.4016 4.5 14.5016 4 15.6016 4C16.8016 4 17.9016 4.5 18.7016 5.3C19.5016 6.1 20.0016 7.2 20.0016 8.4C20.0016 9.5 19.5016 10.6 18.7016 11.5Z" fill={color} />
</svg>
