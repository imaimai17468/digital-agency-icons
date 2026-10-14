<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface PrinterFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<PrinterFillProps>(), {
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
    <path d="M5 3H19V6.2H5V3ZM20.3 17H22V7.5H2V17H3.7V10.7H20.3V17ZM5 21H19V12H5V21ZM8 14.5H16V15.5H8V14.5ZM16 18.5H8V17.5H16V18.5Z" :fill="color" />
  </svg>
</template>
