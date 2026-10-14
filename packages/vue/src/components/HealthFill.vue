<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface HealthFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<HealthFillProps>(), {
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
    <path d="M12 3.6C13.1 2.6 14.5 2 16 2C19.3 2 22 4.7 22 8C22 15.8 12.8 21.6 12.4 21.8L12 22L11.6 21.8C11.2 21.5 2 15.7 2 8C2 4.7 4.7 2 8 2C9.5 2 10.9 2.6 12 3.6Z" :fill="color" />
  </svg>
</template>
