<template>
  <div class="title" @click="isCollapse = !isCollapse">九霄神威</div>
  <el-menu
    router
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <template v-for="menu in menuData.menuList" :key="menu.path">
      <el-sub-menu v-if="menu.children" :index="menu.path">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{menu.text}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="child in menu.children" :key="child.path" :index="child.path">{{child.text}}</el-menu-item>
        </el-menu-item-group>
       
      </el-sub-menu>
      <el-menu-item v-else :index="menu.path">
        <el-icon><icon-menu /></el-icon>
        <template #title>{{menu.text}}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from "vue-router";
import {getMenuListApi, MenuItem} from "../../api/basis/login"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
    components: {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        PieChartOutlined,
        MailOutlined,
        DesktopOutlined,
        InboxOutlined,
        AppstoreOutlined
    },
    setup () {
        const router = useRouter()
        const state = reactive({
          isCollapse: false
        })
        let menuData = reactive<{menuList: MenuItem[]}>({menuList: []})
        const getMenuList =async () => {
          const res = await getMenuListApi()
          const data = res.data
          addRoutes(data, "/")
          menuData.menuList = data
        }
        const addRoutes = (data:MenuItem[], parentRoute:string) => {
          data.forEach(item => {
            router.addRoute(parentRoute,{
              name: item.path,
              path: parentRoute + item.path,
              component: () => import("@views/"+ item.fileName)
            })
            if(item.children) {
              addRoutes(item.children, parentRoute+ item.path +"/")
            }
          })
        }
        getMenuList()
        return {
            ...toRefs(state),
            menuData
        }
    }
})
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  height: 64px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 64px;
  font-size: 20px;
}
</style>