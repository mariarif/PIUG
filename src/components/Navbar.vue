<script setup>
import { RouterLink } from 'vue-router';
import { ref, reactive, computed, watch } from 'vue';
import { useRouter } from "vue-router";
import { getAllBooks } from '../assets/js/getAllBooks';
import SearchedBookItem from './SearchedBookItem.vue';
var loc = computed(() => window.location.href);

// function setActiveTab() {
//     // var loc = computed(window.location.href);
//     console.log(window.location.href);
//     $(".navbar .navbar-nav > li > RouterLink").each(function () {
//         if (loc.match('/home') || loc.match('/') || loc.match('/about')) { // software is the name of the page/slug
//             $(this).addClass("active");
//             // return "active";
//         }
//         // else return "";
//     });
// };
// // string isActive=
// setActiveTab;
const router = useRouter();
router.afterEach((to, from) => {
  var btns = $("#navigation .navbar-nav .nav-link");
  console.log(window.location.href);
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",
      function () {
        var current = document
          .getElementsByClassName("router-link-active");

        current[0].className = current[0]
          .className.replace(" router-link-active", "");
        current[0].className = current[0]
          .className.replace(" router-link-exact-active", "");
        this.className += " router-link-active router-link-exact-active";
      });
  };
});

const state = reactive({
  searchBook: "",
});

const books = getAllBooks();
const reactiveBooks = ref(books);
const resultBooks = computed(() => {
  return reactiveBooks.value.filter(
    (book) =>
      book.title.toLowerCase().includes(state.searchBook.toLowerCase()) ||
      // book.description.toLowerCase().includes(state.searchBook.toLowerCase()) ||
      book.author.toLowerCase().includes(state.searchBook.toLowerCase()) ||
      book.series.name.toLowerCase().includes(state.searchBook.toLowerCase())
  );
});
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-texture position-fixed" id="navbarFix" style="z-index:20;">
    <a class="navbar-brand logo">
      <RouterLink to="/">
        <img src="../assets/images/booksforall-white-smooth.png" class="logo img" alt="BooksForAll logo" />
      </RouterLink>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <!-- <a> -->
          <RouterLink class="nav-link " to="/">Home</RouterLink>
          <!-- </a> -->
        </li>
        <li class="nav-item">
          <!-- <a> -->
          <RouterLink class="nav-link" to="/about">About us</RouterLink>
          <!-- </a> -->
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/browse/bestRating">Browse all
          </RouterLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Browse by category
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/browse/CF">Contemporary Fiction</a>
            <a class="dropdown-item" href="/browse/C">Classics</a>
            <a class="dropdown-item" href="/browse/HF">Historical Fiction</a>
            <a class="dropdown-item" href="/browse/SFFH">Science Fiction, Fantasy & Horror</a>
            <a class="dropdown-item" href="/browse/GNM">Graphic Novels & Manga</a>
            <a class="dropdown-item" href="/browse/R">Romance</a>
            <a class="dropdown-item" href="/browse/TYA">Teen & Young Adult</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/browse/B">Biography</a>
            <a class="dropdown-item" href="/browse/PD">Personal development</a>
            <a class="dropdown-item" href="/browse/H">Health</a>
            <a class="dropdown-item" href="/browse/S">Spirituality</a>
            <a class="dropdown-item" href="/browse/FD">Food & Drinks</a>
            <a class="dropdown-item" href="/browse/E">Entertainment</a>
          </div>
        </li>
        <!-- <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li> -->
        <li class="nav-item">
          <!-- <form class="form-inline my-2 my-lg-0"> -->
          <div class="searchBookDropdown" style=" width: 100%">
            <input class="form-control mr-sm-2" type="search" placeholder="Search for book.." aria-label="Search"
              v-model="state.searchBook">
            <!-- <button class="btn my-2 my-sm-0" type="submit">Search</button> -->

            <div v-if="state.searchBook.length >= 2" class="searchBookDropdown-content"
              style="position: absolute; overflow-y: scroll; height: auto">
              <span v-if="resultBooks && resultBooks.length !== 0" style="padding-left: 2%">{{ resultBooks.length }}
                search results</span>
              <span v-else style="padding-left: 2%">No results for "{{ state.searchBook }}"</span>
              <div style="height: 100%; width: 100%; display: inline-block" v-for="book of resultBooks" :key="book.id">
                <SearchedBookItem :book="book" :searchBook="state.searchBook">
                </SearchedBookItem>
              </div>
            </div>
          </div>
          <!-- </form> -->
        </li>
      </ul>

    </div>
  </nav>
