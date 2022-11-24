<script setup>
// import Vue from 'vue';
import { RouterLink } from 'vue-router';
import BooksForAllLinks from '../components/BooksForAllLinks.vue';
import Slider from '../components/Slider.vue'

// Vue.useAttrs(Embed);

var imagesSlider = ["src/assets/images/clothbound-classics.png",
  "src/assets/images/stackofbooks.jpg",
  "src/assets/images/mistborn.png",
  "src/assets/images/new-releases.png",
];
</script>
<template>
  <div class="homepage-wrap">
    <div class="title">
      <!-- <img class="title-bg" src="../assets/images/stackofbooks.jpg" alt="" /> -->
      <Slider :images=imagesSlider />
      <p id="siteTitle" class="mt-5"> BOOKS FOR ALL </p>
      <p class="text-orange bg-translucide-white">Find new information about your favourite book or discover new ones!
      </p>
    </div>
    <div>
      <!-- <BooksForAllLinks msg="Books for all" /> -->
      <RouterLink to="/browse/bestRating"><button class="btn">Click here to start browsing!</button></RouterLink>

    </div>
  </div>
</template>
<style scoped>
.title {
  width: 100%;
  padding: 2rem;
  position: relative;
  /* background-image: url('../assets/images/stackofbooks.jpg'); */
  /* background-repeat: no-repeat;
  background-position: contain;
  background-attachment: fixed; */
}

#siteTitle {

  font-weight: 600;
  font-family: 'Coustard', serif;
  color: rgb(117, 37, 7);
  text-shadow: 2px 2px 4px #000000;
  font-size: 70px;
}

.title p {
  font-family: 'Clicker Script', cursive;
  font-size: 60px;
  font-weight: 1000;
  color: rgb(159, 46, 5);

}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #f36c24;
}

/* .title-bg {
  opacity: 0.8;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-position: contain;
  background-attachment: fixed;
  border: 8px solid rgb(236, 69, 6);
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgb(129, 37, 4);

} */
img {
  max-width: fit-content;
}

.homepage-wrap {
  /* background-color: rgba(176, 176, 176, 0.177); */
  /* padding-top: 5%; */
}
</style>