<script setup>
import { watch, computed, ref } from 'vue';

// }
const props = defineProps({
    mp4: {
        type: String,
        required: true
    },
    width: Number,
    autoplay: {
        type: Boolean,
        default: true
    },
    loop: {
        type: Boolean,
        default: true
    }
});
let cardHeaderWidth = ref( props.width );
console.log("the card header width = " + props.width);

watch(props.width, (newCardHeaderWidth) => {
    document.getElementById('myVideo').style.width = newCardHeaderWidth;
    console.log("new card header width = " + newCardHeaderWidth);
});
</script>s
<template>
    <video id="myVideo"  :autoplay="autoplay" :loop="loop" playsinline="true">
        <source :src="mp4" type="video/mp4">
    </video>
</template>
<style scoped>
video {
    width: 300px;
    /* max-width:500px; */
    /* max-width: 300px; */
    /* max-height:400px; */
    height: auto;
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