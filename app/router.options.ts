import type { RouterConfig } from "@nuxt/schema";
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }

        // if both from and to paths contain /galleries then scroll to top
        if (from.path.includes('/galleries') && to.path.includes('/galleries')) {
            return { top: 0 }
        }
        
        return { top: 0 }
    },
    
};
