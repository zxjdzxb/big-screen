import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {name: '电石', 2011: 2, 2012: 3},
    {name: '原料', 2011: 2, 2012: 3},
    {name: '原盐', 2011: 2, 2012: 3},
    {name: 'PVC', 2011: 2, 2012: 3},
    {name: '融碱', 2011: 2, 2012: 3},
    {name: '盐酸', 2011: 2, 2012: 3},
    {name: '水泥', 2011: 2, 2012: 3},
  ];
  useEffect(() => {
    //@ts-ignore
    setInterval(() => {
      const newData = [
        {name: '电石', 2011: 2, 2012: Math.random() * 10},
        {name: '原料', 2011: 2, 2012: 3},
        {name: '原盐', 2011: 2, 2012: Math.random() * 10},
        {name: 'PVC', 2011: 2, 2012: 3},
        {name: '融碱', 2011: 2, 2012: 3},
        {name: '盐酸', 2011: 2, 2012: 3},
        {name: '水泥', 2011: 2, 2012: 3},
      ];
      x(newData);
    }, 2000);
  }, []);
  const x = (data) => {
    //@ts-ignore
    //@ts-ignore
    myChart.current.setOption(createEchartsOptions({
     xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: {show: false}
      },
      yAxis: {
        axisTick: {show: false},
        type: 'category',
        data: data.map(i => i.name),
        axisLabel: {
          formatter(val) {
            return val.replace('公安局', '\n公安局');
          }
        }
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: data.map(i => i[2011]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034f9'
              }, {
                offset: 1,
                color: '#04a1ff'
              }]),
            }
          }
        },
        {
          data: data.map(i => i[2012]),
          type: 'bar',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#b92ae8'
              }, {
                offset: 1,
                color: '#6773e7'
              }]),
            }
          }
        }
      ]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 破获排名">
      <h2>能源化工</h2>
      <div ref={divRef} className="chart"/>
      <div className="legend">
        <span className="first"/> 原料库存
        <span className="second"/> 产品库存
      </div>
    </div>
  );
};