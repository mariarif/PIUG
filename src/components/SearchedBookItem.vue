<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
// import router from "../router/index.js";
import { useRouter } from "vue-router";
const props = defineProps({
  book: {
    bookId: Number,
    title: String,
    series: {
      name: String,
      no: Number,
    },
    author: String,
    goodreadsRating: Number,
    description: String,
    dateOfPosting: String,
    imgUrl: String,
  },
  searchBook: String,
});

const router = useRouter();
async function goToBookPageHandler(bookId) {
  console.log(`going to /book/${bookId}`);
  if (window.location.href.includes("book")) {
    await router.push({ name: "book", params: { id: bookId } });
    router.go(0);
  }
  await router.push({ name: "book", params: { id: bookId } });
  // router.push(`/book/${bookId}`);
}
</script>

<template>
  <div class="searchIdeaDropdown-content-item">
    <div class="top">
      <div class="authorImg"><img :src="props.book.imgUrl.substr(0,3)+props.book.imgUrl.substr(2,props.book.imgUrl.length)" style="width:40px;"/></div>
      <div class="titleAndInfo">
        <div class="title">
          <span @click="goToBookPageHandler(props.book.bookId)">{{
              props.book.title
          }}</span>
        </div>
        <div class="info">
          <div class="name" style=" display: inline-block;
              text-align: left;
              width: 100%;
              height: 100%;
            ">
            by {{ props.book.author }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.searchIdeaDropdown-content-item {
  display: grid;
  grid-template-rows: 50% 50%;
  padding: 0.25rem;
  background-color: transparent;
  border: transparent;
  /* height: 200px; */
  white-space: nowrap;
}


.searchIdeaDropdown-content-item:hover {
  background-color: rgba(251, 192, 153, 0.2);
  color:rgb(243, 108, 36);
}
.searchIdeaDropdown-content-item button {
  padding: 5px 10px;
  background-color: transparent;
  border-color: transparent;
  /* white-space: nowrap; */
}

.top {
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 2%;
  position: relative;
}

.authorImg {
  background-color: #4b4c4e;
  width: 40px;
  height: 40px;
  border: solid black 1px;
  /* background-image: url("../images/booksforall.png"); */
  background-position: center center;
  object-fit: contain;
  background-repeat: no-repeat;
}

.title {
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  white-space:normal;
}

.title:hover span {
  font-weight: 900;
  cursor: pointer;
}

.info {
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
}

.description {
  display: inline-block;
  position: relative;
  padding: 2%;
  text-align: left;
  object-fit: contain;
  white-space: normal;
  width: 100%;
}
</style>
