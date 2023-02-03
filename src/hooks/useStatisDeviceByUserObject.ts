import { BarECOption, ChartsEvents, chartsOptions } from "@/components/v-charts/useCharts"
import {SelectChangedPayload} from "echarts/types/src/util/types";
import { fitChartSize } from "@/utils/index";

export const useStatisDeviceByUserObject = () => {
    const options = chartsOptions<BarECOption>({
        yAxis: {},
        xAxis: {},
        series: []
    })
    options.xAxis = {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
    options.grid = {
        top:fitChartSize(50),
        bottom: fitChartSize(50),
    }
    options.yAxis = {
        type: 'value'
    }
    options.series = [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }
    ]
    
    const selectchanged = (params: ChartsEvents.Events["selectchanged"])=>{
        console.log(params,'selected');
    }
    const handleChartClick = (params: ChartsEvents.Events["chartClick"])=> {
        console.log(params,'click');
    }
    return {
        options,
        selectchanged,
        handleChartClick
    }
}