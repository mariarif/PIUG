<script setup>
import { onMounted } from 'vue';
import CenteredBlogCard from '../components/CenteredBlogCard.vue';
import { getAllBooks as getAllBooks } from '../assets/js/getAllBooks.js';
import { getBooksByCategory as getBooksByCategory } from "../assets/js/getBooksByCategory.js";
import { getCategoryName as getCategoryName } from "../assets/js/getCategoryName.js";
import {useRoute} from 'vue-router';

const route=useRoute();
let type=route.params.type;
console.log(type);


let categoryName=getCategoryName(type);
let allBooks = getBooksByCategory(type);
console.log(allBooks);
</script>
<template>
    <div class="ShopPage">
        <div class="row">
            <h1 class="text-orange">~ {{categoryName}} ~</h1>
        </div>
        <!-- <script src="../components/BooksRepo.books.js"></script> -->
        <div class="col-lg-3 mt-lg-4 mt-6" v-for="book in allBooks">
            <CenteredBlogCard :bookId="book.bookId" :image="book.imgUrl" :title="book.title" :description="book.author"/>
        </div>
    </div>
</template>
<style scoped>

.col-lg-3{
    display: inline-block;
    /* po */
}
</style>
