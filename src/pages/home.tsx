import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import {Chart4} from '../components/chart-4';

const year = new Date().getFullYear();
export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className="section2">
          <Chart3/>
          <Chart4/>
        </section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
      <footer>
        &copy; zxjdzxb 2020-{year}
      </footer>
    </div>
  );
};
