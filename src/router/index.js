import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import EmpresasView from "@/views/EmpresasView.vue";
import ProyectosView from "@/views/ProyectosView.vue";
import ActividadesView from "@/views/ActividadesView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/empresas", component: EmpresasView },
  { path: "/proyectos", component: ProyectosView },
  { path: "/actividades", component: ActividadesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
