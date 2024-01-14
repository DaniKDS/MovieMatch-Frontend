import { createRouter, createWebHistory } from 'vue-router';
import MoviePage from '../pages/MoviePage.vue';
import HomePage from '../pages/HomePage.vue';
import YourMoviesPage from '../pages/YourMoviesPage.vue';
import MapPage from '../pages/MapPage.vue';
import PeoplePage from '../pages/PeoplePage.vue';
import WheelPage from '../pages/WheelPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import CountryView from '../pages/CountryPage.vue';  // daca faci alta pagina aici modifici components cu page
import axios from 'axios'

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { requiresAuth: false },  
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviePage,
    meta: { requiresAuth: true },
  },
  {
    path: '/yourmovies',
    name: 'yourMovies',
    component: YourMoviesPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/map',
    name: 'map',
    component: MapPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/people',
    name: 'people',
    component: PeoplePage,
    meta: { requiresAuth: true },
  },
  {
    path: '/wheel',
    name: 'wheel',
    component: WheelPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: { requiresAuth: false },
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
    meta: { requiresAuth: true },
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach(async (to, from) => {
  var current_user = axios.get("/api/utilizatori/current").data;

  if(to.meta.requiresAuth && current_user== null){
    return {
      path: '/'
    }
  }


})

export default router;