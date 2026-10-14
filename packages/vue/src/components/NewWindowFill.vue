<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface NewWindowFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<NewWindowFillProps>(), {
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
    <path d="M4.80078 19.1998H19.2008V12.7998H21.2008V21.1998H2.80078V2.7998H11.2008V4.7998H4.80078V19.1998ZM13.7016 4.7998V2.7998H21.2016V10.2998H19.2016V6.1998L10.5016 14.8998L9.10156 13.4998L17.8016 4.7998H13.7016Z" :fill="color" />
  </svg>
</template>
