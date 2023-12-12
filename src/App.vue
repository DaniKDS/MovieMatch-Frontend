<script setup>
import NavBar from './components/NavBar.vue';
import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';
import WheelPage from './components/WheelPage.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
    <HomeView />
    <AboutView />
    <WheelPage />
  </div>
</template>

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
