import React from 'react';
import style from './Card.module.scss';
import moment from 'moment';
import { getIconSrc } from 'api';

type Props = {
  date: number;
  image: string;
  temperature: number;
};

export const Card: React.FC<Props> = ({ date, image, temperature }) => {
  return (
    <section className={style.card}>
      <p className={style.card__date}>{`${moment(date * 1000)
        .format('DD MMM YYYY')
        .toLowerCase()}`}</p>
        <div className={style['card__image-wrapper']}>
      <img className={style.card__image} src={getIconSrc(image)} alt="icon" />
        </div>
      <p className={style.card__temperature}>+{`${Math.floor(temperature)}`}&deg;</p>
    </section>
  );
};
