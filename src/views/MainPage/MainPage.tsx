import React from 'react';
import { Datepicker } from 'components/Datepicker';
import { Section } from 'components/Section';
import { SelectCity } from 'components/SelectCity';
import { observer } from 'mobx-react';
import store from 'store';
import style from './Main.module.scss';
import { SectionPlaceholder } from 'components/SectionPlaceholder';
import { Card } from 'components/Card';
import { SwiperLeft, SwiperRight } from 'components/Buttons';

const MainPage = () => {
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
        <div className={style.main__data}>
          {store.daily.length ? (
            <>
              <SwiperLeft />
              {store.daily.map((d, i) => (
                <>
                  {i < 3 && (
                    <Card
                      key={d.dt}
                      date={d.dt}
                      image={d.icon}
                      temperature={d.temp}
                    />
                  )}
                </>
              ))}
              <SwiperRight />
            </>
          ) : (
            <SectionPlaceholder />
          )}
        </div>
      </Section>
      <Section
        title="Forecast for a Date in the Past"
        controls={
          <>
            <SelectCity
              cities={store.points}
              onSelect={(id) => {
                store.selectHistoryPoint(id);
                store.fetchHistory();
              }}
            />
            <Datepicker
              date={store.selectedHistoryDate}
              onSelect={(date) => {
                store.selectHistoryDate(date);
                store.fetchHistory();
              }}
            />
          </>
        }
      >
        <div className={style.main__data}>
          {store.history ? (
            <Card
              key={store.history.dt}
              date={store.history.dt}
              image={store.history.icon}
              temperature={store.history.temp}
            />
          ) : (
            <SectionPlaceholder />
          )}
        </div>
      </Section>
    </main>
  );
};

export default observer(MainPage);
