<script setup lang="ts">
const { src1, src2, src3, alt1, alt2, alt3 } = defineProps<{
    src1: string;
    alt1: string;
    src2: string;
    alt2: string;
    src3: string;
    alt3: string;
}>();
</script>

<template>
  <div class="not-prose pb-8 grid lg:grid-cols-3 gap-3 lg:gap-6 aspect-[1] sm:aspect-[4/3] lg:aspect-[4/3] lg:-mr-12 lg:-ml-12">
    <div
      class="col-span-2 row-span-2 dark:bg-gray-800 rounded-md lg:rounded-xl overflow-hidden"
    >
      <NuxtImg
        :src="src1"
        :alt="alt1"
        loading="lazy"
        class="h-full w-full object-cover object-center"
        sizes="sm:100vw md:50vw"
      />
    </div>
    <div class="col-span-1 dark:bg-gray-800 rounded-md lg:rounded-xl overflow-hidden">
      <NuxtImg
        :src="src2"
        :alt="alt2"
        loading="lazy"
        class="h-full w-full object-cover object-center"
        sizes="sm:100vw md:30vw"
      />
    </div>
    <div class="col-span-1 dark:bg-gray-800 rounded-md lg:rounded-xl overflow-hidden">
      <NuxtImg
        :src="src3"
        :alt="alt3"
        loading="lazy"
        class="h-full w-full object-cover object-center"
        sizes="sm:100vw md:30vw"
      />
    </div>
  </div>
</template>