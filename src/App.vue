<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import FooterCentered from "./components/FooterCentered.vue";
// let img=new Image();
// img.src= "./assets/images/stackofbooks.jpg";
// img.onload = () => {
//        let height = image.height;
//        let width = image.width;
//        return image.src + " this is width " + width + " and this is height " + height
//  }

</script>

<template>
  <div class="app-content">
    <div class="content">
      <div class="app-navbar">
        <Navbar />
      </div>
      <div style="padding-top:2%; z-index:1;">
        <Router-View />
      </div>
    </div>
  </div>
  <div class="divider"></div>
  <FooterCentered />
</template>
<style scoped>
.divider{
  width:90%;
  display: inline-flex ;
  background:  rgb(117, 37, 7);
  height:4px;
  
}
.app-navbar {
  padding-bottom: 80px;
  z-index:10;
}

a {
  color: rgb(117, 37, 7);
}

.content {
  position: relative;
  padding: 2% 2%;
  
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
