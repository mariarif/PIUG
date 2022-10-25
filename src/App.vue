<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>

    <img src="./assets/images/stackofbooks.jpg" class="Card" />
    <div class="content">
      <Navbar />
      <div style="position: relative;top: 700;
  left: 1000;">
        <Router-View />
      </div>
    </div>
  </div>

  <!-- <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
       
      </div>
    </div>
  </div> -->
</template>
<style scoped>
.content {
  /* z-index: 5; */
  padding: 2% 2%;
  top: 0;
  left: 0;
}

.Card {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 0 transparent solid;
  /* background-color: bisque; */
  /* background-image: url('../assets/images/stackofbooks.jpg'); */
  background-repeat: no-repeat;
  background-position: contain;
  /* background-attachment: fixed; */
  background-position: center;
}
</style>
