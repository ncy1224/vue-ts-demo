<template>
    <div :id="id" class="chart-box"  v-directive></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts/core"
import { fitChartSize } from "@/utils/index";
import { BarChart, BarSeriesOption } from "echarts/charts"
import { GridComponent, GridComponentOption } from 'echarts/components';
import {onMounted, defineProps} from "vue";
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([GridComponent, BarChart, CanvasRenderer])
type EChartsOption = echarts.ComposeOption<
  GridComponentOption | BarSeriesOption
>;
const props = defineProps({
    id: {
        type: String,
        default: "chart"
    }
})
const option: EChartsOption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    grid: {
        top:fitChartSize(50),
        bottom: fitChartSize(50),
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }
    ]
}
onMounted(()=> {
    const myChart = echarts.init(document.getElementById(props.id)!)
    myChart.setOption(option)
})
</script>

<style lang="scss" scoped>
.chart-box {
    width: 100%;
    height: 100%;
}
</style>