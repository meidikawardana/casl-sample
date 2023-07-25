const routes = [
  {
    path: "/",
    component: () => import("src/modules/Sep/pages/SepsGrid.vue"),
    meta: {
      title: "SEP",
      name: "SEP",
      requiresAuth: false,
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
