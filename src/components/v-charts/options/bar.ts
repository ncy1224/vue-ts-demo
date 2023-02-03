import { BarECOption } from "../type";
const options:BarECOption = {
    legend: {},
    tooltip: {},
    xAxis: {
        type: "category",
        axisLine: {
            lineStyle: {
                color: "#c8d0d7"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#7d8292"
        }
    },
    yAxis: {
        type: "value",
        alignTicks: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: "#c8d0d7",
                type: "dashed"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#7d8292"
            }
        }
    },
    grid: {
        left: 60,
        bottom: "8%",
        top: "20%"
    },
    series: [{
        type: "bar",
        barWidth: 20,
        itemStyle: {
            color: {
                type: "linear",
                x: 0,
                x2: 0,
                y:0,
                y2:1,
                colorStops: [
                    {
                        offset: 0,
                        color: "#62A5FF" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#3365FF" // 100% 处的颜色
                      }
                ]
            }
        }
    }]
}
export default options;