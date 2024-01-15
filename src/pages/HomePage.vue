<script setup>

import NavBar from '../components/NavBar.vue'
import HomeView from '../components/HomeView.vue';
import AboutView from '../components/AboutView.vue';
import Footer from '../components/Footer.vue';
import MapView from '../components/MapView.vue';
import CountryView from '../components/CountryView.vue';
import PeopleView from '../components/PeopleView.vue';
import WheelPage from '../components/WheelPage.vue';
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <NavBar></NavBar>
        </div>
        <HomeView></HomeView>
        <AboutView></AboutView>
        <!-- <PeopleView></PeopleView>
        <div v-if="current_user.email != null"><MapView></MapView></div>
        <div v-if="current_user.email != null"><CountryView></CountryView></div>
        <div v-if="current_user.email != null"><WheelPage></WheelPage></div>
        <div v-if="current_user.email != null"><PeopleView></PeopleView></div> -->
        <Footer></Footer>
    </div>
</template>

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