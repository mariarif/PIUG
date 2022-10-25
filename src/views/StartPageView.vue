
<script setup>
import { RouterLink } from "vue-router";
// import { useWindowsWidth } from "../assets/js/useWindowsWidth";
import BooksForAllLinks from '../components/BooksForAllLinks.vue';
</script>

<template>
    <div class="wrapper">
        <div class="logo">
            <RouterLink to="/shop">
                <img src="../assets/images/booksforall.png" class="logo img" alt="BooksForAll logo" />
            </RouterLink>
        </div>
        <div>
            <BooksForAllLinks msg="Books for all" />
        </div>
        
    </div>
</template>

<style scoped>
.wrapper {
    resize:both;
    position: relative;
    /* height:90vh;
    width: 90vh; */
    display: grid;
    grid-template-rows: 20% 80%;
    grid-template-columns: 100%;
    align-items: center;
    height:fit-content;
    border:5px solid rgb(94, 26, 1);
    border-radius: 2em;
}

.logo {
    width:inherit;
    background-color: rgb(236,69,6);
    z-index: 1;
    border-radius: 2em;
    box-shadow: 2px 2px 4px rgb(94, 26, 1);
    padding: 1.5em;
}

.logo.img {
    height: 6em;
    background-color: rgb(255, 255, 255);
    will-change: filter;
}

.logo.img:hover {
    filter: drop-shadow(0 0 1em#ffffff);
    box-shadow: 1px 1px 2px rgb(255, 255, 255);
}
</style>