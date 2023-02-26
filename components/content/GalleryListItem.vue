<script setup lang="ts">
import type { Image } from "~/../types/image";
type Gallery = {
  _path: string;
  title: string;
  description?: string;
  cover?: Image;
};

const props = defineProps({
  gallery: {
    type: Object as PropType<Gallery>,
    required: true,
    validator: (value: Gallery) => {
      if (value?._path && value.title) {
        return true;
      }
      return false;
    },
  },
});
</script>

<template>
  <NuxtLink :to="gallery._path" class="group">
    <div
      class="relative w-full overflow-hidden rounded-lg aspect-[3/2] md:aspect-[2/3] dark:bg-zinc-800"
    >
      <NuxtImg
        :src="gallery.cover?.src || 'img/placeholder.jpg'"
        :alt="gallery.cover?.alt || gallery.title"
        :width="gallery.cover?.width"
        :height="gallery.cover?.height"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
        sizes="sm:100vw md:50vw lg:30vw"
        loading="lazy"
        placeholder
      />
      <div class="absolute bottom-0 w-full p-4 grid grid-cols-4 gap-3" v-if="gallery?.images?.length">
        <div
          v-for="thumbnail, index in gallery.images.slice(0, 4)"
          :key="index"
          class="col-span-1 aspect-square w-full rounded-lg overflow-hidden group-hover:opacity-75 dark:bg-zinc-800"
        >
          <NuxtImg
            :src="thumbnail.src"
            alt="thumbnail.alt"
            class="h-full w-full object-cover object-center"
            loading="lazy"
            sizes="sm:70px md:75px"
            placeholder
          />
        </div>
      </div>
    </div>
    <div
      class="mt-4 flex items-center justify-between text-base font-medium dark:text-zinc-200"
    >
      <h3>{{ gallery.title }}</h3>
    </div>
  </NuxtLink>
</template>