</template>

<style scoped>
.searchBook {
  width: 100%;
  border: solid black 2px;
}

input:placeholder-shown {
  font-style: italic;
  min-width: 150px;
  /* max-width:400px; */
  display: flex;
}

.searchBookDropdown {
  position: relative;
  display: inline-block;
  width: inherit;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-style: normal;
  color: rgb(117, 37, 7);
}

.searchBookDropdown-content {
  display: none;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  right: 0;
  z-index: 1;
  width: inherit;
  align-items: stretch;
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.5), 0 2px 4px 1px rgba(0, 0, 0, 0.06);
  border: solid transparent 0px;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 700px;
  font-size: 12px;
}

.searchBookDropdown-content::-webkit-scrollbar {
  width: 8px;
}

.searchBookDropdown-content::-webkit-scrollbar-track {
  background-color: rgba(251, 192, 153, 0.2);
  border: 1px solid rgb(255, 255, 255);
}

.searchBookDropdown-content::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  border: 1px solid rgb(255, 255, 255);
}

.searchBookDropdown:hover .searchBookDropdown-content {
  display: grid;
}

/* @media (min-width: 992px) {
  input{min-width:200px;}
}*/

@media (min-width: 991.98px) {
  .searchBookDropdown-content {
    width: max-content;
    /* align-content: ; */
    width: 500px;
    left: unset;
    right: 0;
  }
}

@media (min-width: 1380px) {
  input {
    min-width: 500px;
  }

  .searchBookDropdown-content {
    width: max-content;
    width: 500px;
    /* align-content: ; */
    /* width:500px;
    right:unset;
    lef:0; */
  }
}

.active {
  color: green;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.navbar {
  --bs-navbar-padding-x: 0;
  --bs-navbar-padding-y: 0.5rem;
  --bs-navbar-color: rgba(0, 0, 0, 0.55);
  --bs-navbar-hover-color: white;
  --bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);
  --bs-navbar-active-color: rgba(0, 0, 0, 0.9);
  --bs-navbar-brand-padding-y: 0.3125rem;
  --bs-navbar-brand-margin-end: 1rem;
  --bs-navbar-brand-font-size: 1.25rem;
  --bs-navbar-brand-color: rgba(0, 0, 0, 0.9);
  --bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);
  --bs-navbar-nav-link-padding-x: 0.5rem;
  --bs-navbar-toggler-padding-y: 0.25rem;
  --bs-navbar-toggler-padding-x: 0.75rem;
  --bs-navbar-toggler-font-size: 1.25rem;
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23344767' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.8);
  --bs-navbar-toggler-border-radius: 0.375rem;
  --bs-navbar-toggler-focus-width: 0.25rem;
  --bs-navbar-toggler-transition: box-shadow 0.15s;

  --bs-btn-color: white;
  --bs-btn-bg: transparent;
  --bs-btn-font-size: 18px;
  --bs-btn-font-weight: 700;
  --bs-btn-border-color: white;


  color: white;
  font-weight: 600;
  font-family: 'Coustard', serif;
  font-style: normal;
  font-size: 18px;
  /* color: rgb(117, 37, 7); */
  position: absolute;
  width: 96%;
  /* display: flex; */
  padding: 0.5% 2%;
  border-radius: 8px;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.9), 1px 2px 4px 1px rgba(255, 255, 255, 0.06);

  background-color: rgb(107, 46, 24);
  /* display: flexbox; */
  /* z-index: 1; */
  /* padding-bottom: 10px; */
}
@media (max-width: 991.98px) {

  .navbar-expand-md>.container,
  .navbar-expand-md>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 992px) {
  .navbar-expand-md {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .navbar-expand-md .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-md .navbar-nav .dropdown-menu-right {
    right: 0;
    left: auto;
  }

  .navbar-expand-md .navbar-nav .nav-link {
    /* padding-right: 0.5rem;
    padding-left: 0.5rem; */
  }

  .navbar-expand-md>.container,
  .navbar-expand-md>.container-fluid {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }

  .navbar-expand-md .navbar-collapse {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }

  .navbar-expand-md .navbar-toggler {
    display: none;
  }

  .navbar-expand-md .dropup .dropdown-menu {
    top: auto;
    bottom: 100%;
  }
}

/* @media (max-width: 991.98px) {
  .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu-right {
    right: 0;
    left: auto;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
  .navbar-expand-lg .navbar-collapse {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .navbar-expand-lg .dropup .dropdown-menu {
    top: auto;
    bottom: 100%;
  }
}
 */

.navbar-toggler {
  background-color: rgb(243, 108, 36);
}


#navbarDropdown:focus {
  box-shadow: none;
  background-color: transparent;
}
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
  color: rgb(243, 108, 36);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(255, 255, 255);}
