<script setup>
import DefaultInfoCard from "../../components/DefaultInfoCard.vue";
import CenteredBlogCard from "../../components/CenteredBlogCard.vue";
var videoString="../assets/videos/reading-book-outside.mp4";
</script>
<template>
  <section class="py-7 bg-gradient-light-reverse bb-3-dark-orange">
    <div class="container ">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="ADDRESS" title="Find us" description="

BOOKS FOR ALL ECOMMERCE SRL
Str. Murenilor nr.1, birou 2 ap.11, Brasov, 50026

 "/>
            <DefaultInfoCard color="info" icon="CATEGORIES" title="Discover by" description="Different genres like classics, SF, fantasy, romance and more." />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard color="info" icon="BUY" title="Purchase" description="Buy new found books using only one click via BookDepository." />
            <DefaultInfoCard color="info" icon="CONTACT" title="Improve platform" description="All suggestions to improve the platform and the customer experience are welcomed." />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6" style="min-width:400px">
          <CenteredBlogCard
            :video="videoString"
            title="Get insights on Search"
            action.label="Start reading more!"
            description="To get the full experience of our site, please browse through the categories or if you already have a book in mind, don't hesitate to use the search bar." />
          </div>
      </div>
    </div>
  </section>
</template>
