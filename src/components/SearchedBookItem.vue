<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import router from "../router/index.js";
// import { getDateOfPosting } from "../utils/getDateOfPosting";
const props = defineProps({
  book: {
    id: Number,
    title: String,
    series: {
      name: String,
      no: Number,
    },
    author: String,
    goodreadsRating: Number,
    description: String,
    dateOfPosting: String,
  },
  searchBook: String,
});

// const dateString = ref(getDateOfPosting(props.book.dateOfPosting));

async function goToIdeaPageHandler(ideaId) {
  // router.push({ name: "ideaPage", params: { id: ideaId } });
  // router.push(`/ideaPage/${ideaId}`);
  console.log(`going to /ideaPage/${ideaId}`);
}
</script>

<template>
  <div class="searchIdeaDropdown-content-item">
    <div class="top">
      <div class="authorImg"></div>
      <div class="titleAndInfo">
        <div class="title">
          <span @click="goToIdeaPageHandler(props.book.id)">{{
            props.book.title
          }}</span>
        </div>
        <div class="info">
          <div
            class="name"
            style=" display: inline-block;
              text-align: left;
              width: 100%;
              height: 100%;
            "
          >
            {{ props.book.author }}
          </div>
          <div
            class="date"
            style="
              display: inline-block;
              text-align: right;
              width: 100%;
              height: 100%;
            "
          >
          {{ props.book.dateOfPosting }}
          </div>
        </div>
      </div>
    </div>

    <div class="description">
      <p>{{ props.book.description.substr(0, 70) }}</p>
    </div>
  </div>
</template>
<style scoped>
.searchIdeaDropdown-content-item {
  display: grid;
  grid-template-rows: 50% 50%;
  padding: 2%;
  background-color: transparent;
  border: transparent;
  /* height: 200px; */
  white-space: nowrap;
}

.searchIdeaDropdown-content-item button {
  padding: 5px 10px;
  background-color: transparent;
  border-color: transparent;
  white-space: nowrap;
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
  background-image: url("../images/booksforall.png");
  background-position: center center;
  object-fit: contain;
  background-repeat: no-repeat;
}

.title {
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
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
