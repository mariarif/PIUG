<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../assets/js/useWindowsWidth.js";
// import { nav } from "bootstrap";
// images
import ArrDark from "../assets/images/down-arrow-dark.svg";
import downArrow from "@/assets/images/down-arrow.svg";
import DownArrWhite from "@/assets/images/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "/",
      color: "bg-gradient-success",
      label: "Free Download"
    })
  },
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <!-- <nav class="navbar navbar-expand-lg top-0" :class="{
    'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
      props.transparent,
    'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
      props.sticky,
    'navbar-light bg-white py-3': props.light,
    ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
  }"> -->
  <nav class="navbar navbar-expand-lg top-0">
    <div :class="
      props.transparent || props.light || props.dark
        ? 'container'
        : 'container-fluid px-0'
    ">
      <RouterLink class="navbar-brand d-none d-md-block" :class="[
        (props.transparent && textDark.value) || !props.transparent
          ? 'text-dark font-weight-bolder ms-sm-3'
          : 'text-white font-weight-bolder ms-sm-3'
      ]" :to="{ name: 'start' }" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom">
        Books For All
      </RouterLink>
      <!-- <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        data-placement="bottom"
      >
        Material Design
      </RouterLink> -->
      <!-- <a
        href="https://www.creative-tim.com/product/vue-material-kit-pro"
        class="btn btn-sm bg-gradient-success mb-0 ms-auto d-lg-none d-block"
        >Buy Now</a
      > -->
      <!-- <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button> -->
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i>
              Pages
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages">
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                        Landing Pages
                      </div>
                      <RouterLink :to="{ name: 'start' }" class="dropdown-item border-radius-md">
                        <span>About Us</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'start' }" class="dropdown-item border-radius-md">
                        <span>Contact Us</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'start' }" class="dropdown-item border-radius-md">
                        <span>Author</span>
                      </RouterLink>
                      <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3">
                        Account
                      </div>
                      <RouterLink :to="{ name: 'start' }" class="dropdown-item border-radius-md">
                        <span>Sign In</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0">
                  Landing Pages
                </div>
                <RouterLink :to="{ name: 'start' }" class="dropdown-item border-radius-md">
                  <span>About Us</span>
                </RouterLink>
                <RouterLink :to="{ name: 'start' }" class="dropdown-item border-radius-md">
                  <span>Contact Us</span>
                </RouterLink>
                <RouterLink :to="{ name: 'start' }" class="dropdown-item border-radius-md">
                  <span>Author</span>
                </RouterLink>
                <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3">
                  Account
                </div>
                <RouterLink :to="{ name: 'start' }" class="dropdown-item border-radius-md">
                  <span>Sign In</span>
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">view_day</i>
              Sections
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuBlocks">
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Page Sections
                            </h6>
                            <span class="text-sm">See all sections</span>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Page Headers
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Features
                      </RouterLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Navigation
                            </h6>
                            <span class="text-sm">See all navigations</span>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Navbars
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Nav Tabs
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Pagination
                      </RouterLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Input Areas
                            </h6>
                            <span class="text-sm">See all input areas</span>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Inputs
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Forms
                      </RouterLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Attention Catchers
                            </h6>
                            <span class="text-sm">See all examples</span>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Alerts
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Modals
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'ac-tooltips-popovers' }">
                        Tooltips & Popovers
                      </RouterLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Elements
                            </h6>
                            <span class="text-sm">See all elements</span>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Avatars
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Badges
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Breadcrumbs
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Buttons
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Button Groups
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Dropdowns
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Progress Bars
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Toggles
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                        Typography
                      </RouterLink>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12">
                  <div class="d-flex mb-2">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Page Sections
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Page Headers
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Features
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Navigation
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Navbars
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Nav Tabs
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Pagination
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Input Areas
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Inputs
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Forms
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Attention Catchers
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Alerts
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Modals
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Tooltips & Popovers
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Elements
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Avatars
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Badges
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Breadcrumbs
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Buttons
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Button Groups
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Dropdowns
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Progress Bars
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Toggles
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'start' }">
                    Typography
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">article</i>
              Docs
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
              aria-labelledby="dropdownMenuDocs">
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/overview/material-kit/">
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                        Getting Started
                      </h6>
                      <span class="text-sm">All about overview, quick start, license and
                        contents</span>
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/colors/material-kit/">
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                        Foundation
                      </h6>
                      <span class="text-sm">See our colors, icons and typography</span>
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/alerts/material-kit/">
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                        Components
                      </h6>
                      <span class="text-sm">Explore our collection of fully designed
                        components</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                      Getting Started
                    </h6>
                    <span class="text-sm">All about overview, quick start, license and
                      contents</span>
                  </a>
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                      Foundation
                    </h6>
                    <span class="text-sm">See our colors, icons and typography</span>
                  </a>
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                      Components
                    </h6>
                    <span class="text-sm">Explore our collection of fully designed components</span>
                  </a>
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                      Plugins
                    </h6>
                    <span class="text-sm">Check how you can integrate our plugins</span>
                  </a>
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                      Utility Classes
                    </h6>
                    <span class="text-sm">For those who want flexibility, use our utility
                      classes</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a href="https://www.github.com/creativetimofficial/vue-material-kit"
              class="nav-link d-flex cursor-pointer align-items-center">
              <svg width="20px" height="20px" class="material-icons me-2 opacity-6" viewBox="0 0 24 24"
                aria-hidden="true" data-testid="GitHubIcon" :fill="props.transparent && '#fff'">
                <path
                  d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27">
                </path>
              </svg>
              Github
            </a>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a :href="action.route" class="btn btn-sm mb-0" :class="action.color"
              onclick="smoothToPricing('pricing-soft-ui')">{{ action.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>


<style scoped>
.navbar {
  --bs-navbar-padding-x: 1rem;
  --bs-navbar-padding-y: 0.5rem;
  --bs-navbar-color: #344767;
  --bs-navbar-hover-color: rgba(52, 71, 103, 0.7);
  --bs-navbar-disabled-color: rgba(52, 71, 103, 0.3);
  --bs-navbar-active-color: rgba(52, 71, 103, 0.9);
  --bs-navbar-brand-padding-y: 0.40625rem;
  --bs-navbar-brand-margin-end: 1rem;
  --bs-navbar-brand-font-size: 1.125rem;
  --bs-navbar-brand-color: rgba(52, 71, 103, 0.9);
  --bs-navbar-brand-hover-color: rgba(52, 71, 103, 0.9);
  --bs-navbar-nav-link-padding-x: 0.5rem;
  --bs-navbar-toggler-padding-y: 0.25rem;
  --bs-navbar-toggler-padding-x: 0.75rem;
  --bs-navbar-toggler-font-size: 1.125rem;
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23344767' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  --bs-navbar-toggler-border-color: rgba(52, 71, 103, 0.1);
  --bs-navbar-toggler-border-radius: 0.5rem;
  --bs-navbar-toggler-focus-width: 0.2rem;
  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
}

.navbar>.container,
.navbar>.container-fluid,
.navbar>.container-sm,
.navbar>.container-md,
.navbar>.container-lg,
.navbar>.container-xl,
.navbar>.container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  padding-top: var(--bs-navbar-brand-padding-y);
  padding-bottom: var(--bs-navbar-brand-padding-y);
  margin-right: var(--bs-navbar-brand-margin-end);
  font-size: var(--bs-navbar-brand-font-size);
  color: var(--bs-navbar-brand-color);
  white-space: nowrap;
}

.navbar-brand:hover,
.navbar-brand:focus {
  color: var(--bs-navbar-brand-hover-color);
}

.navbar-nav {
  --bs-nav-link-padding-x: 0;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-color: var(--bs-navbar-color);
  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .show>.nav-link,
.navbar-nav .nav-link.active {
  color: var(--bs-navbar-active-color);
}

.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--bs-navbar-color);
}

