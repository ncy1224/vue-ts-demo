import { createDecorator } from "vue-class-component"
export const LogFuncParams = createDecorator((options,key)=>{
    console.log(options, key)
    const originFun = options.methods[key]

    options.methods[key] = function(...args) {
        console.log(`Invoked: ${key}:(`, ...args ,`)`)
        originFun.apply(this, args)
    }
})