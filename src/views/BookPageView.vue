<script setup>

</script>
<template>

    <div class="bookPage">
        div
    </div>
</template>
<style scoped>
.helpImg{
    width:25px;
}
.tooltip {
  position:relative; /* making the .tooltip span a container for the tooltip text */
  border-bottom:1px dashed #000; /* little indicater to indicate it's hoverable */
  opacity:1;
  display: inline-block;
}
.tooltip:before {
  content: attr(data-text); /* here's the magic */
  position:absolute;
  
  /* vertically center */
  top:50%;
  transform:translateY(-50%);
  
  /* move to right */
  left:100%;
  margin-left:15px; /* and add a small left margin */
  
  /* basic styles */
  width:200px;
  padding:10px;
  border-radius:10px;
  background:rgb(117, 37, 7,0.5);
  color: #fff;
  text-align:center;

  display:none; /* hide by default */
}
.tooltip:hover:before {
  display:block;
}
.bookPage {
    background-color: green;
    width:300px;
    font-family: 'Montserrat', sans-serif;
 
}
/* .tooltip {
    position: relative;
    border-bottom: 1px dotted black;
    background-color: yellowgreen;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: rgb(117, 37, 7);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 20;
    top: -5px;
    left: 110%;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
} */
</style>