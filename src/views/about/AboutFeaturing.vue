<script setup>
// example component
import DefaultCounterCard from "../../components/DefaultCounterCard.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="pt-4 pb-6 bg-gradient-light-reverse bb-3-dark-orange" id="count-stats">
    <div class="container">
      <div class="row mb-7">
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <a href="https://www.facebook.com/BooksForAllInitiative" target="_blank">
            <img class="w-100 opacity-7 logo img" src="@/assets/images/facebook.png" alt="logo" style="width:40; height:100%;" />
          </a>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <a href="https://www.instagram.com/booksforallindia" target="_blank">
            <img class="w-100 opacity-7 logo img" src="@/assets/images/instagram.png" alt="logo" />
          </a>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <a href="https://twitter.com/booksforall5" target="_blank">
            <img class="w-100 opacity-7 logo img" src="@/assets/images/twitter.png" alt="logo" />
          </a>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <a href="https://www.pinterest.com/pin/645351821619219054/" target="_blank">
            <img class="w-100 opacity-7 logo img" src="@/assets/images/pinterest.png" alt="logo" />
          </a>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <a href="https://www.youtube.com/channel/UCNqMsPW3F1HAIpRTzDf2H4Q" target="_blank">
            <img class="w-100 opacity-7 logo img" src="@/assets/images/youtube.png" alt="logo" />
          </a>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <a href="https://in.linkedin.com/company/guzarish" target="_blank">
            <img class="w-100 opacity-7 logo img" src="@/assets/images/linkedin.png" alt="logo" />
          </a>
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-md-3">
          <DefaultCounterCard title="Books" description="To choose from that appeal to everyone" :count="5234"
            :duration="3000" />
        </div>
        <div class="col-md-3">
          <DefaultCounterCard title="Hours" description="Invested to meet reader's expectations"
            :count="3400" suffix="+" :duration="3000" />
        </div>
        <div class="col-md-3">
          <DefaultCounterCard title="Support" description="To actively engage team members"
            :count="24" suffix="/7" :duration="4000" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.logo.img {
  height: 100%;
  width: 100%;
  will-change: filter;
}
</style>
