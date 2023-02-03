const path = require("path")
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set("@", path.resolve(__dirname, "src"))
            .set("@assets", path.resolve(__dirname, "src/assets"))
            .set("@views", path.resolve(__dirname, "src/views"))
            .set("@mock", path.resolve(__dirname, "src/mock"))
            .set("@types", path.resolve(__dirname, "src/types"))
            .set("@components", path.resolve(__dirname, "src/components"))
            .set("@api", path.resolve(__dirname, "src/api"))
    },
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             "@view": path.resolve(__dirname, 'src/views')
    //         }
    //     }
    // }
    devServer: {
        proxy: {
          '/web_chart': {
            target: 'https://echarts.apache.org',
            secure: true,
            changeOrigin: true,
            pathRewrite: {
                "/web_chart": "/"
            }
          }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import '@assets/util.scss'`
            },
            scss: {
                prependData: `@import '@assets/util.scss';`
            }
        }
    },
    
}