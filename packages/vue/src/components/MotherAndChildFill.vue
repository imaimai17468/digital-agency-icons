<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface MotherAndChildFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<MotherAndChildFillProps>(), {
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
    <path d="M15.5 5.5C15.5 7.433 13.933 9 12 9C10.067 9 8.5 7.433 8.5 5.5C8.5 3.567 10.067 2 12 2C13.933 2 15.5 3.567 15.5 5.5ZM13.1984 10.3999C16.9984 10.3999 19.9984 13.4999 19.9984 17.1999V20.9999H15.5984C14.9984 19.4999 13.5984 18.4999 11.8984 18.4999C10.1984 18.4999 8.79844 19.4999 8.19844 20.9999H3.89844V17.1999C3.89844 13.3999 6.99844 10.3999 10.6984 10.3999H13.1984ZM9.99844 15.4999C9.99844 16.5999 10.8984 17.4999 11.9984 17.4999C13.0984 17.4999 13.9984 16.5999 13.9984 15.4999C13.9984 14.3999 13.0984 13.4999 11.9984 13.4999C10.8984 13.4999 9.99844 14.3999 9.99844 15.4999Z" :fill="color" />
  </svg>
</template>
