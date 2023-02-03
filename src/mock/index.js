const Mock = require("mockjs")

Mock.setup({
    timeout: '200-600'
})

let configArray = []

const files = require.context("./", true, /\.js$/)
files.keys().forEach(key => {
    console.log(111,key);
    if(key === './index.js') return;
    configArray = configArray.concat(files(key).default)
})

configArray.forEach(item => {
    for(let [path, target] of Object.entries(item)){
        let protocol = path.split('|')
        Mock.mock(new RegExp('^'+ protocol[1]), protocol[0], target)
    }
})