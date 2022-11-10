<script setup>
const props = defineProps({
  images: Array,
  // imgIndex:''
});

// function printArray(image, imgIndex){
// 	  consoleLog("img:"+ "Index["+index+"] = "+item+"\n");
//      }

// console.log("Images:",props.images);
// Array.from(props.images).forEach(child => {
//     console.log("ch:"+child.value)
// });
// const nrImages=props.images.length;
// // Arrays.forEach(element =>
// //  console.log(element)
// //       );
// // const props = withDefaults(() => {
// //   images: () => []
// // });
// var imagesSlider = ["src/assets/images/stackofbooks.jpg", "src/assets/images/pngtree-open-book-png-image_2990113.jpg", "src/assets/images/newReleases.png"];
</script>
<template>


  <div id="slider">
    <div id="carouselHome" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselHome" data-slide-to="0" class="active"></li>
        <li data-target="#carouselHome" data-slide-to="1"></li>
        <li data-target="#carouselHome" data-slide-to="2"></li>
        <li data-target="#carouselHome" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" :src="props.images[0]" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="props.images[1]" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="props.images[2]" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="props.images[3]" alt="Fourth slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

</template>
<style scoped>
.title-bg {
  opacity: 1;
  width: 100%;
  /* width: 500px; */
  height: auto;
  background-repeat: no-repeat;
  background-position: contain;
  background-attachment: fixed;
  /* border: 8px solid rgb(236, 69, 6);
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgb(129, 37, 4); */

}

#slider {
  max-width: 100%;
  text-align: center;
  margin: 0 auto;
  border: 8px solid rgb(236, 69, 6);
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgb(129, 37, 4);
  background-color: rgb(62, 22, 8,0.5);;
}

 
#overflow {
  width: 100%;
  overflow: hidden;
}

#slides .inner {
  width: 400%;
}

#slides  {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -o-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  -webkit-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -moz-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -o-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -ms-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);

  -webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -ms-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
}

#slides article {
  width: 25%;
  float: left;
}

#slide1:checked ~ #slides .inner {
  margin-left: 0;
}

#slide2:checked ~ #slides .inner {
  margin-left: -100%;
}

#slide3:checked ~ #slides .inner {
  margin-left: -200%;
}

#slide4:checked ~ #slides .inner {
  margin-left: -300%;
}

input[type="radio"] {
  display: none;
}

label {
  background: #CCC;
  display: inline-block;
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

#slide1:checked ~ label[for="slide1"],
#slide2:checked ~ label[for="slide2"],
#slide3:checked ~ label[for="slide3"],
#slide4:checked ~ label[for="slide4"] {
  background: #333;
}  
</style>