<template>
  <div class="mt-24">
    <div class="text-center">
      <slot name="title" />
    </div>
    <div class="not-prose -mt-8 sm:-mx-4 sm:columns-2 sm:text-[0]">
      <slot name="items" />
    </div>
  </div>
</template>
