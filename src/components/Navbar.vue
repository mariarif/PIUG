<script setup>
import { RouterLink } from 'vue-router';
import { computed, watch } from 'vue';

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
watch(loc, (newLoc) => {
    var btns = $("#navigation .navbar-nav .nav-link");
    console.log(window.location.href);
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",
            function () {
                var current = document
                    .getElementsByClassName("active");

                current[0].className = current[0]
                    .className.replace(" active", "");

                this.className += " active";
            });
    };
});
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-texture" style="z-index:20;">
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
                    <RouterLink class="nav-link" to="/browse/bestellers">Browse all
                    </RouterLink>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Browse by category
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/browse/cf">Contemporary Fiction</a>
                        <a class="dropdown-item" href="/browse/hf">Historical Fiction</a>
                        <a class="dropdown-item" href="/browse/sffh">Science Fiction, Fantasy & Horror</a>
                        <a class="dropdown-item" href="/browse/gnm">Graphic Novels & Manga</a>
                        <a class="dropdown-item" href="/browse/r">Romance</a>
                        <a class="dropdown-item" href="/browse/tya">Teen & Young Adult</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/browse/n">Nonfiction</a>
                        <a class="dropdown-item" href="/browse/b">Biography</a>
                        <a class="dropdown-item" href="/browse/pd">Personal developement</a>
                        <a class="dropdown-item" href="/browse/h">Health</a>
                        <a class="dropdown-item" href="/browse/s">Spirituality</a>
                        <a class="dropdown-item" href="/browse/fd">Food & Drinks</a>
                        <a class="dropdown-item" href="/browse/e">Entertainment</a>
                    </div>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li> -->
                <li class="nav-item">
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search for book.." aria-label="Search">
                        <button class="btn my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </li>
            </ul>

        </div>
    </nav>
</template>

<style scoped>
@media (max-width: 991.98px) {
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media ( min-width: 992px) {
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
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid {
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
    background-color: #ec4306;
}

.dropdown-item {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-style: normal;
}

#navbarDropdown:focus {
    box-shadow: none;
    background-color: transparent;
}

.navbar-light .navbar-nav .nav-link:focus {
    color: #ec4306;
    background-color: rgb(255, 245, 239);
    text-shadow: 2px 2px 8px #000000;
    box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.5), 1px 2px 4px 1px rgba(255, 255, 255, 0.06);
}

.navbar-light .navbar-nav .nav-link:focus:hover {
    box-shadow: 0 4px 6px 1px rgba(255, 255, 255, 0.7), 1px 2px 4px 1px rgba(255, 255, 255, 0.06);
}

.navbar-light .navbar-nav .nav-link:hover {
    color: #ec4306;
    text-shadow: 2px 2px 8px #000000;
    /* background-color: rgb(255, 245, 239); */
}

.navbar-light .navbar-nav .nav-link {
    color: rgba(255, 255, 255);
    font-size: large;
    font-weight: 600;
    font-family: 'Coustard', serif;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 4px;
    text-shadow: 1px 1px 4px #000000;
}

/* .router-link-exact-active {
    font-weight: 700;
    color: rgb(11, 7, 117);
    border-radius: 4px;

} 

.router-link-exact-active:hover {
    color: rgb(166, 30, 30);
 } 

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
    color: rgb(117, 37, 7);
    border: rgb(255, 255, 255,0.2) solid 8px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255,0.2);
    transition: border-color 0.25s;
    transition: background-color 0.25s;
}
.form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
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
    background-color: #ec4506;
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
    --bs-navbar-toggler-icon-bg: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e);
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
    padding: 1% 5%;
    border-radius: 8px;
    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.9), 1px 2px 4px 1px rgba(255, 255, 255, 0.06);

    background-color: rgb(107, 46, 24);
    /* display: flexbox; */
    /* z-index: 1; */
    /* padding-bottom: 10px; */
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

.logo.img {
    height: 2em;
    will-change: filter;
}

.logo.img:hover {
    filter: drop-shadow(0 0 1em#ffffff);
    /* box-shadow: 1px 1px 2px rgb(255, 255, 255); */
}

.form-inline {
    display: flex;
    position: relative;
    align-self: left;
}
</style>