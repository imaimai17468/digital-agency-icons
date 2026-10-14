<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface ExpenditureLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<ExpenditureLineProps>(), {
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
    <path d="M19.5 7H20.2C21.2 7 22 7.8 22.1 8.7V15.4V18.8C22.1 19.8 21.3 20.6 20.3 20.6H3.8C2.8 20.6 2 19.8 2 18.8V5.3C2 4.3 2.8 3.5 3.7 3.5H17.7C18.7 3.5 19.5 4.3 19.5 5.3V7ZM17.7 5H3.5V19H20.5V8.5H6V7H18V5H17.7ZM11.9992 12.9L13.5992 10H14.7992L13.0992 13H14.4992V14H12.4992V15H14.4992V16H12.4992V17.5H11.4992V16H9.49922V15H11.4992V14H9.49922V13H10.8992L9.19922 10H10.3992L11.9992 12.9Z" :fill="color" />
  </svg>
</template>
