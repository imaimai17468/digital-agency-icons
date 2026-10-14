<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface CopyLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<CopyLineProps>(), {
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
    <path d="M7.5 18H20V2.5H7.5V18ZM18.5 16.5H9V4H18.5V16.5ZM4 21.5002H15.8V20.0002H5.5V6.7002H4V21.5002Z" :fill="color" />
  </svg>
</template>