.navbar-text a,
.navbar-text a:hover,
.navbar-text a:focus {
  color: var(--bs-navbar-active-color);
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: var(--bs-navbar-color);
  background-color: transparent;
  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}

@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}

.navbar-toggler:hover {
  text-decoration: none;
}

.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: var(--bs-navbar-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }

  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }

  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-sm .navbar-toggler {
    display: none;
  }

  .navbar-expand-sm .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }

  .navbar-expand-sm .offcanvas .offcanvas-header {
    display: none;
  }

  .navbar-expand-sm .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}

@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }

  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }

  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-md .navbar-toggler {
    display: none;
  }

  .navbar-expand-md .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }

  .navbar-expand-md .offcanvas .offcanvas-header {
    display: none;
  }

  .navbar-expand-md .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }

  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }

  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-lg .navbar-toggler {
    display: none;
  }

  .navbar-expand-lg .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }

  .navbar-expand-lg .offcanvas .offcanvas-header {
    display: none;
  }

  .navbar-expand-lg .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}

@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }

  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }

  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-xl .navbar-toggler {
    display: none;
  }

  .navbar-expand-xl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }

  .navbar-expand-xl .offcanvas .offcanvas-header {
    display: none;
  }

  .navbar-expand-xl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}

@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }

  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }

  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }

  .navbar-expand-xxl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }

  .navbar-expand-xxl .offcanvas .offcanvas-header {
    display: none;
  }

  .navbar-expand-xxl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}

.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.navbar-expand .navbar-nav {
  flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}

.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}

.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}

.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-expand .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}

.navbar-expand .offcanvas .offcanvas-header {
  display: none;
}

.navbar-expand .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}
</style>
