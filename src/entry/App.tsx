import React, { useEffect } from 'react';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import MainPage from 'views/MainPage';
import style from './App.module.scss';
import bgBottom from 'assets/images/bg-bottom.png';
import bgtop from 'assets/images/bg-top.png';
import { getCurrentWeather } from 'api';

function App() {
  useEffect(() => {
    getCurrentWeather({
      lat: '53.195873',
      lon: '50.100193',
      excludes: ['current', 'minutely', 'hourly', 'alerts'],
    });
  }, []);
  return (
    <div className={style.app}>
      <img src={bgtop} alt="background" className={style['background-top']} />
      <img
        src={bgBottom}
        alt="background"
        className={style['background-bottom']}
      />
      <div className={style.wrapper}>
        <Header />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
