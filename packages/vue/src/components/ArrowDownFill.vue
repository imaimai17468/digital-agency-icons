<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface ArrowDownFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<ArrowDownFillProps>(), {
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
    <path d="M20.0016 6.6001L12.0016 14.6001L4.00156 6.6001L2.60156 8.0001L12.0016 17.4001L21.4016 8.0001L20.0016 6.6001Z" :fill="color" />
  </svg>
</template>
