<script setup>
import ContactUs from '../components/ContactUs.vue';
import AboutNewsletter from './about/AboutNewsletter.vue'
import AboutTeam from './about/AboutTeam.vue';
import AboutInformation from './about/AboutInformation.vue';
import AboutFeaturing from './about/AboutFeaturing.vue';
import { initialiseTheToc as initialiseTheToc} from '../assets/js/initialiseTheToc.js'
import $ from 'jquery';
import { useRouter } from "vue-router";



var router = useRouter();
window.onscroll = function () { myFunction() };


var theTOC;
var sticky;

$(document).ready(function () {
  initialiseTheToc();
  // Get the TOC
  theTOC = document.getElementById("dinamicTOC");
  // Get the offset position of the TOC
  sticky = theTOC.offsetTop;
});

// Add the sticky class to the theTOC when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    console.log("table of contents is sticky");
    theTOC.classList.add("sticky")
  } else {
    console.log("table of contents is not sticky");

    theTOC.classList.remove("sticky");
  }
} 
</script>

<template>
  <header>
  </header>
  <div class="aboutPage">
    <div style="z-index:18;">
      <!-- plugin menu here -->
      <div id="dinamicTOC"></div>
    </div>
    <div class="card card-body  mx-3 mx-md-4 mt-n6" style="background-color:transparent; border-color: transparent;">
      <h1 id="TOCitem">Information</h1>
      <AboutInformation />
      <h1 id="TOCitem">Team</h1>
      <AboutTeam />
      <h1 id="TOCitem">Featuring</h1>
      <AboutFeaturing />
      <h1 id="TOCitem">Newsletter</h1>
      <AboutNewsletter />
      <h1 id="TOCitem">Contact Us</h1>
      <ContactUs />
    </div>
  </div>
</template>

<style scoped>
.sticky{
  top:70px;
}
.dynamicContentMenu {
  /* max-width: 15%; */
  /* margin: 0; */
  width: 7rem;
  height: 100%;
  max-width: 7rem;
  
  text-align: left;
}

.aboutPage {
  display: grid;
  grid-template-columns: 10% 90%;
}

.aboutPage.card {
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.dinamicTOC {
  /* margin-top:45px; */
  position: fixed;
  padding: none;
  margin: 0;
  /* display: block; */
  /* background-color:rgb(117, 37, 7); */
  /* min-width: 300px; */
  width: 7rem;
}
@media (max-width: 991.98px) {

.dinamicTOC {
  width:5rem;
}
.dynamicContentMenu {
  
  width: 5rem;
  margin:0px;
  font-size: 12px;
  text-align: left;
}
}@media (min-width: 992px) {

.dinamicTOC {
  width:5rem;
}
.dynamicContentMenu {
  margin-top:0px;
}
}
/* 
.col-md-1 {
  position: relative;
  display: block;
  padding: 0;
  display: inline-block;
  background-color: rgba(251, 192, 153, 0.8);
  width: 100%;
  border-radius: 8px;
} */

#TOCitem {
  padding: 1.5rem 0;
  margin: 0;
  color: rgb(117, 37, 7);
  font-size: 40px;
  font-weight: 600;
  font-family: 'Coustard', serif;
  text-decoration: none;
  text-shadow: 1px 1px 4px #000000;
  background-color: rgb(251, 192, 153, 0.2);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #f36c24;
}
</style>