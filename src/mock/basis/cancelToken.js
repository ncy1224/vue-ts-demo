let list1 = {
    code: 200,
    message: "success",
    data: {
        text: "asd1sd"
    }
}
let list2 = {
    code: 200,
    message: "success",
    data: {
        text: "asd1sd2"
    }
}
let list3 = {
    code: 200,
    message: "success",
    data: {
        text: "asd1sd3"
    }
}

export default {
    "get|getList": option=> {
        let url = option.url
       let params= url.substring(url.indexOf("?")+1)
    }
}