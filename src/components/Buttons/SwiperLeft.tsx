import React from 'react';
import style from './Buttons.module.scss';
import chevronLeft from 'assets/icons/chevron-left.svg';

type Props = {
  onClick: () => void;
  disable?: boolean
};

export const SwiperLeft: React.FC<Props> = ({ onClick, disable }) => {
  return (
    <button onClick={onClick} className={style.button + ' ' + (disable? style.button_disable: '')}>
      <img src={chevronLeft} alt="chevronLeft" className={style.button__icon} />
    </button>
  );
};
