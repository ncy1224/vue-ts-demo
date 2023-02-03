import {createAxiosByInterceptors} from '../axios'
import axios from 'axios'


const request = createAxiosByInterceptors({})
const cancelToken = axios.CancelToken
const source = cancelToken.source()

interface GetListResponse {
    text: string
}

export const getListApi = (params:{type: number}) => request<GetListResponse>({
    method: 'get',
    url: 'getList',
    params: params
})