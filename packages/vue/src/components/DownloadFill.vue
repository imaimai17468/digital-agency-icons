<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface DownloadFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<DownloadFillProps>(), {
  size: 24,
  color: 'currentColor',
});

const svgStyle = computed<StyleValue>(() => [
  { verticalAlign: 'middle' },
  props.style,
]);
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.class"
    :style="svgStyle"
    :aria-label="ariaLabel"
    :role="title ? 'img' : undefined"
  >
    <title v-if="title">{{ title }}</title>
    <path d="M17.9977 8.5998L19.3977 9.9998L11.9977 17.3998L4.59766 9.9998L5.99766 8.5998L10.9977 13.5998V2.7998H12.9977V13.5998L17.9977 8.5998ZM2.69922 19.1997H21.1992V21.1997H2.69922V19.1997Z" :fill="color" />
  </svg>
</template>
