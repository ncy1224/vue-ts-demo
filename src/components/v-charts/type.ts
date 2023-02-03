import * as echarts from "echarts";
import { XAXisComponentOption, YAXisComponentOption } from "echarts";
import {ECElementEvent, SelectChangedPayload, HighlightPayload} from "echarts/types/src/util/types";

import {
    TitleComponentOption,
    TooltipComponentOption,
    GridComponentOption,
    DatasetComponentOption,
    AriaComponentOption,
    AxisPointerComponentOption,
    LegendComponentOption
} from "echarts/components"

import {
    BarSeriesOption,
    LineSeriesOption,
    PieSeriesOption,
    TreemapSeriesOption,
    MapSeriesOption,
    FunnelSeriesOption,
    GaugeSeriesOption
} from "echarts/charts";

type Options = LineECOption | BarECOption | PieECOption | FunnelOption;

type BaseOptionType = XAXisComponentOption | YAXisComponentOption | TitleComponentOption | TooltipComponentOption | LegendComponentOption | GridComponentOption|DatasetComponentOption|AriaComponentOption|AxisPointerComponentOption;

type BaseOption = echarts.ComposeOption<BaseOptionType>;

type BarECOption = echarts.ComposeOption<BarSeriesOption | BaseOptionType>;

type LineECOption = echarts.ComposeOption<LineSeriesOption | BaseOptionType>

type PieECOption = echarts.ComposeOption<PieSeriesOption | BaseOptionType>

type FunnelOption = echarts.ComposeOption<FunnelSeriesOption | BaseOptionType>

type GaugeECOption = echarts.ComposeOption<GaugeSeriesOption | GridComponentOption>

type EchartsOption = echarts.EChartsOption;

type ChartType = "bar" | "line" | "pie" | "gauge";

namespace ChartsEvents {
    type MouseEventType ='click' | 'dblclick' | 'mousedown' | 'mousemove' | 'mouseup' | 'mouseover' | 'mouseout' | 'globalout' | 'contextmenu' // 鼠标事件类型
    type MouseEvents = {
        [key in Exclude<MouseEventType, "globalout" | "contentmenu"> as `chart${Capitalize<key>}`]:ECElementEvent
    }

    export interface Events extends MouseEvents {
        globalout: ECElementEvent,
        contextmenu: ECElementEvent,
        selectchanged: SelectChangedPayload
        highlight: HighlightPayload,
        legendselected: {
            type: "legendselected",
            name: "string",
            selected: {
                [name:string]: boolean
            }
        }
    }
    export type EventType = keyof Events
}

export {
    BaseOption,
    ChartType,
    LineECOption,
    BarECOption,
    Options,
    PieECOption,
    FunnelOption,
    GaugeECOption,
    EchartsOption,
    ChartsEvents
}