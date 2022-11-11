<script setup>
import ContactUs from '../components/ContactUs.vue';
import AboutNewsletter from './about/AboutNewsletter.vue'
import AboutTeam from './about/AboutTeam.vue';
import AboutInformation from './about/AboutInformation.vue';
import AboutFeaturing from './about/AboutFeaturing.vue';
import $ from 'jquery';
import { useRouter } from "vue-router";

const router = useRouter();
router.afterEach((to, from) => $(document).ready(function () {
  console.log("were in about page");
  if (window.location.href.includes("about")) {
    $("#dinamicTOC").dynamicContentMenu({
      'selectors': "h1 #TOCitem",
    });
  }
}));

window.onscroll = function () { myFunction() };


var navbar;
var sticky;

$(document).ready(function () {
  // Get the TOC
  navbar = document.getElementById("dinamicTOC");
  // Get the offset position of the TOC
  sticky = navbar.offsetTop;
});

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    console.log("table of contents is sticky");
    navbar.classList.add("sticky")
  } else {
    console.log("table of contents is not sticky");

    navbar.classList.remove("sticky");
  }
} 
</script>

<template>
  <header>
  </header>
  <div class="aboutPage">
    <div  style="z-index:19;">
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
.dynamicContentMenu {
  /* max-width: 15%; */
  /* margin: 0; */
  width: 100%;
  height: 100%;
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
  position: fixed;
  padding: 0;
  margin: o;
  /* display: block; */
  /* background-color:rgb(117, 37, 7); */
  /* min-width: 300px; */
  width: 100%;
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
  margin:0;
  color: rgb(117, 37, 7);
  font-size: 80;
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