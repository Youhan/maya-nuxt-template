<script setup lang="ts">
const links = [
  { name: "Home", to: "/" },
  { name: "Galleries", to: "/galleries" },
  { name: "Stories", to: "/stories" },
  { name: "Hire me", to: "/hire-me" },
] as { name: string; to: string }[];

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

const showHeader = ref(true);
const lastScrollPosition = ref(0);

const onScroll = () => {
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  // Momentum scrolling on iOS can cause the scroll position to be negative
  if (currentScrollPosition < 0) return;

  // add 60px delay
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) return;

  // show if scrolling up
  showHeader.value = currentScrollPosition < lastScrollPosition.value;

  lastScrollPosition.value = currentScrollPosition;
};
</script>
<template>
  <div
    :class="[
      showHeader ? 'translate-y-0' : '-translate-y-full',
      'transform-gpu transition-transform duration-500 sticky top-0 z-50',
    ]"
  >
    <Container class="pt-4 lg:pt-10">
      <div class="flex items-center justify-between">
        <Logo />
        <div
          class="border border-zinc-300/50 dark:border-zinc-900/60 rounded-full pl-2 lg:pl-4 pr-2 py-2 backdrop-blur-lg bg-zinc-100/50 dark:bg-zinc-800/50"
        >
          <div class="flex items-center gap-4">
            <div class="hidden lg:block">
              <NavLinks :links="links" />
            </div>
            <div class="lg:hidden">
              <NavLinksMobile :links="links" />
            </div>
            <ColorModeSwitch />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
