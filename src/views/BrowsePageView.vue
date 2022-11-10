<script setup>
import { onMounted } from 'vue';
import CenteredBlogCard from '../components/CenteredBlogCard.vue';
import { getAllBooks as getAllBooks } from './browse/getAllBooks.js';
var props = defineProps({
    type: String,
})
var allBooks = new Array();
allBooks = getAllBooks();
</script>
<template>
    <div class="ShopPage">
        <!-- <script src="../components/BooksRepo.books.js"></script> -->
        <div class="col-lg-3 mt-lg-4 mt-6" v-for="book in allBooks">
            <CenteredBlogCard :image="book.imgUrl" :title="book.title" :description="book.author" />
        </div>
    </div>
</template>
<style scoped>

.col-lg-3{
    display: inline-block;
    /* po */
}
</style>
