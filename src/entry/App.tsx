import React, { useEffect } from 'react';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import MainPage from 'views/MainPage';
import style from './App.module.scss';
import bgBottom from 'assets/images/bg-bottom.png';
import bgtop from 'assets/images/bg-top.png';
import { observer } from 'mobx-react';
import store from 'store';

function App() {
  const onWindowResize = () => {
    if (window.innerWidth < 700) {
      store.setIsMobile(true);
    } else {
      store.setIsMobile(false);
    }
  };
  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
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

export default observer(App);
