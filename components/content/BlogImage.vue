<script setup lang="ts">
const { src, alt } = defineProps<{
  src: string;
  alt?: string;
}>();
</script>
<template>
  <NuxtImg
    v-if="src"
    placeholder
    sizes="sm:100vw md:70vw"
    class="w-full"
    :src="src"
    :alt="alt"
    loading="lazy"
  />
</template>
