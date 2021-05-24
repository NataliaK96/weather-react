import React from 'react';
import style from './Card.module.scss';
import moment from 'moment';
import { getIconSrc } from 'api';

type Props = {
  date: number;
  image: string;
  temperature: number;
  bigIcon?: boolean;
};

export const Card: React.FC<Props> = ({
  date,
  image,
  temperature,
  bigIcon,
}) => {
  return (
    <section className={style.card}>
      <p className={style.card__date}>{`${moment(date * 1000)
        .format('DD MMM YYYY')
        .toLowerCase()}`}</p>
      <div className={style['card__image-wrapper']}>
        <img
          className={
            style.card__image + ' ' + (bigIcon ? style.card__image_big : '')
          }
          src={getIconSrc(image)}
          alt="icon"
        />
      </div>
      <p className={style.card__temperature}>
        {`${temperature >= 0 ? '+' : '-'}${Math.floor(temperature)}`}&deg;
      </p>
    </section>
  );
};
