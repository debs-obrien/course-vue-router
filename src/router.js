import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/details/:location",
      name: "destinationDetails",
      component: () =>
        import(/* webpackChunkName: "DestinationDetails" */ "./views/DestinationDetails.vue")
    },
    {
      path: "/details/:location/:experience",
      name: "experienceDetails",
      component: () =>
        import(/* webpackChunkName: "ExperienceDetails" */ "./views/ExperienceDetails.vue")
    },

{
      path: "*",
      name: "Not Found",
      component: () =>
        import(/* webpackChunkName: "Not Found" */ "./views/NotFound.vue")
    }
  ]
});
