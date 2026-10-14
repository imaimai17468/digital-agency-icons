<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface CertificationLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<CertificationLineProps>(), {
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
    <path d="M22.5 20H1.5V4H22.5V20ZM3 18.5H21V5.5H3V18.5ZM9 9.5V14.5H6.5V9.5H9ZM10.5 8H5V16H9.6H10.5V8ZM12.5 8H19V9.5H12.5V8ZM19 11.2002H12.5V12.7002H19V11.2002ZM12.5 14.5H19V16H12.5V14.5Z" :fill="color" />
  </svg>
</template>
