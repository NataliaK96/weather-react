import React from 'react';
import style from './Buttons.module.scss';
import chevronRight from 'assets/icons/chevron-right.svg';

export const SwiperRight = () => {
  return (
    <button className={style.button}>
      <img src={chevronRight} alt="chevronRight" className={style.button__icon}/>
    </button>
  );
};
