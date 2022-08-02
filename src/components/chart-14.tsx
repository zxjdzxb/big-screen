import React from 'react';

export const Chart14 = () => {
  return (
    <table>
      <thead>
      <tr>
        <th colSpan={2}>类型</th>
        <th>单数</th>
        <th>总计</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td rowSpan={4}>共享单车</td>
        <td>哈啰出行</td>
        <td>40</td>
        <td rowSpan={4}>110</td>
      </tr>
      <tr>
        <td>骑呗单车</td>
        <td>20</td>
      </tr>
      <tr>
        <td>OfO小黄车</td>
        <td>20</td>
      </tr>
      <tr>
        <td>快兔出行</td>
        <td>30</td>
      </tr>
      <tr>
        <td rowSpan={2}>乘坐</td>
        <td>公交</td>
        <td>32</td>
        <td rowSpan={2}>54</td>
      </tr>
      <tr>
        <td>地铁</td>
        <td>22</td>
      </tr>
      <tr>
        <td rowSpan={3}>长途</td>
        <td>火车</td>
        <td>35</td>
        <td rowSpan={3}>100</td>
      </tr>
      <tr>
        <td>高铁</td>
        <td>20</td>
      </tr>
      <tr>
        <td>火车</td>
        <td>45</td>
      </tr>
      </tbody>
    </table>
  );
};