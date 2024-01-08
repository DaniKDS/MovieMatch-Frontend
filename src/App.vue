<script setup>
import NavBar from './components/NavBar.vue';
import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';
import MapView from './components/MapView.vue';
// import CountryView from './components/countryview.vue';
import PeopleView from './components/PeopleView.vue'
import WheelPage from './components/WheelPage.vue'
import Footer from './components/Footer.vue'
import Movies from './pages/MoviePage.vue'
import YourMovies from './pages/YourMoviesPage.vue'
</script>

<template>
  <router-view></router-view>
</template>

<!-- <template>
   <div class="container-fluid">
      <div class="row">
        <NavBar></NavBar>
       </div>
       <HomeView></HomeView>
      <AboutView></AboutView>
      <Movies></Movies>
      <div v-if="current_user.email != null"><MapView></MapView></div>
      <div v-if="current_user.email != null"><CountryView></CountryView></div>
      <div v-if="current_user.email != null"><WheelPage></WheelPage></div>
      <div v-if="current_user.email != null"><PeopleView></PeopleView></div>
      <div v-if="current_user.email != null"><YourMovies></YourMovies></div>
      <Footer></Footer> 
       
</div>
</template> -->

<style>
@import "bootstrap/dist/css/bootstrap.css";

/* Template Main CSS File */
@import "./assets/css/style.css";

.app-container {
  background-image: url('./assets/img/background/bluebackground.jpg'); 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      current_user: {
        "numeUtilizator": null, 
        "prenumeUtilizator": null, 
        "username": null, 
        "email": null
      },
    }
  },
  methods: {
  },
  created() {
    axios.get("/api/utilizatori/current").then(response => {this.current_user=response.data})
  }
}
</script>