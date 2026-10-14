<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface ArrowUpFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<ArrowUpFillProps>(), {
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
    <path d="M12.0016 6.1001L2.60156 15.5001L4.00156 16.9001L12.0016 8.9001L20.0016 16.9001L21.4016 15.5001L12.0016 6.1001Z" :fill="color" />
  </svg>
</template>
