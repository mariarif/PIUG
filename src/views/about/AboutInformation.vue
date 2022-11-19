<script setup>
import DefaultInfoCard from "../../components/DefaultInfoCard.vue";
import CenteredBlogCard from "../../components/CenteredBlogCard.vue";
var videoString="/src/assets/videos/reading-book-outside.mp4";
</script>
<template>
  <section class="py-7 bg-gradient-light-reverse bb-3-dark-orange">
    <div class="container ">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="public" title="Fully integrated" description="We get insulted by others, lose trust for those We get back
                  freezes" />
            <DefaultInfoCard color="info" icon="payments" title="Payments functionality" description="We get insulted by others, lose trust for those We get back
                  freezes" />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard color="info" icon="apps" title="Prebuilt components" description="We get insulted by others, lose trust for those We get back
                  freezes" />
            <DefaultInfoCard color="info" icon="3p" title="Improved platform" description="We get insulted by others, lose trust for those We get back
                  freezes" />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6" style="min-width:400px">
          <CenteredBlogCard
            :video="videoString"
            title="Get insights on Search"
            action.label="Start to read more!"
            description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards." />
          </div>
      </div>
    </div>
  </section>
</template>
