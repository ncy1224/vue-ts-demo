import {ChartType} from "./type";
import * as echarts from "echarts/core";
import { onBeforeUnmount, Ref, shallowReactive, ShallowRef, shallowRef,useAttrs } from "vue";

import {
    TitleComponent,
    LegendComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent
} from "echarts/components";

import {BarChart, LineChart, PieChart, GaugeChart} from "echarts/charts";

import {LabelLayout, UniversalTransition} from "echarts/features";
import {CanvasRenderer} from "echarts/renderers";

const files = require.context("./options", false, /\.ts$/);
let optionsModules:any = {};
files.keys().forEach(key => {
    optionsModules[key] = files(key).default || files(key)
});



interface ChartHookOption {
    type?: Ref<ChartType>;
    el: ShallowRef<HTMLElement>
}

class ChartResize {
    #charts = new Set<echarts.ECharts>();
    #timeId:undefined | number;
    constructor() {
        window.addEventListener("resize", this.handleResize.bind(this));
    }
    getCharts() {
        return [...this.#charts];
    }
    handleResize(){
        clearTimeout(this.#timeId);
        this.#timeId = setTimeout(()=> {
            this.#charts.forEach(chart => {
                chart.resize();
            })
        }, 500)
    }
    add(chart: echarts.ECharts){
        this.#charts.add(chart)
    }
    remove(chart: echarts.ECharts) {
        this.#charts.delete(chart);
    }
    removeListener() {
        window.removeEventListener("resize", this.handleResize)
    }
}

export const chartsResize = new ChartResize();

export const useCharts = ({type, el}:ChartHookOption) => {
    echarts.use([
        BarChart,
        LineChart,
        BarChart,
        PieChart,
        GaugeChart,
        TitleComponent,
        LegendComponent,
        TooltipComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent,
        LabelLayout,
        UniversalTransition,
        CanvasRenderer
    ]);
    const charts = shallowRef<echarts.ECharts>();

    let options: echarts.EChartsCoreOption;
    
    
    const getOptions = () => {
        const moduleKey = `./${type?.value}.ts`;
        console.log(moduleKey,optionsModules);
        return optionsModules[moduleKey];
        // return defaultOption;
    }

    const setOptions = (opt: echarts.EChartsCoreOption) => {
        const cha = <echarts.ECharts>charts.value;
        cha.setOption(opt);
    }
    const initChart = async ()=>{
        charts.value = echarts.init(el.value);
        options = await getOptions();
        charts.value.setOption(options);
        chartsResize.add(charts.value);
        initEvent();
    }
    const attrs = useAttrs();
    const initEvent = () => {
        Object.keys(attrs).forEach(attrKey => {
            if(/^on/.test(attrKey)){
                const cb = attrs[attrKey];
                attrKey = attrKey.replace(/^on(Chart)?/, "");
                attrKey = `${attrKey[0]}${attrKey.substring(1)}`;
                typeof cb === "function" && charts.value?.on(attrKey, cb as ()=> void)
            }
        })
    }
    onBeforeUnmount(() => {
        chartsResize.remove(<echarts.ECharts>charts.value)
    });
    return {
        charts,
        setOptions,
        initChart,
        initEvent
    }
}
export const chartsOptions = <T extends echarts.EChartsCoreOption>(option: T) => shallowReactive<T>(option);
export * from "./type"

// export allType