import React from 'react';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.header__title + ' ' + style.title}>
        <span className={style.title__item + ' ' + style.title__item_top}>Weather</span>
        <span className={style.title__item + ' ' + style.title__item_bottom}>forecast</span>  
        </h1>
    </header>
  );
};
