<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <li class="dark:text-zinc-400 flex flex-col gap-1">
    <p class="flex items-baseline gap-2">
      <span class="font-display text-2xl text-zinc-500 dark:text-zinc-500">{{ year }}</span>
      <span><strong class="font-semibold dark:text-zinc-200">{{ title }}</strong></span>
    </p>
    <span class="text-sm">{{ description }}</span>
  </li>
</template>
