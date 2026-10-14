<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface FillableCardLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<FillableCardLineProps>(), {
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
    <path d="M1 16.5H11.5V15H2.5V6H20V8H21.5V4.5H1V16.5ZM11.5 8H18.5V9.5H11.5V8ZM16 11.5H11.5V13H16V11.5ZM4 10.4002L6.5 12.9002L10.1 9.3002L9 8.2002L6.5 10.8002L5.1 9.3002L4 10.4002ZM20.5 13.4L13.4 20.5H12V19.1L19.1 12L20.5 13.4ZM19.7695 11.2861L21.1837 9.87193L22.5979 11.2861L21.1837 12.7003L19.7695 11.2861Z" :fill="color" />
  </svg>
</template>
