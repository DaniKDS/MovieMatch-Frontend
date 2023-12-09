<script setup>

import NavBar from './components/NavBar.vue'
import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';
import MoviesView from './components/MoviesView.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar></NavBar>
    </div>
    <HomeView></HomeView>
    <div class="row">
      <RouterView />
    </div>
    <AboutView></AboutView>
    <Footer></Footer>
  </div>
</template>

<style >
@import "bootstrap/dist/css/bootstrap.css";

/*Template Main CSS File*/
@import "./assets/css/style.css";


.app-container {
  background-image: url('./assets/img/background/bluebackground.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  /* Asigură-te că întregul conținut este vizibil pe ecran */
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>

