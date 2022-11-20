<script setup>
import { getAllBooks } from '../assets/js/getAllBooks';
import MaterialButton from '../components/MaterialButton.vue';
import { getCategories } from '../assets/js/getCategories.js';
import { getCategoryName } from '../assets/js/getCategoryName.js';
import router from '../router/index.js';

const bookId = window.location.href.slice(window.location.href.lastIndexOf("/") + 1, window.location.href.length);
const allBooks = getAllBooks();
const thisBook = allBooks.filter(s => s.bookId == bookId).at(0);
const thisBookCategories = getCategories().filter(c => thisBook.genre.indexOf(c.categoryId) > -1);// thisBook.genre.map(g => getCategoryName(g));
function buttonClicked() {
    // $gtag.event('latest-click', {
    //     'event_category': 'book',
    //     'event_label': 'Buy-on-BookDepository',
    //     'value': 1
    // });
    window.location.replace(thisBook.bookdepositoryLink);
}

// var bookImgBtn;
// var parentBookImgBtn;
// var footer;
// var sticky;
//
// $(document).ready(function () {
//   // Get the TOC
//   bookImgBtn = document.getElementById("bookImgBtn");
//   parentBookImgBtn=document.getElementById("parentBookImgBtn");
//   footer=document.getElementById("footer");
//   // Get the offset position of the TOC
//   sticky = footer.offsetTop;
// });

// window.onscroll = function () { myFunction() };
// function myFunction() {
//     var ofb1=bookImgBtn.offsetTop+bookImgBtn.offsetTop;
//     var ofb2=parentBookImgBtn.offsetTop+parentBookImgBtn.offsetTop;
//   if (ofb1 <=ofb2) {
//     console.log("bookImgBtn is fixed : its offsetbottom is", ofb1, " parent ofb is ",ofb2);
//     console.log("bookImgBtn.offsetTop", bookImgBtn.offsetTop);
//     console.log("bookImgBtn.offsetTop", bookImgBtn.offsetTop);
//     console.log("parentBookImgBtn.offsetTop", parentBookImgBtn.offsetTop);
//     console.log("parentBookImgBtn.offsetTop", parentBookImgBtn.offsetTop);
//     bookImgBtn.classList.add("position-fixed")
//   } else {
//     console.log("bookImgBtn is relative : its offsetbottom is", ofb1, " parent ofb is ",ofb2);
//     console.log("bookImgBtn.offsetTop", bookImgBtn.offsetTop);
//     console.log("bookImgBtn.offsetTop", bookImgBtn.offsetTop);
//     console.log("parentBookImgBtn.offsetTop", parentBookImgBtn.offsetTop);
//     console.log("parentBookImgBtn.offsetTop", parentBookImgBtn.offsetTop);
//     bookImgBtn.classList.remove("position-relative");
//   };
//   console.log("bookImgBtn.offsetTop is", bookImgBtn.offsetTop );
//   console.log("footer.offsetTop is", footer.offsetTop );
// } 
</script>
<template>

    <div class="bookPage">
        <div class="container">
            <div class="row">
                <div id="parentBookImgBtn"
                    class="col-md-4  position-relative br-3-dark-orange" style="min-width:300px; align-self: center; align-items: center;">
                    <div class="position-relative" id="bookImgBtn" >
                        <div class="position-relative pr-8 ">
                            <img class="max-width-50  position-relative b-radius-8 max-height-500"
                                :src='thisBook.imgUrl' alt="image" />
                        </div>
                        <MaterialButton variant="gradient" color="success"
                            class="mb-0 position-relative z-index-2 mt-4 bt-4" @click="buttonClicked">Buy on
                            BookDepository</MaterialButton>

                    </div>
                </div>
                <div class="col-md-8 m-auto ml-4  position-relative ml-4">
                    <p class="book-title text-orange" href="#">{{ thisBook.title }}</p>
                    <p class="book-author text-dark-orange" href="#">by {{ thisBook.author }}</p>
                    <p class="book-series" v-if="thisBook.series.name !== ''">{{ thisBook.series.name }}
                        #{{ thisBook.series.no }}</p>
                    <div class="description m-auto">
                        <p class="text-orange pl-4" href="javascript:;">Description</p>
                        <div class="book-description "
                            style="margin-left:.25rem; margin-right:.25rem; max-height: 300px; overflow-y: scroll;">
                            <p class="desc" style="text-align:left;">
                                {{ thisBook.description }}
                            </p>
                        </div>
                    </div>
                    <div class="description m-auto mt-4">
                        <p class="text-orange pl-4" href="javascript:;">Categories</p>
                        <div class="row book-categories mt-0 pt-0">
                            <a v-for="category in thisBookCategories" class="category dropdown-item"
                                :href='"/browse/" + category.categoryId'>
                                <!-- <MaterialButton variant="gradient" color="success"
                                    class="mb-0 position-relative z-index-2 mt-0" @click="buttonClicked">
                                    {{ category }}</MaterialButton> -->
                                {{ category.name }}
                            </a>
                        </div>
                    </div>
                    <div class="description m-auto">
                        <p class="text-orange pl-4" href="javascript:;">Goodreads Rating:
                        <p class="rating">
                            {{ thisBook.goodreadsRating }} / 5
                        </p>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media(max-width: 975.5px){
    .col-md-4{
        width:100%;
    }
}
@media(min-width: 950px){
    .col-md-4{
        width:100%;
    }
}

@media(min-width: 971px){
    .col-md-4{
        width:33.3333%;
    }
}
.rating {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    display: inline;
    color: rgb(117, 37, 7);
    font-weight: 600;
    text-shadow: none;
}

.category {
    display: inline;
    padding: 0.5rem 1rem;
    border-right: rgb(117, 37, 7, 0.4) 2px solid;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-style: normal;
}

.dropdown-item:focus,
.dropdown-item:hover {
    background-color: transparent;
}

.book-categories {
    display: inline-block;
}

.book-categories .category:last-of-type {
    border-right: none;
}

.book-author {
    font-size: 20px;
}

.description {
    text-align: left;
    font-size: 20px;

}

.book-series {
    text-align: end;
    color: rgb(117, 37, 7);
    font-family: 'Coustard', serif;
    font-size: 20px;
}

.bookPage {
    font-family: 'Montserrat', sans-serif;
    background-color: rgb(251, 192, 153, 0.2);
    box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.5), 0 2px 4px 1px rgba(0, 0, 0, 0.06);
}

.book-title {
    font-size: 30px;
    padding-bottom: .25rem;
}
</style>