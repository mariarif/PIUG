<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, reactive, computed } from "vue";
import SearchedBookItem from "./SearchedBookItem.vue";
const props = defineProps({
  role: String,
});
const state = reactive({
  searchIdea: "",
});

// async function getIdeas(role)
// {
//   const responseIdeas=ref(Array);
//   if(role==="ADMIN"){
//      responseIdeas = await fetch(`/api/ideas`);
//   }else{
//      responseIdeas = await fetch(`/api/ideas/public`);
//   }
//   const ideas = await responseIdeas.json();
//   return  ideas;
// }

//computed
async function getIdeas(role) {
  if (role === "ADMIN") {
    const responseIdeas = await fetch(`/api/ideas`);
    return responseIdeas.json();
  } else {
    const responseIdeas = await fetch(`/api/ideas/searchPublic`);
    return responseIdeas.json();
  }
  console.log("User role: " + role);
}

const ideas = await getIdeas(props.role);
const reactiveIdeas = ref(ideas);

// const responseIdeas = await fetch(`/api/ideas`);
// const ideas = await responseIdeas.json();
// const reactiveIdeas = ref(ideas);

const resultIdeas = computed(() => {
  return reactiveIdeas.value.filter(
    (idea) =>
      idea.title.toLowerCase().includes(state.searchIdea.toLowerCase()) ||
      idea.description.toLowerCase().includes(state.searchIdea.toLowerCase())
  );
});
</script>
<template>
  <div class="searchIdeaDropdown">
    <input
      type="search"
      class="searchIdea"
      placeholder="search an idea"
      aria-label="Search"
      v-model="state.searchIdea"
    />
    <div
      v-if="state.searchIdea.length >= 2"
      class="searchIdeaDropdown-content"
      style="position: absolute; overflow-y: scroll; height: auto"
    >
      <span
        v-if="resultIdeas && resultIdeas.length !== 0"
        style="padding-left: 2%"
        >{{ resultIdeas.length }} search results</span
      >
      <span v-else style="padding-left: 2%"
        >No results for "{{ state.searchIdea }}"</span
      >
      <div
        style="height: 100%; width: 100%; display: inline-block"
        v-for="idea of resultIdeas"
        :key="idea.id"
      >
        <SearchedBookItem :idea="idea" :searchIdea="state.searchIdea">
        </SearchedBookItem>
      </div>
    </div>
  </div>
</template>
<style scoped>
.searchIdea {
  width: 100%;
  border: solid black 2px;
}

input:placeholder-shown {
  font-style: italic;
}

.searchIdeaDropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

.searchIdeaDropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  left: 0;
  z-index: 1;
  width: inherit;
  align-items: stretch;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border: solid black 2px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 700px;
}
.searchIdeaDropdown-content::-webkit-scrollbar {
  width: 8px;
}

.searchIdeaDropdown-content::-webkit-scrollbar-track {
  background: white;
  border: 1px solid black;
}

.searchIdeaDropdown-content::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 20px;
  border: 1px solid black;
}
.searchIdeaDropdown:hover .searchIdeaDropdown-content {
  display: grid;
}
</style>
