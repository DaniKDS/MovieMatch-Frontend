
<template>
  <!-- ======= Home Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">

      </div>
      <div class="col-lg-11 d-flex justify-content-center mb-5  " data-aos="zoom-in" data-aos-delay="200">
        <div class="btns">
          <a v-if="current_user.email == null" class="btn-menu animated fadeInUp scrollto " href="//oauth2/authorization/google">Login to explore our movies</a>
          <a v-if="current_user.email != null" class="btn-menu animated fadeInUp scrollto " href="/movies">Explore our movies</a>
        </div> 
      </div>

    </div>
  </section><!-- End Home -->
</template>

<style>
.modal-header .btn-close {
  color: #f5e8e8;
  /* Setează culoarea textului butonului la alb */
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
  created() {
    axios.get("/api/utilizatori/current").then(response => {this.current_user=response.data});
  }
}
</script>
