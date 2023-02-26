<script setup lang="ts">
import {ArrowLongRightIcon} from "@heroicons/vue/20/solid"
const { to } = withDefaults(defineProps<{
    to: string;
}>(),{
    to: "/",
})

</script>
<template>
    <NuxtLink :to="to" class="group/arrowlink flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-zinc-300 dark:hover:text-zinc-100">
        <span><slot/></span>
        <ArrowLongRightIcon class="w-5 h-5 transition transform-gpu group-hover/arrowlink:translate-x-1" />
    </NuxtLink>
</template>