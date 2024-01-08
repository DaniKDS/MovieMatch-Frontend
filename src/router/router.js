import { createRouter, createWebHistory } from 'vue-router';
import MoviePage from '../pages/MoviePage.vue';
import HomePage from '../pages/HomePage.vue';
import YourMoviesPage from '../pages/YourMoviesPage.vue';
import MapPage from '../pages/MapPage.vue';
import PeoplePage from '../pages/PeoplePage.vue';
import WheelPage from '../pages/WheelPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import CountryView from '../pages/CountryPage.vue';  // daca faci alta pagina aici modifici components cu page


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
  },
  {
    path: '/map',
    name: 'map',
    component: MapPage,
  },
  {
    path: '/people',
    name: 'people',
    component: PeoplePage,
  },
  {
    path: '/wheel',
    name: 'wheel',
    component: WheelPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  // {
  //   path: '/country/ro',    // ca sa nu adaugi sute de rute, mergi pe rutare dinamica
  //   name: 'region',
  //   component: CountryView,
  // },
  {
    path: '/country/:countryCode',    
    name: 'region',
    component: CountryView,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;