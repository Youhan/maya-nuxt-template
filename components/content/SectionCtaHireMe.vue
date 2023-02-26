<template>
  <div class="not-prose">
    <div class="relative px-4 py-12 lg:py-24 rounded-2xl overflow-hidden border border-zinc-200/50 dark:border-yellow-100/5 shadow-sm dark:shadow-2xl">
      <div class="">
        <h2 class="font-display font-thin text-4xl max-w-2xl mx-auto text-center text-zinc-900 dark:text-gradient">
          <slot name="title">Questions or collaboration ideas?</slot>
        </h2>
        <div class="flex flex-col gap-4 mt-8 max-w-lg mx-auto text-center text-zinc-600 dark:text-zinc-400 text-sm">
          <slot name="description">
            <p>I would love to hear from you! Whether you have questions about my work, have collaboration ideas, or are interested in hiring me for a project, don't hesitate to reach out.</p>
            <p>I usually respond within hours!</p>
          </slot>
        </div>
        <ul class="mt-16 flex flex-col gap-4 lg:gap-12 lg:flex-row items-center justify-center max-w-2xl mx-auto">
          <li>
            <NuxtLink to="mailto:oscar@mattern.com" class="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100">
              <Icon name="heroicons:envelope-20-solid" size="1.8rem" />
              <span>oscar@mattern.com</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://instagram.org" class="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100">
              <Icon name="fe:instagram" size="1.8rem" />
              <span>oscarphotography</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://instagram.org" class="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100">
              <Icon name="fe:twitter" size="1.8rem" />
              <span>oscarphotography</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <svg viewBox="0 0 1024 1024" class="hidden dark:block absolute top-1/2 left-1/2 h-[64rem] w-[64rem] -translate-x-1/2 pointer-events-none" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle>
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
            <stop stop-color="#18181B"></stop>
            <stop offset="1" stop-color="#333626" stop-opacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 1024 1024" class="dark:hidden absolute top-1/2 left-1/2 h-[64rem] w-[64rem] -translate-x-1/2 pointer-events-none" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle>
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
            <stop stop-color="#F0F0F0"></stop>
            <stop offset="1" stop-color="#F3E0AD" stop-opacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>
