<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    color: String,
    route: String,
    label: String,
    default: () => ({
      color: "bg-gradient-success",
      label: "Find Out More",
    }),
  },
});
</script>
<template>
  <div class="card">
    <div class="card-header p-0 position-relative mt-n4 ml-3 mr-3 mt-3 z-index-2">
      <a :href="action.route" class="d-block blur-shadow-image">
        <img :src="image" style="max-height:400px ;" :alt="title" class="img-fluid border-radius-lg" />
      </a>
    </div>
    <button type="button" class="btn btn-sm ml-3 mr-3" :class="action.color">
      {{ action.label }}
    </button>
    <div class="card-body text-center ml-3 mr-3 mb-3">
      <!-- <h4 class="font-weight-normal"> -->
      <a class="book-title" href="javascript:;">{{ title }}</a>
      <!-- </h4> -->
      <p class="mb-0">
        {{ description }}
      </p>

    </div>
  </div>
</template>
<style scoped>
.btn.btn-sm {
  color: rgb(255, 255, 255);
  font-weight: 600;
  border-radius: 8px;
  margin: 5px 0; 
  color: rgba(255, 255, 255);
  
  text-shadow: 1px 1px 4px #000000;
  font-size: x-large;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  text-decoration: none;
  white-space: nowrap;
  /* border-radius: 4px; */
  background-color: #ec4506;
}

.btn.btn-sm:hover {
  border-color: rgb(117, 37, 7);
  color: white;
  /* padding: 5px 0; */
  box-shadow: 0 4px 6px 1px rgba(117, 37, 7, 0.9), 1px 2px 4px 1px rgba(255, 255, 255, 0.06);
}

.ml-3 {
  margin-left: 1rem !important;
}

.mr-3 {
  margin-right: 1rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.book-title {
  font-size: x-large;
  font-weight: 600;
  font-family: 'Coustard', serif;
  color: rgb(117, 37, 7);
  text-decoration: none;
  /* white-space:nowrap; */
  /* text-transform: ; */
}

.card {
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-border-width: 0;
  --bs-card-border-color: rgba(0, 0, 0, 0.125);
  --bs-card-border-radius: 0.75rem;
  --bs-card-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --bs-card-inner-border-radius: 0.75rem;
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: #fff;
  --bs-card-cap-color: ;
  --bs-card-height: 40rem;
  --bs-card-color: ;
  --bs-card-bg: #fff;
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
  margin-bottom: 1rem;
  font-size: larger;
  /* font-family: 'Clicker Script', cursive; */
}

.card>hr {
  margin-right: 0;
  margin-left: 0;
}

.card>.list-group {
  border-top: inherit;
  border-bottom: inherit;
}

.card>.list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: var(--bs-card-inner-border-radius);
  border-top-right-radius: var(--bs-card-inner-border-radius);
}

.card>.list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: var(--bs-card-inner-border-radius);
  border-bottom-left-radius: var(--bs-card-inner-border-radius);
}

.card>.card-header+.list-group,
.card>.list-group+.card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
}

.card-title {
  margin-bottom: var(--bs-card-title-spacer-y);

  color: rgb(117, 37, 7);
}

.card-subtitle {
  margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link+.card-link {
  margin-left: var(--bs-card-spacer-x);
}

.card-header {
  /* padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x); */
  margin-bottom: 0;
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
}

.card-header:first-child {
  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
}

.card-footer {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);
}

.card-footer:last-child {
  border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);
}

.card-header-tabs {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
  border-bottom: 0;
}

.card-header-tabs .nav-link.active {
  background-color: var(--bs-card-bg);
  border-bottom-color: var(--bs-card-bg);
}

.card-header-pills {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--bs-card-img-overlay-padding);
  border-radius: var(--bs-card-inner-border-radius);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: var(--bs-card-inner-border-radius);
  border-top-right-radius: var(--bs-card-inner-border-radius);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: var(--bs-card-inner-border-radius);
  border-bottom-left-radius: var(--bs-card-inner-border-radius);
}

.card-group>.card {
  margin-bottom: var(--bs-card-group-margin);
}

