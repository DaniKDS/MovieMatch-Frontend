<template>
    <section class="your-movies">
        <div class="your-movies-container" style="padding: 80px 40px 80px 40px; min-height: 700px;">
            <div class="row">
                <ul class="movie-buttons nav nav-fill text-uppercase justify-content-center">
                        <li class="active to-be-watched">
                            <a href="#tobewatched" data-bs-toggle="tab"
                                class="to-be-watched-btn nav-link btn border-0">Movies
                                you haven't seen</a>
                        </li>
                        <li class="already-watched">
                            <a href="#alreadywatched" data-bs-toggle="tab"
                                class="already-watched-btn nav-link btn border-0">Movies
                                you watched</a>
                        </li>
                        <li class="shared-lists">
                            <a href="#friendslist" data-bs-toggle="tab" class="shared-list-btn nav-link btn border-0">Shared
                                Lists</a>
                        </li>
                    </ul>

                    <div class="tab-content table-responsive rounded">
                        <div id="tobewatched" class="to-be-watched-tab tab-pane fade rounded" style="padding-top: 30px;">
                            <swiper :slidesPerView="5" :spaceBetween="5" :loop="true" :navigation="true" :modules="modules"
                                class="mySwiper">
                                <swiper-slide v-for="film in filme_de_vazut">
                                    <div class="movie-card">
                                        <img :src="'/src/assets/img/' + film.imagine" alt="">
                                        <div class="overlay">
                                            <h1>{{ film.titlu }}
                                                <a type="button" data-bs-toggle="modal" :data-bs-target="'#mylistmodal' + film.idFilm">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                        <div id="alreadywatched" class="already-watched-tab tab-pane fade rounded" style="padding-top: 30px;">
                            <swiper :slidesPerView="5" :spaceBetween="5" :loop="true" :navigation="true" :modules="modules"
                                class="mySwiper">
                                <swiper-slide v-for="film in filme_vazute">
                                    <div class="movie-card">
                                        <img :src="'/src/assets/img/' + film.imagine" alt="">
                                        <div class="overlay">
                                            <h1>{{ film.titlu }}
                                                <a type="button" data-bs-toggle="modal" :data-bs-target="'#seenlistmodal' + film.idFilm">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                        <div id="friendslist" class="shared-list-tab tab-pane fade rounded" style="padding-top: 30px;">
                        <div v-for="friend in friends">
                        <section v-if="filme_comune[friend.idUtilizator].length != 0" id="movies" class="movieTab">
                            <div class="section-title">
                                <h2>{{ friend.numeUtilizator + " " + friend.prenumeUtilizator }}</h2>
                                <div class="container-fluid" data-aos="zoom-in" data-aos-delay="200"> 
                                    <swiper :slidesPerView="5" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
                                        <swiper-slide v-for="film in filme_comune[friend.idUtilizator]">
                                            <div class="movie-card">
                                                <img :src="'/src/assets/img/' + film.imagine" alt="">
                                                <div class="overlay">
                                                    <h1>{{ film.titlu }}
                                                        <a type="button" data-bs-toggle="modal" :data-bs-target="'#mylistmodal' + film.idFilm">
                                                            <i class="bi bi-info-circle-fill"></i>
                                                        </a>
                                                    </h1>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                        </section>
                        </div>
                        </div>
                </div>
            </div>
        </div>

        <div v-for="film in filme_de_vazut">
        <div class="modal fade" :id="'mylistmodal' + film.idFilm" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" style="color: white; background-color: #171717;">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h1 class="modal-title">{{ film.titlu }}</h1>
                        <a class="close-button" type="button" data-bs-dismiss="modal" :data-bs-target="'#mylistmodal' + film.idFilm">
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
                        <button @click="marcheaza_film_vazut( film.idFilm )" type="button" data-bs-dismiss="modal" class="book-a-table-btn scrollto d-none d-lg-flex" style="padding: 5px 10px; font-size: 16px; height: 40px; color: rgb(255,255,255); background-color:rgb(0,0,0)">
                        Seen
                    </button>
                    <button @click="sterge_film_din_lista( film.idFilm )" type="button" data-bs-dismiss="modal" class="book-a-table-btn scrollto d-none d-lg-flex" style="padding: 5px 10px; font-size: 16px; height: 40px; color: rgb(255,255,255); background-color:rgb(0,0,0)">
                        Remove
                    </button>
                    </div>
                </div>
                </div>
                </div>
            </div>

        <div v-for="film in filme_vazute">
        <div class="modal fade" :id="'seenlistmodal' + film.idFilm" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" style="color: white; background-color: #171717;">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h1 class="modal-title">{{ film.titlu }}</h1>
                        <a class="close-button" type="button" data-bs-dismiss="modal" :data-bs-target="'#seenlistmodal' + film.idFilm">
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
                        <button @click="sterge_film_din_lista( film.idFilm )" type="button" data-bs-dismiss="modal" class="book-a-table-btn scrollto d-none d-lg-flex" style="padding: 5px 10px; font-size: 16px; height: 40px; color: rgb(255,255,255); background-color:rgb(0,0,0)">
                         Remove
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
        filme_de_vazut: [],
        filme_vazute: [],
        friends: [],
        filme_comune: {},
        }
    },
    methods: {
        get_movies_to_be_seen(){
            axios.get(`/api/filme_de_vazut`).then(response => {this.filme_de_vazut=response.data});
        },
        get_seen_movies(){
            axios.get(`/api/filme_vazute`).then(response => {this.filme_vazute=response.data});
        },
        marcheaza_film_vazut(id){
            axios.post(`/api/film/marcheaza_film_vazut/${id}`).then( response => {
                this.get_seen_movies();
                this.get_movies_to_be_seen();
                this.get_filme_comune();
            })
        },
        sterge_film_din_lista(id){
            axios.post(`/api/film/sterge_pereche/${id}`).then( response => {
                this.get_seen_movies();
                this.get_movies_to_be_seen();
                this.get_filme_comune();
            })
        },
        get_filme_comune(){
            axios.get(`/api/afisare_prieteni`).then(response =>{
                this.friends = response.data;
                for (const friend of this.friends){
                    axios.get(`/api/filme_comune/${friend.idUtilizator}`).then(response=> {
                        this.filme_comune[friend.idUtilizator]=response.data;
                    });
                }
            });
        },
    },
    created() {
        axios.get("/api/utilizatori/current").then(response => {this.current_user=response.data});
        this.get_filme_comune();
        this.get_movies_to_be_seen();
        this.get_seen_movies();
        
    }
};
</script>