<template>
    <div class="list">
        <div class="list-item" @mouseover="getList(item.key)" v-for="item in listData" :key="item.key" type="primary">{{ item.text }}</div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import {getListApi} from "../api/basis/cancelToken"
let listData = reactive<Array<{key:number,text:string}>>([])
for(let i = 1; i<=3;i++){
    listData.push({key: i, text: "button"+i})
}
const getList = (type:number) => {
    getListApi({type})
}
</script>

<style lang="scss" scoped>
.list {
    display: flex;
    .list-item {
        background: red;
        margin-right: 20px;
        padding: 10px 20px;
        color: aliceblue;
    }

}
</style>