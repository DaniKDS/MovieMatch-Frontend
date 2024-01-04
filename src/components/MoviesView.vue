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

  const current_user = {
    numeUtilizator: null,
    prenumeUtilizator: null,
    username: null,
    email: null
  };

  axios.get("/api/utilizatori/current").then(response => {
    current_user.email = response.data.email;
    current_user.numeUtilizator = response.data.numeUtilizator;
    current_user.prenumeUtilizator = response.data.prenumeUtilizator;
    current_user.username = response.data.username;

  });
</script>


<template>
    <section id="movies" class="movieTab">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <p>Check out our movie collection</p>
                <h2>Romantic</h2>
                <div class="container-fluid" data-aos="zoom-in" data-aos-delay="200">
            
                    <swiper :slidesPerView="5" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/romantic1.jpeg" alt="">
                                    <div class="overlay">
                                        <h1>Purple Hearts
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/romantic2.jpeg" alt="">
                                    <div class="overlay">
                                        <h1>Titanic
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/romantic6.jpeg" alt="">
                                    <div class="overlay">
                                        <h1>Lalaland
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/romantic4.jpeg" alt="">
                                    <div class="overlay">
                                        <h1>Me before you
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/romantic3.jpeg" alt="">
                                    <div class="overlay">
                                        <h1>Before sunrise
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/prideandprejudice.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Pride and Prejudice
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/romantic5.jpeg" alt="">
                                    <div class="overlay">
                                        <h1>Casablanca
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
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
        <div class="modal fade" id="addMovieModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" style="color: white; background-color: #171717;">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h1 class="modal-title">Purple Hearts</h1>
                        <a class="close-button" type="button" data-bs-dismiss="modal" data-bs-target="#addMovieModal">
                            <i class="bi bi-x"></i>
                        </a>
                    </div>

                    <!-- Modal Body -->
                    <div class="modal-body">
                        <div class="fade_rule"></div>
                        <div class="row">
                            <div class="col-md-5 mx-auto my-auto text-center">
                                <img src="../assets/img/romantic1.jpeg" alt="" class="movie-image" width="300" height="500">
                            </div>
                            <div class="col-md-6 mx-auto my-auto">
                                <div class="about-movie">

                                    <p style="text-align: left;">"Purple Hearts" is also the title of a 1984 American war film directed by Sidney J. Furie. 
                                        The movie is a romantic drama that takes place during the Vietnam War and follows the love story between a Navy surgeon,
                                         Dr. Don Jardian (played by Ken Wahl), and a reporter, Deborah Solomon (played by Cheryl Ladd). 
                                         The title "Purple Hearts" alludes to the military decoration awarded to soldiers wounded in combat              
                                         The film explores the challenges and emotional toll of war on both the soldiers on the front lines and their loved ones back home. 
                                        As the characters navigate the complexities of love and war, the narrative unfolds against the backdrop of the Vietnam conflict. 
                                        "Purple Hearts" combines elements of romance and war drama, depicting the personal and human side of the Vietnam War era.</p>
                                </div>
                            </div>
                        </div>
                        <div class="fade_rule"></div>
                    </div>

                    <!-- Modal Footer -->
                    <div class="modal-footer">
                        <a class="book-a-table-btn scrollto d-none d-lg-flex" type="button" data-bs-dismiss="modal">
                            Add
                        </a>
                        <!-- <a v-if="current_user.email !== null" class="book-a-table-btn scrollto d-none d-lg-flex" type="button" data-bs-dismiss="modal">
                            Add
                        </a> -->
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section class="movieTab" style="background-color: #091222;">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Drama</h2>
                <div class="container-fluid" data-aos="zoom-in" data-aos-delay="200">
            
                    <swiper :slidesPerView="5" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/miracle.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Miracle in cell no. 7
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/whiplash.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Whiplash
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/forestgump.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Forest Gump
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/soul.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Soul
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/arrival.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Arrival
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/neverbackdown.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Never back down
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/truman.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Truman
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
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
    </section>

    <section class="movieTab">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Comedy</h2>
                <div class="container-fluid" data-aos="zoom-in" data-aos-delay="200">
            
                    <swiper :slidesPerView="5" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/abrush.jpg" alt="">
                                    <div class="overlay">
                                        <h1>A brush of Christmas
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/cruella.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Cruella
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/ocean.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Oceans's eight
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/legally-blonde.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Legally Blonde
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/whitechicks.jpg" alt="">
                                    <div class="overlay">
                                        <h1>White Chick's
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/wolf.jpg" alt="">
                                    <div class="overlay">
                                        <h1>The wolf of the Wall Street
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/pirates.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Pirates of the Caribbean: Dead Man's Chest
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
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
    </section>

    <section class="movieTab" style="background-color: #091222;">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Thriller</h2>
                <div class="container-fluid" data-aos="zoom-in" data-aos-delay="200">
            
                    <swiper :slidesPerView="5" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/nowhere.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Nowhere
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/parasite.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Parasite
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/getout.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Get out
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/us.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Us
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/memento.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Memento
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/x.jpg" alt="">
                                    <div class="overlay">
                                        <h1>X
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/themenu.jpg" alt="">
                                    <div class="overlay">
                                        <h1>The menu
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
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
    </section>

    <section class="movieTab">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Science Fiction</h2>
                <div class="container-fluid" data-aos="zoom-in" data-aos-delay="200">
            
                    <swiper :slidesPerView="5" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/dontlookup.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Don't look up
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/nope.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Nope
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/her.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Her
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/avatar.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Avatar
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/dune.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Dune
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/inception.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Inception
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/freeguy.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Free guy
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
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
    </section>

    <section class="movieTab" style="background-color: #091222;">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Crime</h2>
                <div class="container-fluid" data-aos="zoom-in" data-aos-delay="200">
            
                    <swiper :slidesPerView="5" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/gonegirl.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Gone Girl
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/lovelybones.jpg" alt="">
                                    <div class="overlay">
                                        <h1>The lovely bones
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/prisoner.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Prisoners
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/knivesout.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Knives out
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/taxidriver.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Taxi Driver
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/thegodfather.jpg" alt="">
                                    <div class="overlay">
                                        <h1>The Godfather
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="movie-card">
                                    <img src="../assets/img/tinder.jpg" alt="">
                                    <div class="overlay">
                                        <h1>The tinder swindler
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
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
    </section>


</template>

<!-- <script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  // import required modules
  import { Pagination } from 'swiper/modules';

  import axios from 'axios';

  const modules = [Pagination];

  const current_user = {
    numeUtilizator: null,
    prenumeUtilizator: null,
    username: null,
    email: null
  };

  axios.get("/api/utilizatori/current").then(response => {
    current_user = response.data;
  });
</script> -->
