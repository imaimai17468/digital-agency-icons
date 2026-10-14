<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface UpdateLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<UpdateLineProps>(), {
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
    <path d="M20.5 13.7L22.5 11.7L23.5 12.7L19.7 16.5L15.9 12.7L17 11.6L19 13.6V11.7C19 7.7 15.9 4.4 12.1 4.4C11.3 4.4 10.5 4.6 9.7 4.9L9.2 3.5C10.2 3.2 11.1 3 12.1 3C16.8 3 20.5 6.9 20.5 11.8V13.7ZM5.1 11.7C5.1 15.7 8.2 19 12 19C12.5333 19 13.0667 18.9111 13.6 18.8222C13.8667 18.7778 14.1333 18.7333 14.4 18.7L14.9 20.1C13.9 20.4 13 20.6 12 20.6C7.4 20.6 3.6 16.6 3.6 11.8V10.4L1.6 12.4L0.5 11.3L4.3 7.5L8.2 11.2L7.1 12.3L5.1 10.3V11.7Z" :fill="color" />
  </svg>
</template>
