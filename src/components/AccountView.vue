<template>
  <div class="container-account">
    <a class="book-a-table-btn scrollto d-none d-lg-flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#account" aria-controls="account">Account</a>

        <!--Offcanvas-ul pentru Account-->
        <div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="account" aria-labelledby="accountLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title text-center" id="accountLabel" style="font-size: 35px;">
                <i class="bi bi-person"></i> Hi, ... !
            </h5>
            <button class="close-x-button" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="bi bi-x"></i>
            </button>
          </div>
            <div class="offcanvas-body text-center">
              <div class="card contactCard">
                  <div class="card-body">
                      <p><i>Date de contact</i></p>
                      <p>
                          <br>Name: 
                          <br>Prenume:
                          <br>Email: 
                      </p>
                  </div>
              </div>

              <button class="btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#friendsListOffcanvas" style="position: absolute; bottom: 35%; left: 50%; transform: translateX(-50%);">Friends list</button>
              <button class="btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#friendRequestOffcanvas" style="position: absolute; bottom: 45%; left: 50%; transform: translateX(-50%);">Friend requests list</button>

              <button type="button" class="log-out-button" style="position: absolute; bottom: 17%; left: 50%; transform: translateX(-50%); ">Log out</button>
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
              <li class="list-group-item" style="border-color: #cda45e; color: white; background-color: #0c0b09; position: relative;">
                Ana Chira
                <button type="button" class="log-out-button accept-button" data-bs-toggle="modal" data-bs-target="#DeleteFriendshipModal" style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%); padding: 5px 10px; font-size: 12px; height: 25px;">
                  Delete
                </button>
                
                <!--<button type="button" class="log-out-button" style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%); padding: 5px 10px; font-size: 12px; height: 25px;">Delete</button>
                  -->
                </li>
              <li class="list-group-item" style="border-color: #cda45e; color: white; background-color: #0c0b09; position: relative;">
                Matei Duma
                <button type="button" class="log-out-button" style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%); padding: 5px 10px; font-size: 12px; height: 25px;">Delete</button>
              </li>
              <li class="list-group-item" style="border-color: #cda45e; color: white; background-color: #0c0b09; position: relative;">
                Trif Alin
                <button type="button" class="log-out-button" style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%); padding: 5px 10px; font-size: 12px; height: 25px;">Delete</button>
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
              <li class="list-group-item" style="border-color: #cda45e; color: white; background-color: #0c0b09; position: relative; display: flex; justify-content: space-between; align-items: center;">
                <span>Bogdan Sur</span>
                <div>
                    <button type="button" class="log-out-button accept-button" style="margin-right: 5px; padding: 5px 10px; font-size: 12px; height: 25px;">
                        <i class="bi bi-check-lg" style="color: white;"></i>
                        Confirm
                    </button>
                    <button type="button" class="log-out-button delete-button" style="padding: 5px 10px; font-size: 12px; height: 25px;">
                        <i class="bi bi-x-lg" style="color: white;"></i>
                        Delete
                    </button>
                </div>
              </li>
              <li class="list-group-item" style="border-color: #cda45e; color: white; background-color: #0c0b09; position: relative; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                <span style="flex: 1; margin-right: 10px;">Toma Marin Iosif Aurel Florin</span>
                <div style="display: flex;">
                    <button type="button" class="log-out-button accept-button" style="margin-right: 5px; padding: 5px 10px; font-size: 12px; height: 25px;">
                        <i class="bi bi-check-lg" style="color: white;"></i>
                        Confirm
                    </button>
                    <button type="button" class="log-out-button delete-button" style="padding: 5px 10px; font-size: 12px; height: 25px;">
                        <i class="bi bi-x-lg" style="color: white;"></i>
                        Delete
                    </button>
                </div>
              </li>
            </ul>

          </div>
        </div>

        <!-- Modal for deleted friendship-->
        <div class="modal fade" id="DeleteFriendshipModal" tabindex="-1" aria-labelledby="DeleteFriendshipModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" style="max-width: 400px;">
            <div class="modal-content" style="color: #cda45e; border: 2px solid #cda45e; background: #0c0b09;">
              <div class="modal-body text-center">
                <div style="margin-bottom: 10px;">The deletion of the friendship was done successfully!</div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color: #0c0b09; border: 1px solid #cda45e;">Ok</button>
              </div>
            </div>
          </div>
        </div>

  </div>

</template>