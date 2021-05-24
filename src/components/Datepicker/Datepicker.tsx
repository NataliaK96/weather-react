import moment from 'moment';
import React from 'react';
import style from './Datepicker.module.scss';

type Props = {
  date: number | null;
  onSelect: (date: number) => void;
};

export const Datepicker: React.FC<Props> = ({ date, onSelect }) => {
  return (
    <>
      <div
        className={
          style.datepicker +
          ' ' +
          (date ? '' : style.datepicker_empty)
        }
      >
        {!date && <div className={style.datepicker__placeholder}>{'Select date'}</div>}
        <input
          className={style.datepicker__picker}
          value={
            date
              ? moment(date).format('YYYY-MM-DD')
              : moment().format('YYYY-MM-DD')
          } 
          type="date"
          min={`${moment().add(-4, 'days').format('YYYY-MM-DD')}`}
          max={`${moment().format('YYYY-MM-DD')}`}
          onChange={(e) => onSelect(moment(e.target.value).unix() * 1000)}
        />
      </div>
    </>
  );
};
