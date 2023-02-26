<script setup lang="ts">
import type { Image } from "../../types/image";
defineProps({
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  photo: {
    type: Object as PropType<Image>,
    required: false,
  },
});
</script>
<template>
  <div class="not-prose mt-16 lg:mt-48 content-visibility-visible contain-intrinsic-size-[auto_750px]">
    <div class="grid grid-cols-1 lg:grid-cols-7 gap-8">
      <div class="col-span-4 flex flex-col gap-8 order-2 lg:order-1">
        <h2 class="text-4xl lg:text-6xl font-display text-zinc-800 dark:text-zinc-200">
          {{ firstname }} <br />
          {{ lastname }}
        </h2>
        <div class="dark:text-zinc-400 flex flex-col gap-4">
          <slot name="description"></slot>
        </div>
        <NuxtImg src="/img/home/sign.png" alt="signature" class="h-8 mr-auto" />
      </div>

      <div v-parallax 
        data-rellax-xs-speed="0"
        data-rellax-mobile-speed="0"
        data-rellax-tablet-speed="0"
        data-parallax-speed="-1" data-rellax-percentage="0.5" class="col-span-3 order-1 lg:order-2 pl-2 pt-2">
        <div class="lg:absolute aspect-square lg:aspect-[2/3] flex-none overflow-hidden bg-zinc-100 dark:bg-zinc-800 w-32 lg:w-72 rounded-2xl rotate-3">
          <NuxtImg
            placeholder
            :src="photo?.src ? photo.src : 'img/placeholder.jpg'"
            :alt="photo?.alt ? photo.alt : 'Oscar Mattern'"
            :width="photo?.width ? photo.width : 1"
            :height="photo?.height ? photo.height : 1"
            format="webp"
            loading="lazy"
            class="h-full w-full object-cover"
            sizes="sm:50vw md:50vw lg:30vw"
          />
        </div>
      </div>
    </div>

    <hr class="my-10 h-px border-0 bg-zinc-200 dark:bg-zinc-800" />
    <slot name="extra"></slot>
  </div>
</template>