.nav-link:focus {
  color: rgb(243, 108, 36);
  background-color: rgb(255, 245, 239);
  text-shadow: 1px 1px 2px #000000;
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.5), 1px 2px 4px 1px rgba(255, 255, 255, 0.06);
}

.nav-link:focus:hover {
  box-shadow: 0 4px 6px 1px rgba(255, 255, 255, 0.7), 1px 2px 4px 1px rgba(255, 255, 255, 0.06);
}

.nav-link:hover {
  color: rgb(243, 108, 36);
  text-shadow: 1px 1px 2px #000000;
  /* background-color: rgb(255, 245, 239); */
}

.nav-link {
  color: rgba(255, 255, 255);
  font-size: large;
  font-weight: 600;
  font-family: 'Coustard', serif;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  text-shadow: 1px 1px 4px #000000;
}

.router-link-exact-active  {
  font-weight: 700;
  color: rgb(243, 108, 36);
  border-radius: 4px;

}

.router-link-exact-active:hover {
  color: rgb(166, 30, 30);
}

/* 
.active {
    font-weight:100;
    color: aquamarine;
} */

.navbar-brand.logo {
  padding: 0px;
  padding-right: 2%;
}

.form {
  align-items: stretch;
  /* justify-content: space-between; */
  /* width: 70%; */
  display: inline-flex;
}

.form-control {
  width: 100%;
  color: rgb(255, 255, 255);
  border: rgb(255, 255, 255, 0.2) solid 8px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255, 0.2);
  transition: border-color 0.25s;
  transition: background-color 0.25s;
}

.form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(255, 255, 255, 0.7);

}

.form-control:focus {
  border-color: rgb(243, 108, 36);
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.5), 1px 2px 4px 1px rgba(255, 255, 255, 0.06);
}

.btn.my-2.my-sm-0 {
  margin-left: 5px;
  color: rgba(255, 255, 255);
  text-shadow: 1px 1px 4px #000000;
  font-size: large;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  background-color: rgb(243, 108, 36);
}



.collapse.navbar-collapse ul {
  display: flex;
  align-items: stretch;
  /* Default */
  justify-content: space-between;
  width: 100%;
  /* background: #cacaca; */
  margin: 0;
  padding: 0;
  color: rgb(117, 37, 7);
}

.collapse.navbar-collapse li {
  display: block;
  flex: 0 1 auto;
  list-style-type: none;
}



.form-inline {
  display: flex;
  position: relative;
  align-self: left;
}
</style>