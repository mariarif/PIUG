<script setup>
import ContactUs from '../components/ContactUs.vue';
import AboutNewsletter from './about/AboutNewsletter.vue'
import AboutTeam from './about/AboutTeam.vue';
import AboutInformation from './about/AboutInformation.vue';
import AboutFeaturing from './about/AboutFeaturing.vue';
import $ from 'jquery';
// import { dynamicContentMenu } from '../assets/js/jquery-dynamic-content-menu.js';
import { onMounted } from 'vue';

// function initToc() {
//   var $myToc = $('#toc');
//   Toc.init($myToc);
//   $('body').scrollspy({
//     target: $myNav
//   });
// }

// Toc.init({
//   // The element that the navigation will be created in
//   $nav: $('#myToc'),
//   // The element where the search for headings will be limited to
//   $scope: $(document.body)
// });
// initToc();


onMounted(() => $(document).ready(function () {

  $("#dinamicTOC").dynamicContentMenu({
    'selectors': "h1 #TOCitem",
  });

}));
</script>
<!-- <script>
$(function () {
  if (!window.jQuery) {
    alert('jQuery not included!');
  }
  //Include plugin
  $("#dinamicTOC").dynamicContentMenu({
    // 'theme' : "material",
    'selectors': "h1",//, h2, h3, .h1s",
    'extendPage': false // do not increase page height
  });
});
</script> -->

<template>
  <header>
    <!-- <div class="page-header min-vh-75 ">
      <span class="mask opacity-6"></span>
      <div class="container bg-gradient-light">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <p class="text-black">
              Work with an amazing <span class="text-black" id="typed"></span>
            </p>
            <div id="typed-strings">
              <h1>team</h1>
              <h1>design</h1>
              <h1>tool</h1>
            </div>
            <p class="lead mb-4 text-black opacity-8">
              We’re constantly trying to express ourselves and actualize our
              dreams. If you have the opportunity to play this game
            </p>
            <button type="submit" class="btn bg-white text-dark">
              Create Account
            </button>
            <p class="text-black mb-2 mt-5">Find us on</p>
            <div class="d-flex justify-content-center">
              <a href="javascript:;"><i class="fab fa-facebook text-lg text-black me-4">Facebook</i></a>
              <a href="javascript:;"><i class="fab fa-instagram text-lg text-black me-4">Instagram</i></a>
              <a href="javascript:;"><i class="fab fa-twitter text-lg text-black me-4">Twitter</i></a>
              <a href="javascript:;"><i class="fab fa-google-plus text-lg text-black">Google Plus</i></a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </header>
  <div class="col-md-1" style="z-index:19;">
    <!-- plugin menu here -->
    <div id="dinamicTOC"></div>
  </div>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
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

</template>

<style scoped>
#TOCitem {
  margin-top: 3rem;
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