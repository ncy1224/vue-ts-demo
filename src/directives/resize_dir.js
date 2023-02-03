import * as Echarts from "echarts";
const HANDLER = "_vue_resize_handler";
export default {
    mounted(el, binding) {
        el[HANDLER] = ()=> {
            let chart = Echarts.getInstanceByDom(el);
            if(!chart) return;
            chart.resize();
        }
        window.addEventListener("resize",el[HANDLER])
    },
    beforeUnmount(el){
        window.removeEventListener("resize",el[HANDLER])
        delete el[HANDLER];
    },
}