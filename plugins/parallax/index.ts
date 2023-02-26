import Rellax from "rellax";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("parallax", {
    mounted(el, binding, vnode, prevVnode) {
      Rellax(el, {
        round: true,
      });
    },
  });
});
