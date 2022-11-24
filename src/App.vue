<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import FooterCentered from "./components/FooterCentered.vue";

// window.onscroll=function() {fixTheNavbar()};
// var navbar=document.getElementById("navbarFix");
// var sticky=navbar.offsetTop;

// function fixTheNavbar(){
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// } 

let scrollToTopBtn;
//  = document.getElementById("scrollToTopBtn");

$(document).ready(function () {
  scrollToTopBtn = document.getElementById("scrollToTopBtn");
});
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <div class="app-content">
    <div class="content">
      <div class="app-navbar">
        <Navbar />
      </div>
      <div style="z-index:0;">
        <Router-View />
      </div>
    </div>
  </div>
  <button id="scrollToTopBtn" class="btn"  @click="topFunction()" title="Go to top">Top</button>
  <div id="footer" style="position:relative; z-index: 19;">
    <FooterCentered />
  </div>
  <!-- <div class="divider"></div> -->
 
</template>
<style scoped>
.divider {
  width: 90%;
  display: inline-flex;
  background: rgb(117, 37, 7);
  height: 4px;

}

.app-navbar {
  padding-bottom: 80px;
  z-index: 10;
  /* position:fixed; */
}

a {
  color: rgb(117, 37, 7);
}

.content {
  position: relative;
  padding: 2% 2%;
  padding-top:0;

}

.app-bg {
  opacity: 0.6;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;

}

.app-content {
  overflow: hidden;
  position: relative;
  min-height: 1000px;
}
</style>
