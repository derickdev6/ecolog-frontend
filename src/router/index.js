import { createRouter, createWebHistory } from "vue-router";

// Import views
import HomeView from "@/views/HomeView.vue";
import CompaniesView from "@/views/CompaniesView.vue";
import CompanyDetailView from "@/views/CompanyDetailView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ActivitiesView from "@/views/ActivitiesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProjectDetailView from "@/views/ProjectDetailView.vue";
import ActivityDetailView from "@/views/ActivityDetailView.vue";

/**
 * Application routes configuration
 * Each route object contains:
 * - path: URL path
 * - component: Vue component to render
 * - props: Whether to pass route params as component props
 * - meta: Additional route metadata
 */
const routes = [
  {
    path: "/",
    component: HomeView,
    meta: { title: "Home" },
  },
  {
    path: "/empresas",
    component: CompaniesView,
    meta: { title: "Companies" },
  },
  {
    path: "/empresa/:name",
    component: CompanyDetailView,
    props: true,
    meta: { title: "Company Details" },
  },
  {
    path: "/proyectos",
    component: ProjectsView,
    meta: { title: "Projects" },
  },
  {
    path: "/proyecto/:id",
    component: ProjectDetailView,
    props: true,
    meta: { title: "Project Details" },
  },
  {
    path: "/actividades",
    component: ActivitiesView,
    meta: { title: "Activities" },
  },
  {
    path: "/actividad/:id",
    component: ActivityDetailView,
    props: true,
    meta: { title: "Activity Details" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
    meta: { title: "404 Not Found" },
  },
];

// Create router instance with HTML5 history mode
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Navigation guard to update page title
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Ecolog`;
  next();
});

export default router;
