<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface SpecialistLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<SpecialistLineProps>(), {
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
    <path d="M22 2.00014C19.9 1.30014 17.6 1.30014 15.5 1.90014C13.4 1.30014 11.1 1.40014 9 2.00014L8.5 2.20014V7.00014H10V3.30014C11.6 2.90014 13.2 2.90014 14.8 3.30014V10.5001C14.1 10.3001 13.4 10.2001 12.7 10.2001V11.7001C13.6 11.7001 14.5 11.9001 15.3 12.1001L15.5 12.2001L15.7 12.1001C17.6 11.5001 19.6 11.5001 21.5 12.1001L22.5 12.4001V2.20014L22 2.00014ZM21 10.5001C19.4 10.2001 17.8 10.2001 16.2 10.5001V3.30014C17.8 2.90014 19.4 2.90014 21 3.30014V10.5001ZM13.6016 22H12.1016C12.1016 19.5 10.1016 17.5 7.60156 17.5C5.10156 17.5 3.10156 19.5 3.10156 22H1.60156C1.60156 18.7 4.30156 16 7.60156 16C10.9016 16 13.6016 18.7 13.6016 22ZM9.29844 11.7C9.29844 10.8 8.59844 10 7.59844 10C6.59844 10 5.89844 10.8 5.89844 11.7C5.89844 12.6 6.69844 13.4 7.59844 13.4C8.49844 13.4 9.29844 12.6 9.29844 11.7ZM4.39844 11.7C4.39844 10 5.79844 8.5 7.59844 8.5C9.39844 8.5 10.8984 10 10.7984 11.7C10.7984 13.4 9.29844 14.9 7.59844 14.9C5.89844 14.9 4.39844 13.5 4.39844 11.7Z" :fill="color" />
  </svg>
</template>
