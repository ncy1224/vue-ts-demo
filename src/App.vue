<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
export default class App extends Vue {}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html, body, #app {
  width: 100%;
  height: 100%;
}
</style>
