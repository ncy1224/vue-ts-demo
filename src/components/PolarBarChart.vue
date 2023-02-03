<template>
    <div :id="id" class="chart-box" v-directive></div>
</template>

<script setup lang="ts">
import {onMounted, defineProps} from "vue";
import { fitChartSize } from "@/utils/index";
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  PolarComponent,
  PolarComponentOption,
  TooltipComponent,
  TooltipComponentOption
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
const props = defineProps({
    id: {
        type: String,
        default: "chart"
    }
})
echarts.use([
  TitleComponent,
  PolarComponent,
  TooltipComponent,
  BarChart,
  CanvasRenderer
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | PolarComponentOption
  | TooltipComponentOption
  | BarSeriesOption
>;

var option: EChartsOption;

option = {
  title: [
    {
      text: 'Radial Polar Bar Label Position (middle)11',
      top: fitChartSize(0),
      textStyle: {
        fontSize: fitChartSize(18)
      },
      left: "center"
    }
  ],
  grid: {
    top:fitChartSize(10),
    bottom: fitChartSize(50),
  },
  polar: {
    radius: [30, '80%']
  },
  radiusAxis: {
    max: 4
  },
  angleAxis: {
    type: 'category',
    data: ['a', 'b', 'c', 'd'],
    startAngle: 75
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [2, 1.2, 2.4, 3.6],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
      formatter: '{b}: {c}'
    }
  },
  animation: false
};

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