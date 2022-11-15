<script setup>
// export default {
//     name: "Video",
//     props: {
//         mp4: String
//     }
// }
const props = defineProps({
    mp4: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        default: 320
    },
    autoplay: {
        type: Boolean,
        default: true
    },
    loop: {
        type: Boolean,
        default: true
    }
});
</script>
<template>
    <video width="width" :autoplay="autoplay" :loop="loop" playsinline="true">
        <source :src="mp4" type="video/mp4">
        <!-- <source src="../assets/videos/reading-book-outside.mp4" type="video/mp4"> -->
    </video>
</template>
<style scoped>
video {
    width: 300px;
    /* max-width:500px; */
    max-width:300px;
    /* max-height:400px; */
    height:auto;
    /* padding-left: 0; */
    /* margin: 0; */
    /* position: absolute; */
    /* object-fit: contain; */
    /* z-index: 1; */
    /* border-radius: 10px; */
    /* align-self: center; */
}
/* @media (min-width: 992px) {
    video {
        max-width: 960px;
    }
}

@media (min-width: 768px) {
    video {
        max-width: 720px;
    }

    ;
}

@media (min-width: 576px) {
    video {
        max-width: 540px;
    }
}
 */

</style>