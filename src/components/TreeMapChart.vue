<template>
    <div :id="id" class="chart-box" v-directive></div>
</template>

<script setup lang="ts">import {onMounted, defineProps} from "vue";
import * as echarts from 'echarts/core';
import { TreemapChart, SunburstChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import axios from "axios";

const props = defineProps({
    id: {
        type: String,
        default: "chart"
    }
})
echarts.use([TreemapChart, SunburstChart, CanvasRenderer, UniversalTransition]);

// type EChartsOption = echarts.ComposeOption<TreemapSeriesOption>;


onMounted(()=> {
    const myChart = echarts.init(document.getElementById(props.id)!)
    axios.get('/web_chart/examples/data/asset/data/echarts-package-size.json').then(function(data:any){
      let da = data.data
    const treemapOption: echarts.EChartsCoreOption = {
      series: [
        {
          type: 'treemap',
          id: 'echarts-package-size',
          animationDurationUpdate: 1000,
          roam: false,
          nodeClick: undefined,
          data: da.children,
          universalTransition: true,
          label: {
            show: true
          },
          breadcrumb: {
            show: false
          }
        }
      ]
    };
    const sunburstOption: echarts.EChartsCoreOption = {
      series: [
        {
          type: 'sunburst',
          id: 'echarts-package-size',
          radius: ['20%', '90%'],
          animationDurationUpdate: 1000,
          nodeClick: undefined,
          data: da.children,
          universalTransition: true,
          itemStyle: {
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,.5)'
          },
          label: {
            show: false
          }
        }
      ]
    };
    let currentOption = treemapOption;
    
    myChart.setOption(currentOption)
    window.addEventListener("resize", function(){
      myChart.resize();
  })
    // setInterval(function () {
    //   currentOption =
    //     currentOption === treemapOption ? sunburstOption : treemapOption;
    //   myChart.setOption(currentOption);
    // }, 3000);
    }); 
    
})
</script>

<style lang="scss" scoped>
.chart-box {
    width: 100%;
    height: 100%;
}
</style>