export const fitChartSize = (size:number, defaultWidth:number = 1920):number => {
    let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(!clientWidth) return size;
    let scale = clientWidth / defaultWidth;
    return Number((size * scale).toFixed(2));
}