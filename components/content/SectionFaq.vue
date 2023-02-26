<template>
  <div class="not-prose mt-32">
    <div class="divide-y divide-zinc-900/10 dark:divide-zinc-100/10">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-zinc-900 dark:text-zinc-100">
        <slot name="title">Frequently asked questions</slot>
      </h2>
      <dl class="mt-10 space-y-6 divide-y divide-zinc-900/10 dark:divide-zinc-100/10">
        <slot name="items" />
      </dl>
    </div>
  </div>
</template>
