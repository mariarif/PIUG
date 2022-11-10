<script setup>
import { RouterLink } from 'vue-router';
import BooksForAllLinks from '../components/BooksForAllLinks.vue';
import Slider from '../components/Slider.vue'

var imagesSlider=["src/assets/images/stackofbooks.jpg",
 "src/assets/images/mistborn.png",
  "src/assets/images/new-releases.png",
  "src/assets/images/clothbound-classics.png",];
</script>
<template>
  <div class="homepage-wrap">
    <div class="title">
      <!-- <img class="title-bg" src="../assets/images/stackofbooks.jpg" alt="" /> -->
      <Slider :images=imagesSlider />
      <p>Find new information about your favourite book or discover new ones!</p>
    </div>
    <div>
      <BooksForAllLinks msg="Books for all" />
    </div>
  </div>
</template>
<style scoped>
.title {
  width: 100%;
  padding: 2%;
  position: relative;
  /* background-image: url('../assets/images/stackofbooks.jpg'); */
  /* background-repeat: no-repeat;
  background-position: contain;
  background-attachment: fixed; */
}

.title p {
  font-family: 'Clicker Script', cursive;
  font-size: 70px;
  font-weight: 1000;
  color: rgb(159, 46, 5);
  padding: 2% 2%;
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

.homepage-wrap {
  /* background-color: rgba(176, 176, 176, 0.177); */
  /* padding-top: 5%; */
}
</style>