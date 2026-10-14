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
  <path d="M7.09922 7.8C8.70084 7.8 9.99922 6.50163 9.99922 4.9C9.99922 3.29837 8.70084 2 7.09922 2C5.49759 2 4.19922 3.29837 4.19922 4.9C4.19922 6.50163 5.49759 7.8 7.09922 7.8ZM22.4984 20.9999V13.6999C22.4984 11.0999 20.3984 8.8999 17.6984 8.8999H15.9984C14.2984 8.8999 12.8984 9.7999 11.9984 11.0999C11.1984 9.7999 9.69844 8.8999 7.99844 8.8999H6.19844C3.59844 8.8999 1.39844 10.9999 1.39844 13.6999V20.9999H8.29844C8.89844 19.4999 10.2984 18.4999 11.9984 18.4999C13.6984 18.4999 15.0984 19.4999 15.6984 20.9999H22.4984ZM11.1984 13.2999C11.6984 13.0999 12.2984 13.0999 12.6984 13.2999C13.3984 13.5999 13.8984 14.2999 13.8984 15.0999C13.8984 16.1999 12.9984 17.0999 11.8984 17.0999C10.7984 17.0999 9.89844 16.1999 9.89844 15.0999C9.99844 14.3999 10.4984 13.5999 11.1984 13.2999ZM16.9 2C18.5 2 19.8 3.3 19.8 4.9C19.8 6.6 18.5 7.9 16.9 7.8C15.3 7.8 14 6.5 14 4.9C14 3.3 15.3 2 16.9 2Z" fill={color} />
</svg>
