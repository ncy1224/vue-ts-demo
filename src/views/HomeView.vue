<template>
  <el-container class="home-wrapper">
    <el-aside style="width:auto;background:rgba(0,0,0,0.7)">
      <LeftMenu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import LeftMenu from '@views/components/LeftMenu.vue'
export default defineComponent({
  components: {
    LeftMenu
  },
  setup() {
    const state = reactive({
      collapsed: false
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
<style lang="scss">
.home-wrapper {
  height: 100%;
}
</style>