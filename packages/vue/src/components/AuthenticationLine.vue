<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface AuthenticationLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<AuthenticationLineProps>(), {
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
    <path d="M11.7 21.9L12 22L12.3 21.8C17.7 19.7 21 15.4 21 10.6V4.9L12 2L3 4.9V10.7C3 15.5 6.3 19.8 11.7 21.9ZM4.5 10.6V6L12 3.6L19.5 6V10.6C19.5 14.7 16.6 18.4 12 20.3C7.4 18.4 4.5 14.7 4.5 10.6ZM7 11.5L11 15.5L17 9.6L15.9 8.5L11 13.4L8.1 10.4L7 11.5Z" :fill="color" />
  </svg>
</template>
