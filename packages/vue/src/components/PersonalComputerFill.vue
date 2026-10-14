<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface PersonalComputerFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<PersonalComputerFillProps>(), {
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
    <path d="M3 16.4999H10.5V19.4999H7.5V20.9999H16.5V19.4999H13.5V16.4999H21V4.8999H3V16.4999Z" :fill="color" />
  </svg>
</template>
