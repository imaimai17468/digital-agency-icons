<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface SmartphoneLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<SmartphoneLineProps>(), {
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
    <path d="M17.2 2H6.7C5.8 2 5 2.8 5 3.8V20.3C5 21.3 5.8 22.1 6.8 22.1H17.3C18.3 22.1 19.1 21.3 19.1 20.3V3.8C19 2.8 18.2 2 17.2 2ZM12.6 20.5C12.4 20.6 12.2 20.7 12 20.7C11.8 20.7 11.5 20.6 11.4 20.5C11.2 20.3 11 20.1 11 19.7C11 19.1 11.4 18.7 12 18.7C12.6 18.7 13 19.1 13 19.7C13 20.1 12.9 20.3 12.6 20.5ZM17.5 17.5H6.5V4H17.5V17.5Z" :fill="color" />
  </svg>
</template>
