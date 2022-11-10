<script setup>
import ContactUs from '../components/ContactUs.vue';
import AboutTeam from './about/AboutTeam.vue';
</script>


<template>
    <!-- <ContactUs /> -->
    <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      style="background-image: `url(../assets/images/booksforall.jpg)` "
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-black">
              Work with an amazing <span class="text-black" id="typed"></span>
            </h1>
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
            <h6 class="text-black mb-2 mt-5">Find us on</h6>
            <div class="d-flex justify-content-center">
              <a href="javascript:;"
                ><i class="fab fa-facebook text-lg text-black me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-instagram text-lg text-black me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-twitter text-lg text-black me-4"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-google-plus text-lg text-black"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <Information />
    <AboutTeam />
    <Featuring />
    <Newsletter />
    <ContactUs/>
  </div>
</template>

<style scoped>

</style>