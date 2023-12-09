import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/movies',
            name: 'movies',
            component: () => import("../components/MoviesView.vue")
        }
    ]
})

export default router;