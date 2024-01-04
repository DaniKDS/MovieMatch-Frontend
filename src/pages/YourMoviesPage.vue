<script setup>

import NavBar from '../components/NavBar.vue'
import MoviesView from '../components/MoviesView.vue';
import Footer from '../components/Footer.vue';
import WeeklyMovies from '../components/WeeklyMovies.vue';
import YourMovies from '../components/YourMovies.vue';

</script>

<template>
    <div class="container-fluid" id="yourmoviespage">
        <div class="row">
            <NavBar></NavBar>
        </div>
        <br><br>
    <YourMovies></YourMovies>
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