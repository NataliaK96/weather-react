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
          city={store.selectedPoint}
            cities={store.points}
            onChange={(id) => {
              store.selectPoint(id);
              store.fetchDaily();
            }}
          />
        }
      >
        <div className={style.main__data}>
          {store.daily.length ? (
            <>
              {store.isMobile ? (
                <>
                  {store.daily.map((d) => (
                    <Card
                      key={d.dt}
                      date={d.dt}
                      image={d.icon}
                      temperature={d.temp}
                      />
                      ))}
                </>
              ) : (
                <>
                  <SwiperLeft
                    disable={store.inStartSlider}
                    onClick={() => {
                      store.prevSlide();
                    }}
                  />
                  {store.shownCardSet.map((d, i) => (
                    <Card
                      key={d.dt}
                      date={d.dt}
                      image={d.icon}
                      temperature={d.temp}
                    />
                  ))}
                  <SwiperRight
                    disable={store.inEndSlider}
                    onClick={() => {
                      store.nextSlide();
                    }}
                  />
                </>
              )}
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
            city={store.selectedHistoryPoint}
              cities={store.points}
              onChange={(id) => {
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
              bigIcon
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
