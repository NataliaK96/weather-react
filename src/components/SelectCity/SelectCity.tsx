import React, { useState } from 'react';
import style from './SelectCity.module.scss';
import { TPoint } from 'types';
import chevronTop from 'assets/icons/chevron-top.svg';
import chevronBottom from 'assets/icons/chevron-bottom.svg';

type Props = {
  city: TPoint | null;
  cities: TPoint[];
  onChange: (id: number) => void;
};

export const SelectCity: React.FC<Props> = ({ cities, city, onChange }) => {
  const [listIsOpen, openList] = useState<boolean>(false);
  const onSelect = (sity: TPoint) => {
    onChange(sity.id);
  };
  return (
    <div
      className={style.select}
      onClick={() => {
        openList(!listIsOpen);
      }}
      onBlur={() => openList(false)}
    >
      <div className={city ? style.select__value : style.select__default}>
        {city?.name || 'Select city'}
      </div>
      <img
        className={style.select__chevron}
        src={listIsOpen ? chevronTop : chevronBottom}
        alt="chevron"
      />
      {listIsOpen && (
        <div className={style.select__list}>
          {cities.map((c) => (
            <div
              onClick={() => onSelect(c)}
              key={c.id}
              className={style.select__item}
            >
              <div>{c.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
