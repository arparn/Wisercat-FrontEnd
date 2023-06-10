import { routes } from "./pages";
import { createRouter, createWebHistory } from "vue-router/dist/vue-router";

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})