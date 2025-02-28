import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CompaniesView from "@/views/CompaniesView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ActivitiesView from "@/views/ActivitiesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/empresas", component: CompaniesView },
  { path: "/proyectos", component: ProjectsView },
  { path: "/actividades", component: ActivitiesView },
  { path: "/:pathMatch(.*)*", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
