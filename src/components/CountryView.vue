<style>
  .country-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .country-img {
    max-width: 50%;
    padding: 2rem;
  }

  .country-img > img {
    width: 300px;
    height: auto;
    object-fit: contain;
  }

  .country-desc {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .country-desc > p {
    font-style: italic;
    font-size: 1.2rem;
    text-indent: 4ch;
  }

  .country-desc > h3 {
    text-indent: 3ch;
    font-style: bold;
    font-size: 2rem;
    font-variant: small-caps;
    letter-spacing: 1px;
    word-spacing: 0.2em;
  }
</style>

<template>
  <!-- ======= Country Section ======= -->
  <section id="country" class="country">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="country-wrapper">
            <div class="country-img">
                <img :src="getCountryImagePath()" alt="">
            </div>
            <div class="country-desc">
               <h3>{{ countryName }}</h3>
                <p>
                    Cinematic production is often a mirror of the culture and social context of the country in which it is made. 
                    Specific elements of a country, such as its history, traditions, values, and social climate, are subtly or overtly 
                    reflected in the respective films. 
                    This influence of the country on the artistic process manifests in various ways, from narrative and aesthetic choices to the subjects and themes addressed.
                </p>
            </div>
          </div>
          <div class="container-fluid" data-aos="zoom-in" data-aos-delay="200">
            <swiper :slidesPerView="5" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="movie-card2">
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
                    <div class="movie-card2">
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
                    <div class="movie-card2">
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
                    <div class="movie-card2">
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
                    <div class="movie-card2">
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
                    <div class="movie-card2">
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
                    <div class="movie-card2">
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
  </section><!-- End Country Section -->
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
//import 'swiper/css/pagination';
//import { Pagination } from 'swiper/modules';



export default {
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        //modules: [Pagination],
      };
    },
  data() {
    return {
      baseUrl: "../src/assets/img/countries/", // Base URL for country images
      baseUrl2: "../src/assets/img/movies/", // Base URL for movie images
      baseUrl3: "../src/assets/img/movies1/", // Base URL for country images
      baseUrl4: "../src/assets/img/movies2/", // Base URL for country images
      baseUrl5: "../src/assets/img/movies3/", // Base URL for country images
      baseUrl6: "../src/assets/img/movies4/", // Base URL for country images
    };
  },
  methods: {
    getCountryImagePath() {
      const path = this.baseUrl + this.isoCode + ".webp"; // Concatenate base URL with ISO code
      console.log(path)
      return path;
    },
    getCountryMoviePath1() {
      const path = this.baseUrl2 + this.isoCode + ".webp"; // Concatenate base URL with ISO code
      console.log(path)
      return path;
    },
    getCountryMoviePath2() {
      const path = this.baseUrl3 + this.isoCode + ".webp"; // Concatenate base URL with ISO code
      console.log(path)
      return path;
    },
    getCountryMoviePath3() {
      const path = this.baseUrl4 + this.isoCode + ".webp"; // Concatenate base URL with ISO code
      console.log(path)
      return path;
    },
    getCountryMoviePath4() {
      const path = this.baseUrl5 + this.isoCode + ".webp"; // Concatenate base URL with ISO code
      console.log(path)
      return path;
    },
    getCountryMoviePath5() {
      const path = this.baseUrl6 + this.isoCode + ".webp"; // Concatenate base URL with ISO code
      console.log(path)
      return path;
    },
  },
  computed: {
    isoCode() {
      // Extract ISO code from the URL
      const url = window.location.href; // Get current URL
      console.log(url)
      const isoCode = url.slice(-2); // Extract last two characters
      return isoCode;
    },
    countryName() {
      // Logic to get country name based on ISO code if needed
      // Replace this with your logic to fetch country names
      // For example:
      const countryNames= {
        "af": "Afghanistan",
        "al": "Albania",
        "gg": "Guernsey",
        "dz": "Algeria",
        "as": "American Samoa",
        "ad": "Andorra",
        "ao": "Angola",
        "ai": "Anguilla",
        "aq": "Antarctica",
        "ag": "Antigua and Barbuda",
        "ar": "Argentina",
        "am": "Armenia",
        "aw": "Aruba",
        "au": "Australia",
        "at": "Austria",
        "az": "Azerbaijan",
        "bs": "Bahamas",
        "bh": "Bahrain",
        "bd": "Bangladesh",
        "bb": "Barbados",
        "by": "Belarus",
        "be": "Belgium",
        "bz": "Belize",
        "bj": "Benin",
        "bm": "Bermuda",
        "bt": "Bhutan",
        "bo": "Bolivia",
        "bq": "Bonaire, Sint Eustatius and Saba",
        "ba": "Bosnia and Herzegovina",
        "bw": "Botswana",
        "bv": "Bouvet Island",
        "br": "Brazil",
        "vg": "British Virgin Islands",
        "bn": "Brunei Darussalam",
        "bg": "Bulgaria",
        "bf": "Burkina Faso",
        "bi": "Burundi",
        "kh": "Cambodia",
        "cm": "Cameroon",
        "ca": "Canada",
        "cv": "Cape Verde",
        "ky": "Cayman Islands",
        "cf": "Central African Republic",
        "td": "Chad",
        "cl": "Chile",
        "cn": "China",
        "cx": "Christmas Island",
        "cc": "Cocos (Keeling) Islands",
        "co": "Colombia",
        "km": "Comoros",
        "cd": "Democratic Republic of the Congo",
        "cg": "Republic of the Congo",
        "ck": "Cook Islands",
        "cr": "Costa Rica",
        "hr": "Croatia",
        "cu": "Cuba",
        "cw": "Curaçao",
        "cy": "Cyprus",
        "cz": "Czech Republic",
        "ci": "Côte d'Ivoire (Ivory Coast)",
        "dk": "Denmark",
        "dj": "Djibouti",
        "dm": "Dominica",
        "do": "Dominican Republic",
        "tl": "East Timor (Timor-Leste)",
        "ec": "Ecuador",
        "eg": "Egypt",
        "sv": "El Salvador",
        "gq": "Equatorial Guinea",
        "er": "Eritrea",
        "ee": "Estonia",
        "et": "Ethiopia",
        "fk": "Falkland Islands (Malvinas)",
        "fo": "Faroe Islands",
        "fj": "Fiji",
        "fi": "Finland",
        "fr": "France",
        "gf": "French Guiana",
        "pf": "French Polynesia",
        "tf": "French Southern Territories",
        "ga": "Gabon",
        "gm": "Gambia",
        "ge": "Georgia",
        "de": "Germany",
        "gh": "Ghana",
        "gi": "Gibraltar",
        "gr": "Greece",
        "gl": "Greenland",
        "gd": "Grenada",
        "gp": "Guadeloupe",
        "gt": "Guatemala",
        "gw": "Guinea-Bissau",
        "gn": "Guinea",
        "gy": "Guyana",
        "ht": "Haiti",
        "hn": "Honduras",
        "hk": "Hong Kong",
        "hu": "Hungary",
        "is": "Iceland",
        "in": "India",
        "id": "Indonesia",
        "ir": "Iran",
        "iq": "Iraq",
        "ie": "Ireland",
        "im": "Isle of Man",
        "il": "Israel",
        "it": "Italy",
        "jm": "Jamaica",
        "jp": "Japan",
        "je": "Jersey",
        "jo": "Jordan",
        "kz": "Kazakhstan",
        "ke": "Kenya",
        "ki": "Kiribati",
        "xk": "Kosovo",
        "kw": "Kuwait",
        "kg": "Kyrgyzstan",
        "la": "Laos",
        "lv": "Latvia",
        "lb": "Lebanon",
        "ls": "Lesotho",
        "lr": "Liberia",
        "ly": "Libya",
        "li": "Liechtenstein",
        "lt": "Lithuania",
        "lu": "Luxembourg",
        "mo": "Macao",
        "mk": "North Macedonia",
        "mg": "Madagascar",
        "mw": "Malawi",
        "my": "Malaysia",
        "mv": "Maldives",
        "ml": "Mali",
        "mt": "Malta",
        "mh": "Marshall Islands",
        "mq": "Martinique",
        "mr": "Mauritania",
        "mu": "Mauritius",
        "mx": "Mexico",
        "fm": "Micronesia",
        "md": "Moldova",
        "mc": "Monaco",
        "mn": "Mongolia",
        "me": "Montenegro",
        "ms": "Montserrat",
        "ma": "Morocco",
        "mz": "Mozambique",
        "mm": "Myanmar",
        "na": "Namibia",
        "nr": "Nauru",
        "np": "Nepal",
        "nl": "Netherlands",
        "nc": "New Caledonia",
        "nz": "New Zealand",
        "ni": "Nicaragua",
        "ne": "Niger",
        "ng": "Nigeria",
        "nu": "Niue",
        "kp": "North Korea",
        "mp": "Northern Mariana Islands",
        "no": "Norway",
        "om": "Oman",
        "pk": "Pakistan",
        "pw": "Palau",
        "pa": "Panama",
        "pg": "Papua New Guinea",
        "py": "Paraguay",
        "pe": "Peru",
        "ph": "Philippines",
        "pn": "Pitcairn Islands",
        "pl": "Poland",
        "pt": "Portugal",
        "pr": "Puerto Rico",
        "qa": "Qatar",
        "ro": "Romania",
        "ru": "Russia",
        "rw": "Rwanda",
        "re": "Réunion",
        "bl": "Saint Barthélemy",
        "sh": "Saint Helena, Ascension, and Tristan da Cunha",
        "kn": "Saint Kitts and Nevis",
        "lc": "Saint Lucia",
        "pm": "Saint Pierre and Miquelon",
        "vc": "Saint Vincent and the Grenadines",
        "ws": "Samoa",
        "sm": "San Marino",
        "sa": "Saudi Arabia",
        "sn": "Senegal",
        "rs": "Serbia",
        "sc": "Seychelles",
        "sl": "Sierra Leone",
        "sg": "Singapore",
        "sk": "Slovakia",
        "si": "Slovenia",
        "sb": "Solomon Islands",
        "so": "Somalia",
        "za": "South Africa",
        "gs": "South Georgia and the South Sandwich Islands",
        "kr": "South Korea",
        "es": "Spain",
        "lk": "Sri Lanka",
        "sd": "Sudan",
        "sr": "Suriname",
        "sz": "Eswatini",
        "se": "Sweden",
        "ch": "Switzerland",
        "sy": "Syria",
        "st": "São Tomé and Príncipe",
        "tw": "Taiwan",
        "tj": "Tajikistan",
        "tz": "Tanzania",
        "th": "Thailand",
        "tg": "Togo",
        "tk": "Tokelau",
        "to": "Tonga",
        "tt": "Trinidad and Tobago",
        "tn": "Tunisia",
        "tr": "Turkey",
        "tm": "Turkmenistan",
        "tc": "Turks and Caicos Islands",
        "tv": "Tuvalu",
        "ug": "Uganda",
        "ua": "Ukraine",
        "ae": "United Arab Emirates",
        "gb": "United Kingdom",
        "us": "United States",
        "uy": "Uruguay",
        "uz": "Uzbekistan",
        "vu": "Vanuatu",
        "va": "Vatican City",
        "ve": "Venezuela",
        "vn": "Vietnam",
        "eh": "Western Sahara",
        "ye": "Yemen",
        "zm": "Zambia",
        "zw": "Zimbabwe"
    };
      return countryNames[this.isoCode] || "Unknown";
    },
    countryMovies() {
      // Logic to get country name based on ISO code if needed
      // Replace this with your logic to fetch country names
      // For example:
      const countryMovies= {
        "ro": "Romania"

    };
      return countryMovies[this.isoCode] || "Unknown";
    },
    countryDescription(){
      const countryDescriptions = {
        "us": "descriere"
      }

      return this.countryDescriptions[this.isoCode] || "No description"
    }
    
  },
};


</script>