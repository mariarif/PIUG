<script setup>
const props = defineProps({
    message: String,
});
</script>
<template>
    <div class="HelpTooltip" style="position:relative">
        <div :data-text="message" class="tooltip"><img class="helpImg"
                src="../assets/images/help.png" /></div>
    </div>
</template>
<style scoped>
.HelpTooltip{
    position:relative;
    display: inline-block;
    vertical-align: middle;
    height:100%;
}
.helpImg {
    width: 30px;
    background-color:rgba(117, 36, 7, 0.073); 
    border-radius: 15px;

}

.tooltip {
    position: relative;
    opacity: 1;
    display: inline-block;
height: 100%;
}

.tooltip:before {
    content: attr(data-text);
    /* here's the magic */
    position: absolute;

    /* vertically center */
    top: 50%;
    transform: translateY(-50%);

    /* move to right */
    left: 100%;
    margin-left: 10px;
    /* and add a small left margin */

    /* basic styles */
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    background: rgb(117, 37, 7, 0.5);
    color: #fff;
    text-align: center;

    display: none;
    
    /* hide by default */
}

.tooltip:hover:before {
    display: block;
}
</style>