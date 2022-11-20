<script setup>
import { onMounted } from "vue";
//Vue Material Kit 2 components
import MaterialInput from "../../components/MaterialInput.vue";
import MaterialButton from "../../components/MaterialButton.vue";
import $ from 'jquery';
// material-input
import setMaterialInput from "../../assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});


function buttonClicked() {
  window.gtag.event('latest-click', {
    'event_category': 'about',
    'event_label': 'Subscribe-to-newsletter',
    'value': 1
  })
}

</script>
<template>
  <section class="py-5 bg-gradient-light-reverse bb-3-dark-orange">
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto 
text-dark-orange">
          <h4>Be the first to see the news</h4>
          <p class="mb-4">
           Get the latest informations about your favourite books.
          </p>
          <div class="row">
            <!-- <div class="col-8">
              <MaterialInput
                class="input-group-outline"
                id="email"
                :label="{ text: 'Email Here...', class: 'form-label' }"
                type="email"
              />
            </div> -->
            <div class="col-8 mb-3 pt-0">
              <input type="email" placeholder="Email" name="email" class="
              
                        px-3
              py-3
              text-dark-orange
              relative
              bg-white bg-white
              rounded
              text-sm
              border-0
              shadow
              outline-none
              focus:outline-none
              focus:ring
              w-full
            " required />
            </div>
            <div class="col-4 ps-0">
              <MaterialButton variant="gradient" color="success" class="mb-0 position-relative z-index-2"
                @click="buttonClicked">Subscribe</MaterialButton>
            </div>
          </div>
        </div>
        <div class="col-md-5 ms-auto mt-6 md-mt-0">
          <div class="position-relative">
            <img class="max-width-50 w-100 position-relative z-index-2" src="../../assets/images/macbook.png"
              alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.text-dark-orange {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

/* .btn {
  background-color: rgb(243, 108, 36);
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  font-weight: 400;
} */
</style>
