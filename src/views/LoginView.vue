<template>
    <div class="login-box">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            label-width="120px"
            class="ruleForm"
        >
            <el-form-item label="UserName" prop="username">
            <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
            <el-input
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
            />
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="userLogin">Submit</el-button
            >
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import {useRouter, useRoute} from 'vue-router';
import {loginApi} from "../api/basis/login"
export default defineComponent({
    setup () {
        const router = useRouter()
        const route = useRoute()
        const state = reactive({
            ruleForm: {
                username: "",
                password: ""
            }
        })
        const userLogin = async () => {
            let res = await loginApi({
                username: state.ruleForm.username,
                password: state.ruleForm.password
            })
            let token = res.data.token
            
            window.sessionStorage.setItem("token", token)
            if(route.query && route.query.callback) {
                router.push({path: <string>route.query.callback})
            } else {
                router.push({name: "/"})
            }
        }
        return {
            ...toRefs(state),
            userLogin
        }
    }
})
</script>

<style lang="scss" scoped>
.login-box {
    width: inherit;
    height: inherit;
    background: rgb(163, 47, 47);
    position: relative;
    .ruleForm {
        width: 400px;
        padding: 30px;
        background: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
    }
}
</style>