<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface SearchFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<SearchFillProps>(), {
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
    <path d="M15.3992 14.5002C16.5992 13.1002 17.1992 11.3002 17.1992 9.5002C17.1992 5.2002 13.6992 1.7002 9.39922 1.7002C5.09922 1.7002 1.69922 5.2002 1.69922 9.5002C1.69922 13.8002 5.19922 17.3002 9.49922 17.3002C11.0992 17.3002 12.5992 16.8002 13.8992 15.9002L19.8992 21.9002L21.2992 20.5002L15.3992 14.5002ZM15.1992 9.5002C15.1992 12.7002 12.5992 15.3002 9.39922 15.3002C6.19922 15.3002 3.59922 12.7002 3.59922 9.5002C3.59922 6.3002 6.19922 3.7002 9.39922 3.7002C12.5992 3.7002 15.1992 6.3002 15.1992 9.5002Z" :fill="color" />
  </svg>
</template>
