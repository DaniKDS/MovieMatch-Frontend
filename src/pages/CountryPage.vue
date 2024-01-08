<script setup>

import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue';
import CountryView from '../components/CountryView.vue'

</script>

<template>
    <div class="container-fluid" id="countrypage">
        <div class="row">
            <NavBar></NavBar>
        </div>
        <br><br><br><br>
        <CountryView></CountryView>
        <br>
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