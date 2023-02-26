<script setup lang="ts">
import { withTrailingSlash } from "ufo";

const props = defineProps({
  path: {
    type: String,
    default: "stories",
  },
});

const { data: _stories } = await useAsyncData(
  "stories",
  async () =>
    await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find()
);

const stories = computed(() => _stories.value || []);
</script>

<template>
  <div
    v-if="stories?.length"
    class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    <StoryListItem v-for="story in stories" :key="story._path" :story="story" />
    
  </div>
  <div v-else>
    <p class="">No Stories found.</p>
  </div>
</template>
