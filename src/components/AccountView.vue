<template>
  <div class="container-account">

    <a v-if="current_user.email != null" class="book-a-table-btn scrollto d-none d-lg-flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#account" aria-controls="account">Account</a>

    <a v-if="current_user.email != null" class="book-a-table-btn scrollto d-none d-lg-flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#account" aria-controls="account">Account</a>

        <!--Offcanvas-ul pentru Account-->
        <div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="account" aria-labelledby="accountLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title text-center" id="accountLabel" style="font-size: 35px;">
                <i class="bi bi-person"></i> Hi, {{ current_user.prenumeUtilizator }} !
            </h5>
            <button class="close-x-button" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="bi bi-x"></i>
            </button>
          </div>
            <div class="offcanvas-body text-center">
              <div class="card contactCard">
                  <div class="card-body">
                      <p><i>My profile</i></p>
                      <p>
                          <br>Name: {{ current_user.numeUtilizator }}
                          <br>Surname: {{ current_user.prenumeUtilizator }}
                          <br>Email: {{ current_user.email }}
                      </p>
                  </div>
              </div>

              <button class="btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#friendsListOffcanvas" style="position: absolute; bottom: 35%; left: 50%; transform: translateX(-50%);">Friends list</button>
              <button class="btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#friendRequestOffcanvas" style="position: absolute; bottom: 45%; left: 50%; transform: translateX(-50%);">Friend requests list</button>

              <button type="button" class="log-out-button" style="position: absolute; bottom: 17%; left: 50%; transform: translateX(-50%); "><a href='/logout'>Log out</a></button>
              <button type="button" class="log-out-button" style="position: absolute; bottom: 17%; left: 50%; transform: translateX(-50%); "><a href='/logout'>Log out</a></button>
            </div>
        
        </div>

        <!--Offcanvas-ul pentru Friends list-->
        <div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="friendsListOffcanvas" aria-labelledby="friendsListOffcanvasLabel">    
          <div class="offcanvas-header ">
            <a href="#account"><span class="arrow left" data-bs-toggle="offcanvas" data-bs-target="#account" ></span></a>
            <h5 class="offcanvas-title text-center" id="friendsListOffcanvasLabel" style="font-size: 35px;">
                  Your friends
            </h5>
          </div>
          <div class="offcanvas-body text-center">

            <ul class="list-group list-group-flush" style="text-align: left;">
              <li v-for="prieten in prieteni" class="list-group-item" style="border-color: #cda45e; color: white; background-color: #0c0b09; position: relative;">
                {{ prieten.numeUtilizator }} {{ prieten.prenumeUtilizator }}
                <button @click="sterge_prieten(prieten.idUtilizator)" type="button" class="log-out-button accept-button" data-bs-toggle="modal" data-bs-target="#DeleteFriendshipModal" style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%); padding: 5px 10px; font-size: 12px; height: 25px;">
                  Delete
                </button>
                </li>
          </ul>
          </div>
        </div>

        <!--Offcanvas-ul pentru Friend requests-->
        <div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="friendRequestOffcanvas" aria-labelledby="friendRequestOffcanvasOffcanvasLabel">
          <div class="offcanvas-header ">
            <a href="#account"><span class="arrow left" data-bs-toggle="offcanvas" data-bs-target="#account" ></span></a>
            <h5 class="offcanvas-title text-center" id="friendRequestOffcanvasOffcanvasLabel" style="font-size: 35px;">
                  Friend requests
            </h5>  
          </div>
          <div class="offcanvas-body text-center">
            
            <ul class="list-group list-group-flush" style="text-align: left;">
              <li v-for="cerere in cereri" class="list-group-item" style="border-color: #cda45e; color: white; background-color: #0c0b09; position: relative; display: flex; justify-content: space-between; align-items: center;">
                 {{ cerere.numeUtilizator }} {{ cerere.prenumeUtilizator }}
                <div>
                    <button @click="accept_cerere(cerere.idUtilizator)" type="button"  class="log-out-button accept-button" style="margin-right: 5px; padding: 5px 10px; font-size: 12px; height: 25px;">
                        <i class="bi bi-check-lg" style="color: white;"></i>
                        Confirm
                        
                    </button>
                    <button @click="reject_cerere(cerere.idUtilizator)" type="button" class="log-out-button delete-button" style="padding: 5px 10px; font-size: 12px; height: 25px;">
                        <i class="bi bi-x-lg" style="color: white;"></i>
                        Delete
                    </button>
                </div>
              </li>
            </ul>

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
      prieteni: [],
      cereri: [],
    }
  },
  methods: {
    update_prieteni(){
      axios.get("/api/afisare_prieteni").then(response => {this.prieteni=response.data})
    },
    afisare_cereri(){
      axios.get("/api/afisare_cereri").then(response => {this.cereri=response.data})
    },
    accept_cerere(id){
      axios.post(`/api/cerere_prietenie/accept/${id}`).then(this.afisare_cereri())
    },
    reject_cerere(id){
      axios.post(`/api/cerere_prietenie/reject/${id}`).then(this.afisare_cereri())
    },
    sterge_prieten(id){
      axios.post(`/api/stergere_prieten/${id}`).then(this.update_prieteni())

    }
  },
  created() {
    axios.get("/api/utilizatori/current").then(response => {this.current_user=response.data});
    this.update_prieteni();
    this.afisare_cereri();
  }
}
</script>

