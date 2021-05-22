import React from 'react';
import style from './Datepicker.module.scss';

export const Datepicker = () => {
  return (
    <div className={style.datepicker}>
      <input type="date"/>
    </div>
  );
};
