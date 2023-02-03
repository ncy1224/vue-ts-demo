<template>
    <div class="v-charts" ref="chartRef"></div>
</template>
<script lang="ts">
export default {
    name: "VCharts"
}
</script>
<script setup lang="ts">
import { onMounted, PropType, shallowRef, toRefs, watch } from 'vue';
import * as echarts from "echarts/core";
import {useCharts, ChartType, ChartsEvents} from "./useCharts";


interface EventEmitsType {
    <T extends ChartsEvents.EventType>( event: ChartsEvents.Events[Uncapitalize<T>]):void
}
const props = defineProps({
    type: {
        type: String as PropType<ChartType>,
        default: "bar"
    },
    options: {
        type: Object as PropType<echarts.EChartsCoreOption>,
        default: ()=> {}
    }
})
defineEmits<EventEmitsType>();

const {type, options}= toRefs(props);
console.log(111,options);

const chartRef = shallowRef();

const {charts, setOptions, initChart} = useCharts({type,el:chartRef});

onMounted(async () => {
    await initChart();
    setOptions(options.value);
})
watch(options, ()=> {setOptions(options.value)}, {deep: true})
defineExpose({
    $charts:charts
})
</script>

<style lang="scss" scoped>
.v-charts {
    width: 100%;
    height: 100%;
    min-height: 200px;
}
</style>