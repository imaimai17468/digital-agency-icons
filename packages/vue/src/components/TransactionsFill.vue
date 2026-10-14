<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface TransactionsFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<TransactionsFillProps>(), {
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
    <path d="M5.40156 8.0001L7.40156 10.0001L6.00156 11.4001L1.60156 7.0001L6.00156 2.6001L7.40156 4.0001L5.40156 6.0001H21.2016V8.0001H5.40156ZM16.6031 13.0001L18.0031 11.6001L22.4031 16.0001L18.0031 20.4001L16.6031 19.0001L18.6031 17.0001H2.70312V15.0001H18.6031L16.6031 13.0001Z" :fill="color" />
  </svg>
</template>
