import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CompaniesView from "@/views/CompaniesView.vue";
import CompanyDetailView from "@/views/CompanyDetailView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ActivitiesView from "@/views/ActivitiesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProjectDetailView from "@/views/ProjectDetailView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/empresas", component: CompaniesView },
  { path: "/empresa/:name", component: CompanyDetailView, props: true },
  { path: "/proyectos", component: ProjectsView },
  { path: "/proyecto/:id", component: ProjectDetailView, props: true },
  { path: "/actividades", component: ActivitiesView },
  { path: "/:pathMatch(.*)*", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
