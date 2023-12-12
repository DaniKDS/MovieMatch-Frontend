<script setup>
  import AccountView from './AccountView.vue';
</script>

<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-cente" style="padding: 0;">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <a href="#hero"><img src="../assets/img/logo/logo.png" class="img-fluid " style=" width: 120px;  height: 120px;"
          alt="Home image" ></a>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active " href="#hero">Home</a></li>
          <li><a class="nav-link scrollto active" href="#about">About</a></li>
          <li><a class="nav-link scrollto active">Movies</a></li>
          <li><a class="nav-link scrollto active" href="#map">Map</a></li>
          <li><a class="nav-link scrollto active" href="#people">People</a></li>
          <li><a class="nav-link scrollto active" href="#wheel-page">Wheel</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
        
      </nav><!-- .navbar -->
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Movie search" aria-label="Search">
        <a class="book-a-table-btn scrollto d-none d-lg-flex"  type="submit"><i class="bi bi-search"></i></a>
      </form>

      <a class="book-a-table-btn scrollto d-none d-lg-flex" type="button" data-bs-toggle="modal"
        data-bs-target="#LogInModal" aria-controls="LogInModal">Log in</a>

      <AccountView/>

      
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
                    class="bi bi-google"></i> Log in with Google account</button>
              </div>
            </div>
          </div>
        </div>
</template>


