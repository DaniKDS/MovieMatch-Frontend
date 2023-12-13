<template>
    <!-- ======= People Section ======= -->
  <section id="people" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center mb-5" data-aos="zoom-in" data-aos-delay="200">
          <div class="d-flex flex-column align-items-center">
            <!-- Caseta de căutare -->
            <form class="d-flex mb-3" role="search">
              <input class="form-control me-2" type="search" placeholder="User search" aria-label="Search">
              <a class="book-a-table-btn scrollto d-none d-lg-flex" type="submit"><i class="bi bi-search"></i></a>
            </form>

            <!-- Lista -->
            <div class="vertical-list">
              <ul class="list-group" style="text-align: left; ">
                
                <li v-for="inamic in inamici" class="list-group-item" style="border-color: #cda45e; color: white; background-color: #0c0b09; position: relative; width: 800px;">
                  <span style="float: left;">{{ inamic.numeUtilizator }} {{ inamic.prenumeUtilizator }}</span>
                  <button @click="trimite_cerere(inamic.idUtilizator)" type="button" class="log-out-button accept-button" data-bs-toggle="modal" data-bs-target="#RequestModal" style="float: right; padding: 5px 10px; font-size: 12px; height: 25px;">
                    <i class="bi bi-person-plus-fill" style="color: white;"></i> Send a friend request
                  </button>
                  <div style="clear: both;"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Send a friend request-->
    <div class="modal fade" id="RequestModal" tabindex="-1" aria-labelledby="RequestModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" style="max-width: 400px;">
        <div class="modal-content" style="color: #cda45e; border: 2px solid #cda45e; background: #0c0b09;">
          <div class="modal-body text-center">
            <div style="margin-bottom: 10px;">Friend request sent successfully!</div>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color: #0c0b09; border: 1px solid #cda45e;">Ok</button>
          </div>
        </div>
      </div>
    </div>

  </section><!-- End Home -->
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      inamici: [],
    }
  },
  methods: {
    update_inamici(){
      axios.get("/api/afisare_inamici").then(response => {this.inamici=response.data})
    },
    trimite_cerere(id){
      axios.post(`/api/cerere_prietenie/send/${id}`).then(this.update_inamici())
    }
  },
  created() {
    this.update_inamici()
  }
}
</script>