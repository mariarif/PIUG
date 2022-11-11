<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
    name: String,
    link: String,
  },
  position: {
    type: Object,
    label: String,
    color: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="card card-profile">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12 mt-n5">
        <a :href="profile.link">
          <div class="p-3 pe-md-0">
            <img class="w-100 border-radius-md shadow-lg" max-width="220px" :src="image" :alt="profile.name" />
          </div>
        </a>
      </div>
      <div class="col-lg-8 col-md-6 col-12 my-auto">
        <div class="card-body ps-lg-0">
          <h5 class="mb-0">{{ profile.name }}</h5>
          <h6 class="mt-1">{{ position.label }}</h6>
          <p class="mb-0">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.card.card-profile{
  margin-top: 1.5rem !important;
margin-bottom: 1.5rem !important;
background-color: rgba(255, 255, 255, 0.6) ;
box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.5), 0 2px 4px 1px rgba(0, 0, 0, 0.06);
 
/* padding-bottom: 2rem; */
}
h6{
  color:#f36c24;
}
.w-100 {
  width: 100% !important;
}
.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
}
.border-radius-md {
  border-radius: 0.375rem;
}
.pe-md-0 {
  padding-right: 0 !important;
  position: absolute; 
  top:-1.5rem;
  /*                         dfdfdfdfddfdfddfdfdfddfdffddf */
}

.p-3 {
  padding: 1rem !important;
}
img {
  vertical-align: middle;
  border-style: none;
}
*, ::after, ::before {
  box-sizing: border-box;
}
.col-md-6 {
  flex: 0 0 auto;
  width: 33.33333333%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
}

.row {
  padding: 2rem 0;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  /* display: grid; */
  /* grid-template-columns: 40% 60%; */
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
}
</style>
