<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  
  <div class="Start">
    <!-- <div><img src="../assets/images/stackofbooks.jpg" class="Card" />
    </div> -->
    <div>
      <p>
        Check out our
        <button class="Facebook"> <a href=https://www.facebook.com/BooksForAllInitiative/
            target="_blank">Facebook</a></button> page and follow us on
        <button class="Instagram"><a href="https://www.instagram.com/booksforallindia/"
            target="_blank">Instagram</a></button> to see the latest books available.
      </p>
    </div>

    <RouterLink to="/shop"><button>Click here to start browsing!</button></RouterLink>


  </div>
</template>

<style scoped>
.Start {
  position: relative;
  height: 100%;
  align-self: center;
  display: grid;
  grid-template-rows: 50% 30% 20%;
  /* grid-template-columns: 100%; */
  align-items: center;
  /* background-color: rgb(77, 63, 58);; */
}

.Card {
  z-index: 0;
  display: inline-block;
  position:relative;
  width:100%;
  border: 10% transparent solid;
  /* background-color: bisque; */
  /* background-image: url('../assets/images/stackofbooks.jpg'); */
  background-repeat: no-repeat;
  background-position: contain;
  /* background-attachment: fixed; */
  background-position: center;

}

.read-the-docs {
  color: #888;
}
a{
color:white;
text-decoration: none;
}
.Facebook {
  background-color: #3b5998;
  /* border-radius: 5px; */
  border-width: 0px;
  padding: 8px;
  text-shadow: 1px 1px 2px #000000;
  box-shadow: 2px 2px 4px #3b5998;
}

.Instagram {
  background-image: linear-gradient(to right, #8a3ab9, #bc2a8d, #fccc63);
  background-repeat: no-repeat;
  border-width: 0px;
  background-position: center;
  padding: 8px;
  text-shadow: 1px 1px 2px #000000;
  box-shadow: 2px 2px 4px #8a3ab9;
}

.Instagram:hover {
  padding: 4px;
  border-width: 4px;
  box-shadow: 2px 2px 4px #ffffff;
}

/* button{
  color:rgb(195, 84, 24);
  background-color:rgb(251, 217, 189);
  box-shadow: 2px 2px 4px rgb(251, 192, 153);
  text-shadow: 1px 1px 2px #000000;
} */
.Facebook:hover {
  padding: 4px;
  border-width: 4px;
  box-shadow: 2px 2px 4px #ffffff;

}
</style>
