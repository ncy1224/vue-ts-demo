<template>
    <ScaleWrapperVue>
        <div class="echart-page flex">
        <div class="left-box flex-col">
            <div class="small-chart">
                <vChartVue :options="options" @selectchanged="selectchanged"></vChartVue>
            </div>
            
            <div  class="small-chart">
                <PolarBarChartVue id="polarChart"></PolarBarChartVue>
            </div>
            <div class="small-chart">
                <BarChartVue id="barChart1"></BarChartVue>
            </div>
            
            <div  class="small-chart">
                <PolarBarChartVue id="polarChart1"></PolarBarChartVue>
            </div>
        </div>
        <div class="center-box flex-col">
            <div class="big-chart">
                <MapChartVue id="mapChart"></MapChartVue>
            </div>
            <div class="flex">
                <div class="small-chart flex_1">
                <TreeMapChartVue id="barChart5"></TreeMapChartVue>
            </div>
            
            <div  class="small-chart flex_1">
                <TreeMapChartVue id="polarChart5"></TreeMapChartVue>
            </div>
            </div>
        </div>
        <div class="right-box flex-col">
            <div class="small-chart">
                <BarChartVue id="barChart2"></BarChartVue>
            </div>
            
            <div  class="small-chart">
                <PolarBarChartVue id="polarChart2"></PolarBarChartVue>
            </div>
            <div class="small-chart">
                <BarChartVue id="barChart3"></BarChartVue>
            </div>
            
            <div  class="small-chart">
                <PolarBarChartVue id="polarChart3"></PolarBarChartVue>
            </div>
        </div>
    </div>
    </ScaleWrapperVue>
</template>

<script setup lang="ts">
import BarChartVue from '@/components/BarChart.vue';
import PolarBarChartVue from '@/components/PolarBarChart.vue';
import TreeMapChartVue from '@/components/TreeMapChart.vue';
import MapChartVue from '@/components/MapChart.vue';
import ScaleWrapperVue from '@/components/ScaleWrapper.vue';
import vChartVue from '@/components/v-charts/v-chart.vue';
import {
  useStatisDeviceByUserObject,
} from "@/hooks/useStatisDeviceByUserObject";
const { options,selectchanged,handleChartClick } = useStatisDeviceByUserObject();
</script>

<style lang="scss" scoped>
.flex-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.flex {
    width: inherit;
    display: flex;
}
.flex_1 {
    flex: 1;
}
.small-chart {
    height: vh(250);
}
.big-chart {
    height: vh(700);
}
.echart-page {
    width: inherit;
    height: inherit;
    .left-box {
        width: vw(500);
        height: inherit;
        background: lightgreen;
    }
    .right-box {
        width: vw(500);
        height: inherit;
        background: lightcyan;
    }
    .center-box {
        width: vw(920);
        height: inherit;
    }
}
</style>