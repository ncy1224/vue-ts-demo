import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"
const routes: Array<RouteRecordRaw> = [
    {
        name: "/",
        path: "/",
        redirect: "index",
        component : () => import("../views/HomeView.vue"),
        children: [
            {
                name: "index",
                path: "/index",
                component : () => import("../views/About.vue")
            }
        ]
    },
    {
        name: "login",
        path: "/login",
        component : () => import("../views/LoginView.vue")
    },
    {
        name: "bigFirst",
        path: "/bigFirst",
        component: () => import(/* webpackChunkName */ '../views/BigFirst.vue')
    },
    {
        name: "bigSecond",
        path: "/bigSecond",
        component: () => import(/* webpackChunkName */ '../views/BigSecond.vue')
    },
    {
        name: "bigThree",
        path: "/bigThree",
        component: () => import(/* webpackChunkName */ '../views/BigThree.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach(to => {
    const needLogin = to.meta.auto;
    if( needLogin ){
        const token = window.sessionStorage.getItem("token")
        const target = to.fullPath
        if(!token && target != "/login") return "/login"
        if(token && target == "/login") return "/"
    }
    
})
export default router
