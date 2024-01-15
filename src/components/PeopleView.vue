<template>
  <!-- ======= People Section ======= -->
  <section id="people" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center mb-5" data-aos="zoom-in" data-aos-delay="200">
          <div class="d-flex flex-column align-items-center">

            <!-- Caseta de căutare -->
                   <!-- Caseta de căutare -->
                   <form ref="searchForm" class="d-flex" role="search" @submit.prevent="searchUser">
              <div class="position-relative">
                <input v-model="searchQuery" @input="getUserSuggestions" class="form-control me-2" type="search"
                  placeholder="User search" aria-label="Search" list="userSuggestionsList">
                <datalist id="userSuggestionsList">
                  <option v-for="user in userSuggestions" :key="user.id" :value="user.fullName">
                    {{ user.fullName }}
                  </option>
                </datalist>
              </div>
               <!-- Iconita de căutare -->
              <button class="search-button" type="submit" @click="addToVerticalList()"><i
                  class="bi bi-search"></i></button>
            </form>
            <br>
            <!-- Lista -->
            <div class="vertical-list">
              <ul class="list-group" style="text-align: left; ">
                <li v-for="inamic in inamici" class="list-group-item"
                  style="border-color: #cda45e; color: white; background-color: #0c0b09; position: relative; width: 800px;">
                  <span style="float: left;">{{ inamic.numeUtilizator }} {{ inamic.prenumeUtilizator }}</span>
                  <button @click="trimite_cerere(inamic.idUtilizator), update_inamici()" type="button" class="log-out-button accept-button"
                    data-bs-toggle="modal" data-bs-target="#RequestModal"
                    style="float: right; padding: 5px 10px; font-size: 12px; height: 25px;">
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
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
              style="background-color: #0c0b09; border: 1px solid #cda45e;">Ok</button>
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
      current_user: {
        "numeUtilizator": null,
        "prenumeUtilizator": null,
        "username": null,
        "email": null
      },
      inamici: [],
      searchQuery: '',
      userSuggestions: [],
      user: [],
    }
  },
  methods: {
    update_inamici() {
      axios.get("/api/afisare_inamici").then(response => { this.inamici = response.data })
    },
    trimite_cerere(id) {
      axios.post(`/api/cerere_prietenie/send/${id}`).then(() => {
        this.update_inamici();  // Actualizare în momentul în care cererea a fost trimisă cu succes
      });
    },
    
    async getUserSuggestions() {
      /*
        Functie care returneaza sugestiile pentru textul introdus in casuta de cautare
       */ 
      try {
        if (this.searchQuery.trim() !== '') {
          const response = await axios.get(`/api/filter_user/${encodeURIComponent(this.searchQuery)}`);
          this.userSuggestions = response.data.map(user => {
            const fullName = user.numeUtilizator && user.prenumeUtilizator
              ? `${user.numeUtilizator} ${user.prenumeUtilizator}`
              : '';
            //cauta dupa numele intreg
            return {
              id: user.idUtilizator,
              fullName: fullName,
            };
          }).filter(user => {
            const currentUserFullName = `${this.current_user.numeUtilizator} ${this.current_user.prenumeUtilizator}`.toLowerCase();
            return user.fullName.toLowerCase() !== currentUserFullName;
          });
        } else {
          this.userSuggestions = [];
        }
      } catch (error) {
        console.error("Eroare la solicitarea către backend:", error);
      }
    },
    addToVerticalList() {
      /*
      Functie care adauga in lista de dupa search datele in functie de cautare
      */ 
      if (this.searchQuery.trim() !== '') {
       
        axios.get(`/api/filter_user/${encodeURIComponent(this.searchQuery)}`)
          .then(response => {
         
            this.inamici = response.data.map(user => {
              return {
                idUtilizator: user.idUtilizator,
                numeUtilizator: user.numeUtilizator,
                prenumeUtilizator: user.prenumeUtilizator,
              };
            });
            this.searchQuery = '';
          })
          .catch(error => {
            console.error("Error fetching filtered users:", error);
          });
      } else {
        this.update_inamici();
      }
    },
  },
  created() {
    this.update_inamici(),
      axios.get("/api/utilizatori/current").then(response => { this.current_user = response.data })
  }
}
</script>