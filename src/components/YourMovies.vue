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
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster2.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster10.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster4.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster5.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster6.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster7.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster8.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
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
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster9.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster1.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster3.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster11.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster12.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster13.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="movie-card">
                                        <img src="../assets/img/poster14.jpg" alt="">
                                        <div class="overlay">
                                            <h1>The title of the movie
                                                <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                        <div id="friendslist" class="shared-lists-tab tab-pane fade rounded">
                            <div class="friends-list" style="padding: 30px;">
                                <ul class="friend-movie-buttons nav nav-fill">
                                    <swiper :slidesPerView="5" :spaceBetween="5" :loop="true" :modules="modules"
                                    class="mySwiper">
                                    <swiper-slide>
                                        <div class="friend-profile">
                                            <li>
                                        <a href="#friend1" data-bs-toggle="tab"><img src="../assets/img/prieten1.jpg"
                                                    alt="" class="friend-profile-pic"></a>
                                                    <p>Cimpan Alina</p>
                                    </li>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="friend-profile">
                                            <li>
                                        <a href="#friend2" data-bs-toggle="tab"><img src="../assets/img/file1.jpg"
                                                    alt="" class="friend-profile-pic"></a>
                                                    <p>Chis Madalina</p>
                                    </li>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="friend-profile">
                                            <li>
                                        <a href="#friend3" data-bs-toggle="tab"><img src="../assets/img/dani.jpg"
                                                    alt="" class="friend-profile-pic"></a>
                                                    <p>Cordis Daniel</p>
                                    </li>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="friend-profile">
                                            <li>
                                        <a href="#friend4" data-bs-toggle="tab"><img src="../assets/img/file.jpg"
                                                    alt="" class="friend-profile-pic"></a>
                                                    <p>Bucura Maria</p>
                                    </li>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="friend-profile">
                                            <li>
                                        <a href="#friend5" data-bs-toggle="tab"><img src="../assets/img/file2.jpg"
                                                    alt="" class="friend-profile-pic"></a>
                                                    <p>Topan Mihai</p>
                                    </li>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="friend-profile">
                                            <li>
                                        <a href="#friend6" data-bs-toggle="tab"><img src="../assets/img/images.png"
                                                    alt="" class="friend-profile-pic"></a>
                                                    <p>Jane Doe</p>
                                    </li>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="friend-profile">
                                            <li>
                                        <a href="#friend7" data-bs-toggle="tab"><img src="../assets/img/images.png"
                                                    alt="" class="friend-profile-pic"></a>
                                                    <p>John Doe</p>
                                    </li>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                                </ul>
                                
                            </div>
                            <div class="movies-lists">

                                <div class="tab-content table-responsive rounded">

                                    <div id="friend1" class="to-be-watched-tab tab-pane fade rounded">
                                        <swiper :slidesPerView="5" :spaceBetween="5" :loop="true" :navigation="true"
                                            :modules="modules" class="mySwiper">
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster1.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster3.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster5.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster7.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster9.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster2.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster4.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                        </swiper>

                                    </div>


                                    <div id="friend2" class="to-be-watched-tab tab-pane fade rounded">
                                        <swiper :slidesPerView="5" :spaceBetween="5" :loop="true" :navigation="true"
                                            :modules="modules" class="mySwiper">
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                        </swiper>

                                    </div>


                                    <div id="friend3" class="to-be-watched-tab tab-pane fade rounded">
                                        <swiper :slidesPerView="5" :spaceBetween="5" :loop="true" :navigation="true"
                                            :modules="modules" class="mySwiper">
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                        </swiper>

                                    </div>


                                    <div id="friend4" class="to-be-watched-tab tab-pane fade rounded">
                                        <swiper :slidesPerView="5" :spaceBetween="5" :loop="true" :navigation="true"
                                            :modules="modules" class="mySwiper">
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
                                                                <i class="bi bi-info-circle-fill"></i>
                                                            </a>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="movie-card">
                                                    <img src="../assets/img/poster.jpg" alt="">
                                                    <div class="overlay">
                                                        <h1>The title of the movie
                                                            <a type="button" data-bs-toggle="modal"
                                                                data-bs-target="#addMovieModal">
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
                        </div>
                    </div>

            </div>
        </div>


        <div class="modal fade" id="addMovieModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" style="color: white; background-color: #171717;">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h1 class="modal-title">Movie Title</h1>
                        <a class="close-button" type="button" data-bs-dismiss="modal" data-bs-target="#addMovieModal">
                            <i class="bi bi-x"></i>
                        </a>
                    </div>

                    <!-- Modal Body -->
                    <div class="modal-body">
                        <div class="fade_rule"></div>
                        <div class="row">
                            <div class="col-md-5 mx-auto my-auto text-center">
                                <img src="../assets/img/poster.jpg" alt="" class="movie-image" width="300" height="500">
                            </div>
                            <div class="col-md-6 mx-auto my-auto">
                                <div class="about-movie">

                                    <p style="text-align: left;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                        ipsum est, suscipit in
                                        mattis quis, pharetra eu purus. Nulla facilisi. Morbi dignissim condimentum mi quis
                                        vestibulum. Duis dapibus dui quis dui ultricies, eget congue nunc tempor. Aenean
                                        vestibulum porttitor nisl, eu molestie sem ultrices vel. Vestibulum ante ipsum
                                        primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse et
                                        turpis urna. Nam auctor, mauris eget aliquet ultricies, nulla ligula euismod ipsum,
                                        non tristique massa leo id velit. Sed consectetur ut ante id dictum. Donec auctor
                                        lobortis neque, pretium elementum leo ornare eu. Nulla nec ipsum in libero pharetra
                                        suscipit vel et tellus. Vestibulum non consequat justo. Nullam vel leo quam.
                                        Praesent sapien lectus, posuere sit amet rhoncus vel, lobortis sed dui. Vestibulum
                                        convallis elit nec dui egestas ullamcorper.</p>
                                </div>
                            </div>
                        </div>
                        <div class="fade_rule"></div>
                    </div>

                    <!-- Modal Footer -->
                    <div class="modal-footer">
                        <a class="book-a-table-btn scrollto d-none d-lg-flex" type="button" data-bs-dismiss="modal">remove
                            from list</a>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>