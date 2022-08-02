import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [
        {
          name: '初中',
          type: 'line',
          data: [0.41, 0.42, 0.23, 0.64, 0.45, 0.46, 0.37, 0.28, 0.32].reverse()
        },
        {
          name: '高中',
          type: 'line',
          data: [0.62, 0.63, 0.54, 0.55, 0.56, 0.57, 0.60, 0.49, 0.50].reverse()
        },
        {
          name: '专科',
          type: 'line',
          data: [0.70, 0.74, 0.75, 0.86, 0.77, 0.78, 0.69, 0.60, 0.71].reverse()
        },
        {
          name: '本科',
          type: 'line',
          data: [0.80, 0.85, 0.86, 0.87, 0.90, 0.89, 0.90, 0.81, 0.72].reverse()
        },
        {
          name: '硕士',
          type: 'line',
          data: [0.89, 0.92, 0.88, 0.88, 0.85, 0.87, 0.91, 0.82, 0.73].reverse()
        },
        {
          name: '博士',
          type: 'line',
          data: [0.9, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.86, 0.82].reverse()
        },
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    }));
  }, []);

  return (
    <div className="bordered 发案趋势">
      <h2>毕业生就业率</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};