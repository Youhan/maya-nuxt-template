<template>
  <div class="not-prose lg:max-w-3xl mx-auto pt-8 lg:pt-44 content-visibility-auto contain-intrinsic-size-[auto_400px]">
    <div class="flex flex-col gap-9">
      <h1 class="text-center font-display font-light leading-snug text-3xl md:text-4xl lg:text-5xl text-zinc-700 dark:text-zinc-300">
        <slot> Inspire Emotion and Evoke Storytelling through the Art of Photography. </slot>
      </h1>
      <p class="text-zinc-700 dark:text-zinc-400 text-center text-sm lg:text-base px-0 md:px-14 lg:px-24">
        <slot name="description"> Explore my photography portfolio and see the world through my creative lens. Contact me if you would like to hire me. </slot>
      </p>
    </div>
  </div>
</template>
