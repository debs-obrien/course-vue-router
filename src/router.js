import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "@/store.js";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      return savedPosition;
    } else {
      const position = {};

      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash;

        // specify offset of the element
        if (to.hash === "#experience") {
          position.offset = { y: 10 };
        }

        if (document.querySelector(to.hash)) {
          return position;
        }

        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return false;
      }
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/destination/:location",
      name: "destinationDetails",
      props: true,
      component: () =>
        import(/* webpackChunkName: "DestinationDetails" */ "./views/DestinationDetails.vue"),
      children: [
        {
          path: ":experience",
          name: "experienceDetails",
          props: true,
          component: () =>
            import(/* webpackChunkName: "ExperienceDetails" */ "./views/ExperienceDetails.vue")
        }
      ],
      beforeEnter: (to, from, next) => {
        const slug = to.params.location;
        if (store.destinations.find(destination => destination.slug === slug)) {
          next();
        } else {
          next({ name: "notFound" });
        }
      }
    },

    {
      path: "*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */ "./views/NotFound.vue")
    }
  ]
});
