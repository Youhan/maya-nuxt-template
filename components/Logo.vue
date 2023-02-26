<template>
  <NuxtLink
    to="/"
    class="group flex items-center gap-4 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 focus:outline-none focus-visible:ring-offset-2 ring-offset-zinc-900 focus:rounded-full focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
  >
    <div class="rounded-full border-2 border-white dark:border-zinc-400 shadow-md group-hover:shadow-xl transition-shadow duration-100 shrink-0">
      <NuxtImg
        class="inline-block h-14 w-14 rounded-full"
        src="/img/logo.jpg"
        alt="Oscar Mattern"
        format="webp"
        width="100"
        height="100"
      />
    </div>
    <span class="uppercase tracking-widest hidden md:inline-flex shrink-1 sr-only">Oscar Mattern</span>
  </NuxtLink>
</template>
