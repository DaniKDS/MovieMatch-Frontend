<script setup>

import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue';
import WheelPage from '../components/WheelPage.vue'

</script>

<template>
    <div class="container-fluid" id="wheelpage">
        <div class="row">
            <NavBar></NavBar>
        </div>
        <br><br><br>
        <WheelPage></WheelPage>
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