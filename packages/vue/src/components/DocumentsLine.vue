<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface DocumentsLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<DocumentsLineProps>(), {
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
    <path d="M11.6 6L9.6 4H2V21H22V6H11.6ZM9 5.5L11 7.5H20.5V10.5H3.5V5.5H9ZM3.5 19.5V12H20.5V19.5H3.5Z" :fill="color" />
  </svg>
</template>
