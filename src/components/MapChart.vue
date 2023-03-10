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
          name: '??????18???????????????',
          type: 'map',
          map: 'HK',
          label: {
            show: true
          },
          data: [
            { name: '?????????', value: 20057.34 },
            { name: '??????', value: 15477.48 },
            { name: '??????', value: 31686.1 },
            { name: '??????', value: 6992.6 },
            { name: '?????????', value: 44045.49 },
            { name: '?????????', value: 40689.64 },
            { name: '?????????', value: 37659.78 },
            { name: '?????????', value: 45180.97 },
            { name: '??????', value: 55204.26 },
            { name: '??????', value: 21900.9 },
            { name: '??????', value: 4918.26 },
            { name: '??????', value: 5881.84 },
            { name: '??????', value: 4178.01 },
            { name: '??????', value: 2227.92 },
            { name: '??????', value: 2180.98 },
            { name: '??????', value: 9172.94 },
            { name: '??????', value: 3368 },
            { name: '??????', value: 806.98 }
          ],
          // ?????????????????????
          nameMap: {
            'Central and Western': '?????????',
            Eastern: '??????',
            Islands: '??????',
            'Kowloon City': '?????????',
            'Kwai Tsing': '??????',
            'Kwun Tong': '??????',
            North: '??????',
            'Sai Kung': '??????',
            'Sha Tin': '??????',
            'Sham Shui Po': '?????????',
            Southern: '??????',
            'Tai Po': '??????',
            'Tsuen Wan': '??????',
            'Tuen Mun': '??????',
            'Wan Chai': '??????',
            'Wong Tai Sin': '?????????',
            'Yau Tsim Mong': '?????????',
            'Yuen Long': '??????'
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