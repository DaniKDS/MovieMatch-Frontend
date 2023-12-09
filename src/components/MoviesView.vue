<template>
    <section id="movies" class="movieTab">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Movies</h2>
                <p>Popular Releases</p>
                <div class="container-fluid" data-aos="zoom-in" data-aos-delay="200">
                    <div class="swiper slide-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="movie-card">
                                    <img src="../assets/img/poster.jpg" alt="">
                                    <div class="overlay">
                                        <h1>The title of the movie
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="movie-card">
                                    <img src="../assets/img/poster.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Movie Title
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="movie-card">
                                    <img src="../assets/img/poster.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Movie Title
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="movie-card">
                                    <img src="../assets/img/poster.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Movie Title
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="movie-card">
                                    <img src="../assets/img/poster.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Movie Title
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="movie-card">
                                    <img src="../assets/img/poster.jpg" alt="">
                                    <div class="overlay">
                                        <h1>Movie Title
                                            <a type="button" data-bs-toggle="modal" data-bs-target="#addMovieModal">
                                                <i class="bi bi-info-circle-fill"></i>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- The Modal -->
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
                        <a class="book-a-table-btn scrollto d-none d-lg-flex" type="button" data-bs-dismiss="modal">Add</a>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>