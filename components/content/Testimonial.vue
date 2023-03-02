<script setup lang="ts">
import type { Image } from '~/../types/image';
defineProps({
  quote: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  image: {
    type: Object as PropType<Image>,
    required: false,
  },
});
</script>

<template>
  <div class="pt-8 sm:inline-block sm:w-full sm:px-4">
    <figure class="rounded-2xl bg-zinc-50 dark:bg-zinc-800/5 p-6 text-sm leading-6 dark:border dark:border-zinc-800/50">
      <blockquote class="text-zinc-900 dark:text-zinc-400">
        <p>“{{ quote }}”</p>
      </blockquote>
      <figcaption class="mt-6 flex items-center gap-x-4">
        <NuxtImg class="h-10 w-10 rounded-full bg-zinc-50 dark:bg-zinc-800 object-cover" :src="image?.src ? image.src : '/img/placeholder.jpg'" :alt="image?.alt ? image.alt : 'Placeholder'" :width="image?.width ? image.width : 80" :height="image?.height ? image.height : 80" />
        <div class="font-semibold text-zinc-900 dark:text-zinc-300">{{ name }}</div>
      </figcaption>
    </figure>
  </div>
</template>
