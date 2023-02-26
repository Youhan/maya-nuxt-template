<script setup lang="ts">
interface Award {
  title?: string;
  year?: string;
  description?: string;
}

defineProps({
  titleText: {
    type: String,
    required: false,
  },
  awards: {
    type: Array as PropType<Award[]>,
    required: false,
  },
});
</script>
<template>
  <div class="not-prose flex flex-col gap-4 lg:w-1/2">
    <h3 class="uppercase tracking-widest font-light text-zinc-900 dark:text-orange-600">
      {{ titleText }}
    </h3>
    <ul class="space-y-4">
      <AwardsItem v-for="(item, index) in awards" :key="index" :title="item.title" :year="item.year" :description="item.description" />
    </ul>
  </div>
</template>
