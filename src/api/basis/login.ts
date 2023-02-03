import {createAxiosByInterceptors} from '../axios';

const request = createAxiosByInterceptors({})

export interface LoginData {
    username: string,
    password: string
}
export interface LoginRes {
    token: string
}

export interface MenuItem {
    path: string,
    fileName: string
    text: string,
    children?: Array<MenuItem>
}

export const loginApi = (obj:LoginData) => request<LoginRes>({
    url: "login",
    method: "post",
    data: obj
})

export const getMenuListApi = () => request<MenuItem[]>({
    url: "getMenuList",
    method: "get"
})