<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface ApplicationFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<ApplicationFillProps>(), {
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
    <path d="M4 22H20V5.2L16.7 2H4V22ZM11.3 19.8L8.4 17.2L9.3 16.2L11.3 18L14.6 14.9L15.5 15.9L11.3 19.8ZM15.9 3.3L18.9 6.3H15.9V3.3ZM7 8.2H17V9.7H7V8.2ZM7 11.7H17V13.2H7V11.7Z" :fill="color" />
  </svg>
</template>
