<script setup>
import AccountView from './AccountView.vue';
</script>

<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-cente" style="padding: 0;">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <a href="#hero"><img src="../assets/img/logo/logo.png" class="img-fluid " style=" width: 120px;  height: 120px;"
          alt="Home image"></a>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active " href="/">Home</a></li>
          <li><a class="nav-link scrollto active" href="/about">About</a></li>
          <li><a class="nav-link scrollto active" href="/movies">Movies</a></li>
          <!-- <li v-if="current_user.email != null"><a class="nav-link scrollto active" href="/map">Map</a></li>
          <li v-if="current_user.email != null"><a class="nav-link scrollto active" href="/wheel">Wheel</a></li>
          <li v-if="current_user.email != null"><a class="nav-link scrollto active" href="/people">People</a></li>
          <li v-if="current_user.email != null"><a class="nav-link scrollto active" href="/yourmovies">Your Movies</a></li> -->
          <li><a class="nav-link scrollto active" href="/map">Map</a></li>
          <li><a class="nav-link scrollto active" href="/wheel">Wheel</a></li>
          <li v-if="current_user.email != null"><a class="nav-link scrollto active" href="/people">People</a></li>
          <li v-if="current_user.email != null"><a class="nav-link scrollto active" href="/yourmovies">Your Movies</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>

      </nav><!-- .navbar -->

      <form v-if="current_user.email != null" ref="searchForm" class="d-flex" role="search" @submit.prevent="searchMovie">
        <div class="position-relative">
          <input v-model="searchQuery" @input="getMovieSuggestions" class="form-control me-2" type="search"
            placeholder="Movie search" aria-label="Search" list="movieSuggestionsList">
          <datalist id="movieSuggestionsList">
            <option v-for="movie in movieSuggestions" :key="movie.id" :value="movie.titlu">
              {{ movie.titlu }}
            </option>
          </datalist>
        </div>
        <button class="search-button" type="submit" data-bs-toggle="modal" data-bs-target="#searchModal"
          aria-controls="searchModal" @click="openMovieModal()"><i class="bi bi-search"></i></button>
      </form>


      <a v-if="current_user.email == null" class="book-a-table-btn scrollto d-none d-lg-flex" type="button"
        data-bs-toggle="modal" data-bs-target="#LogInModal" aria-controls="LogInModal">Log in</a>

      <AccountView />


    </div>
  </header><!-- End Header -->

  <!-- Modalul de Log in din NavBar-->
  <div class="modal fade" id="LogInModal" tabindex="-1" aria-labelledby="LogInModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered ">
      <div class="modal-content" style="  color: #E9CC6D; border: 2px solid #001540;">
        <div class="modal-header">
          <h2 class="modal-title fst-italic " id="LogInModalLabel" style=" color: #001540;">Log in</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" style="background-color: #001540; border: black;"><i
              class="bi bi-google"><a href='/oauth2/authorization/google'>Log in with Google account</a></i> </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modalul de Search Movies -->
  <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered ">
      <div class="modal-content" style="color: white; background-color: #171717;">
        <div class="modal-header">
          <h1 class="modal-title">{{ movieDetails.titlu }}</h1>
          <a class="close-button" type="button" data-bs-dismiss="modal" data-bs-target="#addMovieModal">
            <i class="bi bi-x"></i>
          </a>
        </div>
        <!-- Modal Body -->
        <div class="modal-body">
          <div class="fade_rule"></div>
          <div class="row">
            <div class="col-md-5 mx-auto my-auto text-center">
              <img src='../assets/img/inception.jpg' alt="" class="movie-image" width="300" height="500">
            </div>
            <div class="col-md-6 mx-auto my-auto">
              <div class="about-movie">
                <p style="text-align: left;">{{ movieDetails.gen }} </p>
                <p style="text-align: left;"> {{ movieDetails.durata }}</p>
                <p style="text-align: left;">{{ movieDetails.descriere }} </p>
              </div>
            </div>
          </div>
          <div class="fade_rule"></div>
        </div>
        <!-- Modal Footer -->
        <div class="modal-footer">
          <a class="book-a-table-btn scrollto d-none d-lg-flex" type="button" data-bs-dismiss="modal">Add</a>
        </div>
      </div>
    </div>
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
      searchQuery: '',
      movieSuggestions: [],
      searchResults: [],
      movieDetails: {
        "titlu": "",
        "descriere": "",
        "gen": "",
        "durata": "",
        "locatieFilmare": "",
        "imagine":""
      }
    }
  },
  methods: {
    async getMovieSuggestions() {
      try {
        const response = await axios.get(`/api/filter_movie/${encodeURIComponent(this.searchQuery)}`);
        this.movieSuggestions = response.data.filter(movie => {
          // Verifică dacă titlul introdus este diferit de titlul filmului
          return movie.titlu.toLowerCase() !== this.searchQuery.toLowerCase();
        });
      } catch (error) {
        console.error("Eroare la solicitarea către backend:", error);
      }
    },
    async searchMovie() {
      try {
        const response = await axios.get(`/api/filter_movie/${encodeURIComponent(this.searchQuery)}`);
        this.searchResults = response.data;
      } catch (error) {
        console.error("Eroare la solicitarea către backend:", error);
      }
    },
    selectMovie(movie) {
      this.searchQuery = movie.titlu;
      this.movieSuggestions = [];
    },
    async openMovieModal() {
      if (this.searchQuery) {
        try {
          const response = await axios.get(`/api/filme/titlu/${encodeURIComponent(this.searchQuery)}`);
          this.movieDetails = response.data;
          console.log(this.movieDetails.titlu);
          // Deschide modalul cu detalii despre film
          $('#searchModal').modal('show');
        } catch (error) {
          console.error("Eroare la solicitarea către backend:", error);
        }
      }
    }
  },
    created() {
      axios.get("/api/utilizatori/current").then(response => { this.current_user = response.data })
    }
  }
</script>

<style>
.modal-header {
  border: none;
  padding: 20px 20px 0px 20px;
}

.modal-header .close-button { 
  font-size: 50px;
  color: white;
}


.movie-image {
  border-radius: 15px;
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.modal-footer{
  border: none;
  margin: 0px 20px 20px 20px;
}

.about-movie {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  font-size: 20px;
}


.fade_rule {
  height: 3px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #cda45e, rgba(255, 255, 255, 0));

}

</style>