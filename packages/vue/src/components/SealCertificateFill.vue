<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface SealCertificateFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<SealCertificateFillProps>(), {
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
    <path d="M19 4.5H2V19.5H22V7.5C20.8 6.3 20.2 5.7 19 4.5ZM11.5 8.1H16.5V9.4H11.5V8.1ZM7.4 8.1C8.4 8.1 9.2 8.9 9.2 10C9.2 11 8.4 11.8 7.4 11.8C6.4 11.8 5.5 11 5.5 10C5.5 8.9 6.3 8.1 7.4 8.1ZM18.1 15.9H5.5V14.6H18.1V15.9ZM18.1 12.6H11.5V11.3H18.1V12.6ZM18 8.5V6L20.5 8.5H18Z" :fill="color" />
  </svg>
</template>
