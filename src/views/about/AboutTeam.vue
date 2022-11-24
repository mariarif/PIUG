<script setup>
// example component
import HorizontalTeamCard from "../../components/HorizontalTeamCard.vue";

// // images
import emma from "../../assets/images/team-5.jpg";
import william from "../../assets/images/bruce-mars.jpg";
import ivana from "../../assets/images/ivana-squares.jpg";
import marquez from "../../assets/images/ivana-square.jpg";
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-light-reverse mx-n3 bb-3-dark-orange">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mt-2" style="width:100%">
          <h3 class=" z-index-1 position-relative  text-orange">
            The Executive Team
          </h3>
          <p class=" opacity-8 mb-0 text-dark-orange">
            We work with a leading international book retailer with a unique offer — over 20 million books and free
            delivery worldwide (with no minimum spend).
            We have a local center in Brasov, Romania, from where we coordinate all the work.
          </p>
          <p class=" opacity-8 mb-0 text-dark-orange">
            Our vision is to provide “All Books to All” by improving range, access and affordability of books. we strive
            to offer every book possible, representing the diversity of our customers and authors.
          </p>
          <p class=" opacity-8 mb-0 text-dark-orange">
            Now more than ever, we’re focused on the mental health of our colleagues. We aim to normalise conversations
            about mental health, and share tips and resources to deal with stressful situations. If you want to join out
            team
            <a class="category dropdown-item" href="/about#ContactUs" style="display:inline">
              contact us.
            </a>
          </p>
        </div>

      </div>
      <div class="row ">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard class="mt-4" :image="emma" :profile="{ name: 'Emma Roberts', link: 'javascript:;' }"
            :position="{ label: 'Public Relations', color: 'rgb(243, 108, 36)' }"
            description="What storytelling and books both have in common is that they bring us together." />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard class="mt-lg-4 mt-5" :image="william"
            :profile="{ name: 'William Pearce', link: 'javascript:;' }"
            :position="{ label: 'Founder', color: 'rgb(243, 108, 36)' }"
            description="There is a book created for every single one of us. We just have to find wich one." />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard class="mt-4 z-index-2" :image="ivana"
            :profile="{ name: 'Ivana Flow', link: 'javascript:;' }"
            :position="{ label: 'Doctor in literature', color: '#f36c24' }"
            description="Make a career out of your hobby and you'll always go to work with a smile." />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard class="mt-lg-4 mt-5 z-index-2" :image="marquez"
            :profile="{ name: 'Marquez Garcia', link: 'javascript:;' }"
            :position="{ label: 'Book Award winner', color: '#f36c24' }"
            description="All books offer what we need most in this time — a broadened perspective." />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.text-dark-orange {
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}

</style>