@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }

  .card-group>.card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }

  .card-group>.card+.card {
    margin-left: 0;
    border-left: 0;
  }

  .card-group>.card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .card-group>.card:not(:last-child) .card-img-top,
  .card-group>.card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }

  .card-group>.card:not(:last-child) .card-img-bottom,
  .card-group>.card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }

  .card-group>.card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .card-group>.card:not(:first-child) .card-img-top,
  .card-group>.card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }

  .card-group>.card:not(:first-child) .card-img-bottom,
  .card-group>.card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.card>.card-header+.list-group,
.card>.list-group+.card-footer {
  border-top: 0;
}

.card-header {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  margin-bottom: 0;
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
}

.card-header:first-child {
  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
}

.card-header-tabs {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
  border-bottom: 0;
}

.card-header-tabs .nav-link.active {
  background-color: var(--bs-card-bg);
  border-bottom-color: var(--bs-card-bg);
}

.card-header-pills {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.border-radius-lg {
  border-radius: 0.5rem;
}

.card {
  background-color: rgb(251, 192, 153, 0.2);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.card .card-header {
  padding: 1.5rem;
  background-color: rgb(254, 254, 254);
  border-radius: inherit;
  box-shadow: 0 4px 6px -1px rgba(104, 82, 67, 0.3), 0 2px 4px -1px rgb(104, 82, 67, 0.02);
  transform: translate3d(0, 0, 0);
  transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
}

.card:hover .card-header {
  transform: translate3d(0, -20px, 0);
}

.card .card-body {
  padding: 1.5rem;
  background-color: #fbc099;
  background-image: linear-gradient(0deg, rgba(251, 192, 153, 1) 10%, rgba(251, 207, 178, 1) 25%, rgba(251, 222, 203, 1) 35%, rgba(251, 237, 228, 1) 55%, rgba(251, 252, 253, 1) 85%, rgba(251, 255, 255, 1) 100%);
  box-shadow: 2px 2px 4px rgb(193, 147, 116);
  border-radius: inherit;
  transform: translate3d(0, -20, 0);
  transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
}

.card:hover .card-body {
  transform: translate3d(0, 20px, 0);
}

.btn .card.card-plain {
  background-color: transparent;
  box-shadow: none;
}

.card .card-footer {
  padding: 1.5rem;
  background-color: transparent;
}

.author {
  display: flex;
}

.author .name>span {
  line-height: 1.571;
  font-weight: 600;
  font-size: 0.875rem;

}

.author .stats {
  font-size: 0.875rem;
  font-weight: 400;
}

.card.card-background {
  align-items: center;
}

.card.card-background .full-background {
  background-position: 50%;
  background-size: cover;
  margin-bottom: 30px;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 0.75rem;
}

.card.card-background .card-body {
  color: #fff;
  position: relative;
  z-index: 2;
}

.card.card-background .card-body .content-center,
.card.card-background .card-body .content-left {
  min-height: 330px;
  max-width: 450px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.card.card-background .card-body .content-center {
  text-align: center;
}

.card.card-background .card-body.body-left {
  width: 90%;
}

.card.card-background .card-body .author .name span,
.card.card-background .card-body .author .name .stats {
  color: #fff;
}

.card.card-background:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: block;
  content: "";
  background: rgba(0, 0, 0, 0.56);
  border-radius: 0.75rem;
}

.card.card-background.card-background-mask-primary:before {
  background: rgba(0, 0, 0, 0.2);
}

.card.card-background.card-background-mask-primary:after {
  background-image: linear-gradient(195deg, #EC407A 0%, #D81B60 100%);
  opacity: 0.85;
}

.card.card-background.card-background-mask-secondary:before {
  background: rgba(0, 0, 0, 0.2);
}

.card.card-background.card-background-mask-secondary:after {
  background-image: linear-gradient(195deg, #747b8a 0%, #495361 100%);
  opacity: 0.85;
}

.card.card-background.card-background-mask-success:before {
  background: rgba(0, 0, 0, 0.2);
}

.card.card-background.card-background-mask-success:after {
  background-image: linear-gradient(195deg, #66BB6A 0%, #43A047 100%);
  opacity: 0.85;
}

.card.card-background.card-background-mask-info:before {
  background: rgba(0, 0, 0, 0.2);
}

.card.card-background.card-background-mask-info:after {
  background-image: linear-gradient(195deg, #49a3f1 0%, #1A73E8 100%);
  opacity: 0.85;
}

.card.card-background.card-background-mask-warning:before {
  background: rgba(0, 0, 0, 0.2);
}

.card.card-background.card-background-mask-warning:after {
  background-image: linear-gradient(195deg, #FFA726 0%, #FB8C00 100%);
  opacity: 0.85;
}

.card.card-background.card-background-mask-danger:before {
  background: rgba(0, 0, 0, 0.2);
}

.card.card-background.card-background-mask-danger:after {
  background-image: linear-gradient(195deg, #EF5350 0%, #E53935 100%);
  opacity: 0.85;
}

.card.card-background.card-background-mask-light:before {
  background: rgba(0, 0, 0, 0.2);
}

.card.card-background.card-background-mask-light:after {
  background-image: linear-gradient(195deg, #EBEFF4 0%, #CED4DA 100%);
  opacity: 0.85;
}

.card.card-background.card-background-mask-dark:before {
  background: rgba(0, 0, 0, 0.2);
}

.card.card-background.card-background-mask-dark:after {
  background-image: linear-gradient(195deg, #42424a 0%, #191919 100%);
  opacity: 0.85;
}

.card.card-background .card-category {
  font-size: 0.875rem;
  font-weight: 600;
}

.card.card-background .card-description {
  margin-top: 24px;
  margin-bottom: 24px;
}

.rotating-card-container {
  -o-perspective: 800px;
  -ms-perspective: 800px;
  perspective: 800px;
}

.rotating-card-container .card-rotate {
  background: transparent;
  box-shadow: none;
}

.rotating-card-container .card-rotate:after {
  display: none;
}

.rotating-card-container .card {
  transition: all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1);
  transform-style: preserve-3d;
  position: relative;
}

.rotating-card-container .card .back,
.rotating-card-container .card .front {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  background-color: #fff;
  border-radius: 0.5rem;
  top: 0;
  left: 0;
  justify-content: center;
  align-content: center;
  display: -moz-flex;
  display: -o-flex;
  display: flex;
  -moz-flex-direction: column;
  -o-flex-direction: column;
  flex-direction: column;
}

.rotating-card-container .card .back .card-body,
.rotating-card-container .card .front .card-body {
  justify-content: center;
  align-content: center;
  display: -moz-flex;
  display: -o-flex;
  display: flex;
  -moz-flex-direction: column;
  -o-flex-direction: column;
  flex-direction: column;
}

.rotating-card-container .card .back:after,
.rotating-card-container .card .front:after {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: "";
  border-radius: 0.5rem;
  background-image: linear-gradient(195deg, #EC407A, #D81B60);
  opacity: 0.85;
}

.rotating-card-container .card .front {
  z-index: 2;
  position: relative;
}

.rotating-card-container .card .back {
  transform: rotateY(180deg);
  z-index: 5;
  text-align: center;
  width: 100%;
  height: 100%;
}

.rotating-card-container .card .back.back-background .card-body {
  position: relative;
  z-index: 2;
}

.rotating-card-container .card .back .card-footer .btn {
  margin: 0;
}

.rotating-card-container .card .back .card-body {
  padding-left: 15px;
  padding-right: 15px;
}

.rotating-card-container:not(.manual-flip):hover .card {
  transform: rotateY(180deg);
}

.rotating-card-container.hover.manual-flip .card {
  transform: rotateY(180deg);
}

.card-profile .rotating-card-container .front {
  text-align: left;
}

.back-background .card-body {
  min-height: auto;
  padding-top: 15px;
  padding-bottom: 15px;
}

/*       Fix bug for IE      */
@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {

  .rotating-card-container .card .back,
  .rotating-card-container .card .front {
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .rotating-card-container .card .back {
    visibility: hidden;
    transition: visibility 0.3s cubic-bezier(0.34, 1.45, 0.7, 1);
  }

  .rotating-card-container .card .front {
    z-index: 4;
  }

  .rotating-card-container.manual-flip.hover .card .back,
  .rotating-card-container:not(.manual-flip):hover .card .back {
    z-index: 5;
    visibility: visible;
  }
}
</style>
