<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface InformationFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<InformationFillProps>(), {
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
    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM12.7 18H11.2V9.5H12.7V18ZM11.3 6.3C11.5 6.1 11.7 6 12 6C12.3 6 12.5 6.1 12.7 6.3C12.9 6.5 13 6.7 13 7C13 7.3 12.9 7.5 12.7 7.7C12.5 7.9 12.3 8 12 8C11.7 8 11.5 7.9 11.3 7.7C11.1 7.5 11 7.3 11 7C11 6.7 11.1 6.5 11.3 6.3Z" :fill="color" />
  </svg>
</template>
