import React from 'react';
import style from './Buttons.module.scss';
import chevronLeft from 'assets/icons/chevron-left.svg';

export const SwiperLeft = () => {
  return (
    <button className={style.button}>
      <img src={chevronLeft} alt="chevronLeft" className={style.button__icon}/>
    </button>
  );
};
