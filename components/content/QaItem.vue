<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
</script>

<template>
  <Disclosure as="div" class="pt-6" v-slot="{ open }">
    <dt>
      <DisclosureButton class="flex w-full items-start justify-between text-left text-zinc-900 dark:text-zinc-200">
        <span class="text-base font-semibold leading-7">
            <slot name="question" />
        </span>
        <span class="ml-6 flex h-7 items-center">
          <Icon name="heroicons:plus-small" v-if="!open" class="h-6 w-6" />
          <Icon name="heroicons:minus-small" v-else class="h-6 w-6" />
        </span>
      </DisclosureButton>
    </dt>
    <DisclosurePanel as="dd" class="mt-2 pr-12">
      <p class="text-base leading-7 text-zinc-600 dark:text-zinc-500">
        <slot name="answer" />
      </p>
    </DisclosurePanel>
  </Disclosure>
</template>
