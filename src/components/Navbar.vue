<script setup>
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand">
            <RouterLink to="/">
                <img src="../assets/images/booksforall.png" class="logo img" alt="BooksForAll logo" />
            </RouterLink>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <RouterLink class="nav-link" to="/">Home </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/" style="white-space: nowrap">About us </RouterLink>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Shop by category
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Fiction</a>
                        <a class="dropdown-item" href="#">Science Fiction, Fantasy & Horror</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Nonfiction</a>
                        <a class="dropdown-item" href="#">Biography</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: absolute;
    width: 95%;
    /* display: flex; */
    padding: 1% 5%;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgb(193, 147, 116);
    background-color: rgb(255, 255, 255);
    z-index: 1;
}

.collapse.navbar-collapse {
    z-index: 5;
    /* column-gap: 0 50%; */
}

li,
form {
    padding: 0 5%;
}

.logo.img {
    height: 2em;
    will-change: filter;
}

.logo.img:hover {
    filter: drop-shadow(0 0 1em#ffffff);
    box-shadow: 1px 1px 2px rgb(255, 255, 255);
}

.form-inline {
    display: flex;
    position: relative;
    align-self: left;
}
</style>