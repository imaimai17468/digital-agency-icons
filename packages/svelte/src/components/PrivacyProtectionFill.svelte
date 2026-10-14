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
  <path d="M22 14V7H20V5.7C20 4.2 18.8 3 17.2 3C15.6 3 14.5 4.2 14.5 5.7V7H12.5V14H22ZM16 5.7C16 5 16.6 4.4 17.2 4.4C17.8 4.4 18.4 5 18.4 5.7V7H16V5.7ZM13.4992 22C13.4992 20.5 12.8992 19.1 11.9992 18C10.8992 16.8 9.29922 16 7.59922 16C5.89922 16 4.29922 16.8 3.19922 18C2.19922 19.1 1.69922 20.5 1.69922 22H13.4992ZM4.30078 11.7C4.30078 10 5.70078 8.5 7.50078 8.5C9.30078 8.5 10.7008 10.1 10.7008 11.8C10.7008 13.5 9.30078 15 7.50078 15C5.70078 15 4.30078 13.4 4.30078 11.7Z" fill={color} />
</svg>
