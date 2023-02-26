<script setup lang="ts">
const { links } = defineProps<{
  links: { name: string; to: string }[];
}>();
</script>

<template>
  <ul class="flex items-center gap-4">
    <NuxtLink
      :to="link.to"
      :class="[
        $route.path === link.to? 'text-gradient': 'text-zinc-700 dark:text-zinc-400',
        'px-2 hover:text-zinc-900 dark:hover:text-zinc-200'
      ]"
      v-for="(link, index) in links"
      :key="`navlinks-${index}`"
    >
      {{ link.name }}
    </NuxtLink>
  </ul>
</template>
