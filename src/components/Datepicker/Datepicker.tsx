import moment from 'moment';
import React from 'react';
import style from './Datepicker.module.scss';

type Props = {
  date: number | null;
  onSelect: (date: number) => void;
};

export const Datepicker: React.FC<Props> = ({ date, onSelect }) => {
  return (
    <div className={style.datepicker}>
      <input
        placeholder={'choose'}
        value={date ? moment(date).format('YYYY-MM-DD') : 0}
        type="date"
        onChange={(e) => onSelect(moment(e.target.value).unix() * 1000)}
      />
    </div>
  );
};
