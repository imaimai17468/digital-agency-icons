<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface CertificationWithSealLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<CertificationWithSealLineProps>(), {
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
    <path d="M16.7 2H4V22H20V5.2L16.7 2ZM5.5 20.5V3.5H16V6H18.5V20.5H5.5ZM16.5 7.5H7.5V9H16.5V7.5ZM7.5 10.5H16.5V12H7.5V10.5ZM12 13.5H7.5V15H12V13.5ZM17 17C17 18.1046 16.1046 19 15 19C13.8954 19 13 18.1046 13 17C13 15.8954 13.8954 15 15 15C16.1046 15 17 15.8954 17 17Z" :fill="color" />
  </svg>
</template>
