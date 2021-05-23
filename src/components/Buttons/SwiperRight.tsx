import React from 'react';
import style from './Buttons.module.scss';
import chevronRight from 'assets/icons/chevron-right.svg';

type Props = {
  onClick: () => void;
  disable?: boolean
};

export const SwiperRight: React.FC<Props> = ({ onClick, disable }) => {
  return (
    <button onClick={onClick} className={style.button + ' ' + (disable? style.button_disable: '')}>
      <img
        src={chevronRight}
        alt="chevronRight"
        className={style.button__icon}
      />
    </button>
  );
};
