import React, { useEffect } from 'react';
import { getIconSrc } from 'api';
import { Datepicker } from 'components/Datepicker';
import { Section } from 'components/Section';
import { SelectCity } from 'components/SelectCity';
import { observer } from 'mobx-react';
import store from 'store';
import style from './Main.module.scss';
import { SectionPlaceholder } from 'components/SectionPlaceholder';
import moment from 'moment';

const MainPage = () => {
  useEffect(() => {
    //store.fetchDaily();
  }, []);
  return (
    <main className={style.main}>
      <Section
        title="7 Days Forecast"
        controls={
          <SelectCity
            cities={store.points}
            onSelect={(id) => {
              store.selectPoint(id);
              store.fetchDaily();
            }}
          />
        }
      >
        {store.daily.length? store.daily.map((d) => (
          <div key={d.dt}>
            <div>{`${moment(d.dt*1000).format('DD MMM YYYY').toLowerCase()} ${d.temp}`}</div>
            <img src={getIconSrc(d.icon)} alt="icon" />
          </div>
        )): <SectionPlaceholder/>}
      </Section>
      <Section
        title="Forecast for a Date in the Past"
        controls={<Datepicker />}
      />
    </main>
  );
};

export default observer(MainPage);
