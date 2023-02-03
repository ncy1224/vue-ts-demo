let LoginSuccess = {
    code: 200,
    message: "success",
    data: {
        token: "asd1sd"
    }
}
let LoginFail = {
    code: 200,
    message: "fail",
    data: {}
}
let networkError = {
    code: 401,
    message: "fail",
    data: {}
}

let menuList ={
    code: 200,
    message: "success",
    data: [
    {
        path: "form",
        fileName: "Form.vue",
        text: "基础知识"
    },
    {
        path: "echarts",
        fileName: "Form.vue",
        text: "基础知识"
    },
    {
        path: "other",
        fileName: "Form.vue",
        text: "基础知识"
    },
    {
        path: "4",
        text: "基础知识",
        fileName: "Form.vue",
        children: [
            {
                path: "4-1",
                fileName: "Form.vue",
                text: "基础知识"
            },
            {
                path: "4-2",
                fileName: "Form.vue",
                text: "基础知识"
            },
            {
                path: "4-3",
                fileName: "Form.vue",
                text: "基础知识"
            }
        ]
    },
    {
        path: "5",
        fileName: "Form.vue",
        text: "基础知识",
        children: [
            {
                path: "5-1",
                fileName: "Form.vue",
                text: "基础知识",
                children: [
                    {
                        path: "5-1-1",
                        fileName: "Form.vue",
                        text: "基础知识"
                    },
                    {
                        path: "5-1-2",
                        fileName: "Form.vue",
                        text: "基础知识"
                    }
                ]
            },
            {
                path: "5-2",
                fileName: "Form.vue",
                text: "基础知识"
            },
            {
                path: "5-3",
                fileName: "Form.vue",
                text: "基础知识"
            }
        ]
    }
]
}

export default {
    "post|login": option=> {
        const params = JSON.parse(option.body) || {}
        if(params.username === "ncy" && params.password==="111"){
            return LoginSuccess
        }
        if(params.username === "ncy" && params.password!=="111"){
            return LoginFail
        }
        return networkError
    },
    "get|getMenuList": option=> {
        return menuList
    }
};
