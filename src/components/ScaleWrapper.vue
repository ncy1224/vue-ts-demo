<template>
    <div class="scale-wrapper">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
const handleScreenAuto = () => {
    const designWidth = 1920;
    const designHeight= 1080;
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    const scale = clientWidth/clientHeight < designWidth/designHeight
        ? clientWidth/designWidth
        : clientHeight/designHeight;
        console.log( clientWidth/designWidth,clientHeight/designHeight);
        
    let dom = <HTMLElement> document.querySelector(".scale-wrapper");
    dom.style.transform=`scale(${scale}) translate(-50%,-50%)`;
}
onMounted(()=> {
    handleScreenAuto()
    window.addEventListener("resize", handleScreenAuto)
})
onBeforeUnmount(()=> {
    window.removeEventListener("resize", handleScreenAuto)
})
</script>

<style lang="scss" scoped>
.scale-wrapper {
    width: 100%;  //设计稿的宽度
    height: 100%;  //设计稿的高度
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
    top: 50%;
}
</style>