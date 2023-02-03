import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./routes/routers"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
require("./mock")
import resizeDirective from "@/directives/resize_dir.js"




createApp(App).use(Antd).use(VueRouter).directive("directive",resizeDirective).use(ElementPlus).mount('#app')
