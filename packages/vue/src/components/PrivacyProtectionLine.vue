<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface PrivacyProtectionLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  ariaLabel?: string;
  title?: string;
}

const props = withDefaults(defineProps<PrivacyProtectionLineProps>(), {
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
    <path d="M20 7V5.7C20 4.2 18.8 3 17.2 3C15.6 3 14.5 4.2 14.5 5.7V7H12.5V14H13H22V7H20ZM16 5.7C16 5 16.6 4.4 17.2 4.4C17.8 4.4 18.4 5 18.4 5.7V7H16V5.7ZM20.5 12.5H14V8.5H20.5V12.5ZM11.9016 18C10.8016 16.8 9.20156 16 7.50156 16C5.80156 16 4.20156 16.8 3.10156 18C2.10156 19.1 1.60156 20.5 1.60156 22H3.00156C3.00156 20.2 4.00156 18.7 5.50156 18C6.10156 17.7 6.80156 17.5 7.50156 17.5C8.20156 17.5 8.90156 17.7 9.50156 18C11.0016 18.7 12.0016 20.2 12.0016 22H13.5016C13.5016 20.5 12.9016 19.1 11.9016 18ZM4.30078 11.7C4.30078 10 5.70078 8.5 7.50078 8.5C9.30078 8.5 10.7008 10.1 10.7008 11.8C10.7008 13.5 9.30078 15 7.50078 15C5.70078 15 4.30078 13.4 4.30078 11.7ZM5.70078 11.7C5.70078 12.7 6.50078 13.5 7.50078 13.5C8.50078 13.5 9.30078 12.8 9.30078 11.8C9.30078 10.8 8.50078 10 7.50078 10C6.50078 10 5.70078 10.7 5.70078 11.7Z" :fill="color" />
  </svg>
</template>
