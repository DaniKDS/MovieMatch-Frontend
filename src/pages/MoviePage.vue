<script setup>

import NavBar from '../components/NavBar.vue'
import MoviesView from '../components/MoviesView.vue';
import Footer from '../components/Footer.vue';
import WeeklyMovies from '../components/WeeklyMovies.vue';

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <NavBar></NavBar>
            <WeeklyMovies></WeeklyMovies>
            <MoviesView></MoviesView>
            <Footer></Footer>
        </div>
       
    </div>
</template>
