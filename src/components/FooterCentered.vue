<script setup>
defineProps({
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
        link: "https://www.facebook.com/CreativeTim/",
      },
      {
        icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
        link: "https://twitter.com/creativetim",
      },
      {
        icon: '<i class="fab fa-dribbble text-lg opacity-8"></i>',
        link: "https://dribbble.com/creativetim",
      },
      {
        icon: '<i class="fab fa-github text-lg opacity-8"></i>',
        link: "https://github.com/creativetimofficial",
      },
      {
        icon: '<i class="fab fa-youtube text-lg opacity-8"></i>',
        link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
      },
    ],
  },
  links: {
    type: Array,
    name: String,
    href: String,
    default: () => [
      { href: "/about#Information", name: "About Us" },
      { href: "/about#ContactUs", name: "Contact" },
      { href: "https://www.instagram.com/booksforallindia", name: "Instagram" },
      { href: "https://www.facebook.com/BooksForAllInitiative", name: "Facebook" },
      { href: "https://www.creative-tim.com/license", name: "Youtube" },
    ],
  },
});
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-4 mx-auto text-center">
          <a v-for="{ name, href } of links" :key="name" :href="href" target="_blank"
            class=" me-xl-5 me-3 mb-sm-0 mb-2">
            {{ name }}
          </a>
        </div>
        <div class="col-lg-8 mx-auto text-center mb-4 mt-2">
          <a
            v-for="{ icon, link } of socials"
            :key="link"
            :href="link"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
            v-html="icon"
          >
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-8 mx-auto text-center mt-1">
          <p class="mb-0 ">
            Copyright © {{ new Date().getFullYear() }} Books For All.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  display: flex;
  /* width:100%; */
  box-sizing: content-box;
  /* margin-bottom: 1rem; */
  z-index:19;
  /* position: fixed; */
}

p,
a {
  text-decoration: none;
  font-weight: 500;
  font-family: 'Mulish', sans-serif;
  color: rgb(107, 46, 24);
  font-weight: 600;
  font-size: 1rem;
  /* padding: 0.3rem; */
}

a:hover {
  color: rgb(243, 108, 36);
}

.footer .container {
  border-top:rgb(117, 37, 7) 5px solid;
  max-width: 100%;
  background-color: rgba(251, 192, 153, 1);
  background-image:  linear-gradient(0deg, rgba(251, 192, 153, 1) 15%, rgba(251, 207, 178, 1) 35%, rgba(251, 222, 203, 1) 50%, rgba(251, 237, 228, 1) 90%, rgba(117, 37, 7, 1));
  /* background-image */
  /* background-color: rgb(251, 192, 153, 0.2); */
  /* box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%); */
}
</style>
