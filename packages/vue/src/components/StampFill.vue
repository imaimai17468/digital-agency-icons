<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface StampFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<StampFillProps>(), {
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
    <path d="M12.0001 3C14.4001 3 16.1001 5.3 15.5001 7.5L14.5001 11.2H9.50011L8.50011 7.5C7.90011 5.3 9.60011 3 12.0001 3ZM4 14.5V18.5H20V14.5C20 13.4 19.1 12.5 18 12.5H6C4.9 12.5 4 13.4 4 14.5ZM21.5 20.5H2.5V22H21.5V20.5Z" :fill="color" />
  </svg>
</template>
