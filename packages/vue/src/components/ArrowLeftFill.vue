<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface ArrowLeftFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<ArrowLeftFillProps>(), {
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
    <path d="M7.90156 12.0001L15.9016 4.0001L14.5016 2.6001L5.10156 12.0001L14.5016 21.4001L15.9016 20.0001L7.90156 12.0001Z" :fill="color" />
  </svg>
</template>
