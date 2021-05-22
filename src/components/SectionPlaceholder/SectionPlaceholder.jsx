import React from 'react';
import style from './SectionPlaceholder.module.scss';
import placeholder from 'assets/images/placeholder.svg';

export const SectionPlaceholder = () => {
  return (
    <div className={style.placeholder}>
      <img src={placeholder} alt="cloud" className={style.placeholder__image} />
      <p className={style.placeholder__text}>
        Fill in all the fields and the weather will be displayed
      </p>
    </div>
  );
};
