<template>
    <div class="map-wrapper" >
        <div id="map" class="map"></div>
          <router-link :to="{ name: 'region', params: { countryCode: 'code' } }"></router-link>
    </div>
</template>
  
  <script>
  // Import any external scripts or stylesheets
  import 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
  import '../assets/js/jqvmap.js';
  import '../assets/css/map.css';
  import '../assets/js/world_map_data.js';
  
  export default {
    mounted() {
      // Initialize the map or any other script-specific initialization
      // You may need to adjust this based on how the original scripts work
      this.initializeMap();
    },
    methods: {
      initializeMap() {
        // Check if the jQuery Vector Map library is loaded
        if (typeof $.fn.vectorMap !== 'undefined') {
          // Add the initialization code here
          $('#map').vectorMap({
            map: 'world_en',
            backgroundColor: '#a5bfdd',
            color: '#f4f3f0',
            hoverColor: '#c9dfaf',
            selectedColor: '#c9dfaf',
            scaleColors: ['#b6d6ff', '#005ace'],
            normalizeFunction: 'linear',
            enableZoom: true,
            showTooltip: true,
            borderColor: '#818181',
            borderWidth: 1,
            borderOpacity: 0.25,
            selectedRegions: null,
            multiSelectRegion: false
          });
        } else {
          console.error('jQuery Vector Map library not found. Make sure it is properly loaded.');
        }
      }
    }
  };
  </script>
  
  <style>
  @import "../assets/css/map.css";
  
  </style>
  