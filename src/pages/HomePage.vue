<script setup>

import NavBar from '../components/NavBar.vue'
import HomeView from '../components/HomeView.vue';
import AboutView from '../components/AboutView.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <NavBar></NavBar>
        </div>
        <HomeView></HomeView>
        <AboutView></AboutView>
        <Footer></Footer>
    </div>
</template>
