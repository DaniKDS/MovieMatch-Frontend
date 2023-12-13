<script setup>
import NavBar from './components/NavBar.vue';
import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';
import MapView from './components/MapView.vue';
import CountryView from './components/CountryView.vue';
import PeopleView from './components/PeopleView.vue'
import WheelPage from './components/WheelPage.vue'
</script>

<template>
   <div class="container-fluid">
      <div class="row">
        <NavBar></NavBar>
       </div>
       <HomeView></HomeView>
       <AboutView></AboutView>
       <CountryView></CountryView>
       <PeopleView></PeopleView>
       <MapView></MapView>
       <WheelPage></WheelPage>

       <div v-if="current_user.email != null"><PeopleView></PeopleView></div>
       <div v-if="current_user.email != null"><WheelPage></WheelPage></div>
       
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
