<template>
    <div :id="id" class="chart-box" v-directive></div>
</template>

<script setup lang="ts">import {onMounted, defineProps} from "vue";
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  VisualMapComponent,
  VisualMapComponentOption,
  GeoComponent,
  GeoComponentOption
} from 'echarts/components';
import { MapChart, MapSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import axios from "axios";

const props = defineProps({
    id: {
        type: String,
        default: "chart"
    }
})
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | VisualMapComponentOption
  | GeoComponentOption
  | MapSeriesOption
>;


onMounted(()=> {
    const myChart = echarts.init(document.getElementById(props.id)!)
    myChart.showLoading();
    axios.get('/web_chart/examples/data/asset/geo/HK.json').then(function(usaJson:any){
    myChart.hideLoading();
    echarts.registerMap('HK', usaJson.data);
    var option: EChartsOption = {
        title: {
            text: 'USA Population Estimates (2012)',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2
        },
        visualMap: {
            left: 'right',
            min: 800,
            max: 50000,
            inRange: {
                color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
                ]
            },
            text: ['High', 'Low'],
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
        {
          name: '香港18区人口密度',
          type: 'map',
          map: 'HK',
          label: {
            show: true
          },
          data: [
            { name: '中西区', value: 20057.34 },
            { name: '湾仔', value: 15477.48 },
            { name: '东区', value: 31686.1 },
            { name: '南区', value: 6992.6 },
            { name: '油尖旺', value: 44045.49 },
            { name: '深水埗', value: 40689.64 },
            { name: '九龙城', value: 37659.78 },
            { name: '黄大仙', value: 45180.97 },
            { name: '观塘', value: 55204.26 },
            { name: '葵青', value: 21900.9 },
            { name: '荃湾', value: 4918.26 },
            { name: '屯门', value: 5881.84 },
            { name: '元朗', value: 4178.01 },
            { name: '北区', value: 2227.92 },
            { name: '大埔', value: 2180.98 },
            { name: '沙田', value: 9172.94 },
            { name: '西贡', value: 3368 },
            { name: '离岛', value: 806.98 }
          ],
          // 自定义名称映射
          nameMap: {
            'Central and Western': '中西区',
            Eastern: '东区',
            Islands: '离岛',
            'Kowloon City': '九龙城',
            'Kwai Tsing': '葵青',
            'Kwun Tong': '观塘',
            North: '北区',
            'Sai Kung': '西贡',
            'Sha Tin': '沙田',
            'Sham Shui Po': '深水埗',
            Southern: '南区',
            'Tai Po': '大埔',
            'Tsuen Wan': '荃湾',
            'Tuen Mun': '屯门',
            'Wan Chai': '湾仔',
            'Wong Tai Sin': '黄大仙',
            'Yau Tsim Mong': '油尖旺',
            'Yuen Long': '元朗'
          }
        }
      ]
    };
    
    myChart.setOption(option)
    }); 
    
})
</script>

<style lang="scss" scoped>
.chart-box {
    width: 100%;
    height: 100%;
}
</style>