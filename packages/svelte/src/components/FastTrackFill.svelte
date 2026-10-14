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
  <path d="M16.1992 3.7998C16.1992 4.90437 15.3038 5.7998 14.1992 5.7998C13.0946 5.7998 12.1992 4.90437 12.1992 3.7998C12.1992 2.69524 13.0946 1.7998 14.1992 1.7998C15.3038 1.7998 16.1992 2.69524 16.1992 3.7998ZM9.19922 5.5H1.69922V7.5H9.19922V5.5ZM18.4 13.0997L18.2 12.9997C17.5 12.6997 16.8 12.3997 16.4 11.9997V12.9997C18.6 15.9997 19.2 19.1997 18.5 22.6997L16.6 22.3997C16.5 19.9997 16.1 18.4997 15 16.8997C14.3 18.2997 12.6 20.4997 10 22.3997L8.7 20.9997C10.3 19.2997 11.6 16.6997 12.7 13.5997V9.89971C12.1 10.0997 11.6 10.3997 11.2 10.7997C10.8 11.1997 10.4 11.7997 10.2 12.4997L10.1 12.7997L8.5 12.1997V11.9997C8.6 11.2997 8.9 10.4997 9.3 9.79971C9.9 8.79971 10.7 7.99971 11.7 7.39971C12.4 6.89971 13.4 6.69971 14.3 6.69971C15.2 6.69971 15.9 7.19971 16.4 8.29971C16.9 9.59971 17.9 10.3997 19.1 11.1997L18.4 13.0997ZM19.1289 13.3545L20.3476 10.0736L22.5036 10.8745L21.2849 14.1554L19.1289 13.3545ZM1.69922 8.69971H7.19922V10.6997H1.69922V8.69971ZM5.19922 12H1.69922V14H5.19922V12Z" fill={color} />
</svg>
