<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface ArrowRightFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<ArrowRightFillProps>(), {
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
    <path d="M9.00156 2.6001L7.60156 4.0001L15.6016 12.0001L7.60156 20.0001L9.00156 21.4001L18.4016 12.0001L9.00156 2.6001Z" :fill="color" />
  </svg>
</template>
