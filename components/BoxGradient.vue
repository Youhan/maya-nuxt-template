<script setup lang="ts">
const { bgClass, gradClass, roundnessClass, contentClass, as } = withDefaults(defineProps<{
    bgClass?: string;
    gradClass?: string;
    roundnessClass?: string;
    contentClass?: string;
    as?: string;
}>(),{
    bgClass: "bg-white dark:bg-zinc-900",
    gradClass: "bg-gradient-to-r from-yellow-400 to-pink-400 opacity-30",
    roundnessClass: "rounded-2xl",
    contentClass: "",
    as: "div"
})
</script>

<template>
    <component :is="as" :class="$cls('group relative p-8', roundnessClass)" v-bind="$attrs">
        <div :class="$cls('absolute -inset-px', gradClass, roundnessClass)" aria-hidden="true"></div>
        <div :class="$cls('absolute inset-0', bgClass, roundnessClass)" aria-hidden="true"></div>
        <div class="relative z-10" :class="contentClass">
            <slot />
        </div>
    </component>
</template>
