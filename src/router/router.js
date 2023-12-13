import { createRouter, createWebHistory } from 'vue-router';
import MoviePage from '../pages/MoviePage.vue';
import HomePage from '../pages/HomePage.vue';
import YourMoviesPage from '../pages/YourMoviesPage.vue';

const routes = [

    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
  {
    path: '/movies',
    name: 'movies',
    component: MoviePage,
  },
  {
    path: '/yourmovies',
    name: 'yourMovies',
    component: YourMoviesPage,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;