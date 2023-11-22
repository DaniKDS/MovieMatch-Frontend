
<template>
  <!-- ======= Home Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">

      </div>
      <div class="col-lg-11 d-flex  justify-content-center mb-5  " data-aos="zoom-in" data-aos-delay="200">
        <div class="btns">
          <a class="btn-menu animated fadeInUp scrollto "  type="button" data-bs-toggle="modal"
           data-bs-target="#exampleModal" aria-controls="exampleModal" >Log in</a>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true" >
          <div class="modal-dialog  modal-dialog-centered ">
            <div class="modal-content" style="  color: #E9CC6D; border: 2px solid #001540;">
              <div class="modal-header">
                <h2 class="modal-title fst-italic " id="exampleModalLabel" style=" color: #001540;" >Log in</h2>
                <button type="button" class="btn-close"  data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"   >Close</button>
                <button type="button" class="btn btn-primary" style="background-color: #001540; border: black;"><i class="bi bi-google"></i>  Log in with Google account</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section><!-- End Home -->
</template>

<style>
  .modal-header .btn-close {
    color: #f5e8e8; /* Setează culoarea textului butonului la alb */
  }
</style>
