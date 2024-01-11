


<template>
    <section v-for="categorie in categories"  id="movies" class="movieTab">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>{{ categorie }}</h2>
                <div class="container-fluid" data-aos="zoom-in" data-aos-delay="200">
            
                    <swiper :slidesPerView="5" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="film in filme[categorie]">
                            <div class="movie-card">
                                    <img :src="'/src/assets/img/' + film.imagine" alt="">
                                    <div class="overlay">
                                        <h1>{{ film.titlu }}
                                            <a type="button" data-bs-toggle="modal" :data-bs-target="'#addMovieModal' + film.idFilm">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <!-- The Modal -->
        <div v-for="film in filme[categorie]">
        <div class="modal fade" :id="'addMovieModal' + film.idFilm" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" style="color: white; background-color: #171717;">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h1 class="modal-title">{{ film.titlu }}</h1>
                        <a class="close-button" type="button" data-bs-dismiss="modal" :data-bs-target="'#addMovieModal' + film.idFilm">
                            <i class="bi bi-x"></i>
                        </a>
                    </div>

                    <!-- Modal Body -->
                    <div  class="modal-body">
                        <div class="fade_rule"></div>
                        <div class="row">
                            <div class="col-md-5 mx-auto my-auto text-center">
                                <img :src="'/src/assets/img/' + film.imagine" alt="" class="movie-image" width="300" height="500">
                            </div>
                            <div class="col-md-6 mx-auto my-auto">
                                <div class="about-movie">
                                    <p style="text-align: left;">{{ film.descriere }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="fade_rule"></div>
                    </div>

                    <!-- Modal Footer -->
                    <div class="modal-footer">
                        <button @click="adaugare_film_in_lista( film.idFilm ); get_categories();" type="button" data-bs-dismiss="modal" class="book-a-table-btn scrollto d-none d-lg-flex" style="padding: 5px 10px; font-size: 16px; height: 40px; color: rgb(255,255,255); background-color:rgb(0,0,0)">
                        Add
                    </button>
                    </div>
                </div>
                </div>
                </div>
            </div>
    </section>



</template>

<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  // import required modules
  import { Pagination } from 'swiper/modules';

  import axios from 'axios';

  const modules = [Pagination];

</script>

<script>
  import axios from 'axios';

  export default {
    data() {
        return {
        current_user: {
            "numeUtilizator": null, 
            "prenumeUtilizator": null, 
            "username": null, 
            "email": null
        },
        filme: {},
        categories: []
        }
    },
    
    methods: {
        get_categories(){
            axios.get(`/api/filme/categorii/`).then(response => {
                this.categories=response.data;
                for(const category of response.data){
                    axios.get(`/api/filme_nefavorite_gen/${category}`).then(response => {this.filme[category]=response.data});
                }
            });
        },
        adaugare_film_in_lista(id){
            axios.post(`/api/film/adauga_film_in_lista/${id}`).then(this.get_categories(), this.closeModal())
        },
        closeModal() {
            this.modalVisible = false;
        }
    },
    created() {
        axios.get("/api/utilizatori/current").then(response => {this.current_user=response.data});
        this.get_categories();
        this.closeModal();
        
    }
}
</script>