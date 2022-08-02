import React from 'react';

export const Chart5 = () => {
  return (
    <div className="战果">
      <h2>往年战果数对比</h2>
      <table>
        <thead>
        <tr>
          <th>年份</th><th>破案数</th><th>抓获嫌疑人</th><th>并串案件</th><th>现勘录入</th>
          <th>视侦录入</th><th>合成案件数</th><th>合计</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2019</td><td>12</td><td>30</td><td>24</td><td>45</td><td>16</td><td>23</td><td>150</td>
        </tr>
        <tr>
          <td>2020</td><td>22</td><td>23</td><td>45</td><td>35</td><td>16</td><td>27</td><td>168</td>
        </tr>
        <tr>
          <td>2021</td><td>16</td><td>30</td><td>44</td><td>25</td><td>36</td><td>7</td><td>158</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};