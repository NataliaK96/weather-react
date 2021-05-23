import React from 'react';
import style from './SelectCity.module.scss';
import { TPoint } from 'types';

type Props = {
  cities: TPoint[];
  onSelect: (id: number) => void;
};

export const SelectCity: React.FC<Props> = ({ cities, onSelect }) => {
  return (
    <div className={style.select}>
      <select className={style.select__item} onChange={(e) => onSelect(Number(e.target.value))}>
        {cities.map((c) => (
          <option value={c.id} key={c.id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};
