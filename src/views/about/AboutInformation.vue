<script setup>
// example components
import DefaultInfoCard from "../../components/DefaultInfoCard.vue";
import CenteredBlogCard from "../../components/CenteredBlogCard.vue";
import Video from '@/components/Video.vue';
// import {require}

// import { videoPlay } from "vue3-video-play";
// import { reactive } from "vue";

// const options = reactive({
//   width: "800px", 
//   height: "450px", 
//   color: "#409eff", 
//   title: "", 
//   src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", 
//   muted: false, 
//   webFullScreen: false,
//   speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], 
//   autoPlay: false,
//   loop: false,
//   mirror: false, 
//   ligthOff: false,
//   volume: 0.3,
//   control: true, 
//   controlBtns: [
//     "audioTrack",
//     "quality",
//     "speedRate",
//     "volume",
//     "setting",
//     "pip",
//     "pageFullScreen",
//     "fullScreen",
//   ], 
// });

// function play() {
//       $refs.videoPlayer.play();
//     };

//     function pause() {
//       $refs.videoPlayer.pause();
//     };
//     function stop() {
//       const { videoPlayer } = $refs;
//       videoPlayer.pause();
//       videoPlayer.currentTime = 0;
//     };
//     function setSpeed(speed) {
//       videoPlayer.playbackRate = speed;
//     };
var videoString="/src/assets/videos/reading-book-outside.mp4";
</script>
<template>
  <section class="py-7 bg-gradient-light-reverse">
    
    <div class="container ">
      
      <div class="row align-items-center">
        <!-- <Video :mp4="videoString"></Video> -->
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
            description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards." />
       
          <!-- <Video :mp4="videoString"></Video> -->
       
          </div>
        
      </div>
    </div>
  </section>
</template>
