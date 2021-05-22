import { flow, types } from 'mobx-state-tree';
import { MDayWeather, MPoint } from 'models';
import { getCurrentWeather } from 'api';
import { getHistoryWeather } from 'api';

const Store = types
  .model({
    points: types.array(MPoint),
    selectedPoint: types.maybeNull(MPoint),
    daily: types.array(MDayWeather),
    history: types.maybeNull(MDayWeather),
    selectedHistoryPoint: types.maybeNull(MPoint),
    selectedHistoryDate: types.maybeNull(types.number),
  })
  .actions((self) => ({
    selectPoint: (pointId: number) => {
      const point = self.points.find((p) => p.id === pointId) || null;
      self.selectedPoint = point ? { ...point } : null;
    },
    selectHistoryPoint: (pointId: number) => {
      const point = self.points.find((p) => p.id === pointId) || null;
      self.selectedHistoryPoint = point ? { ...point } : null;
    },
    selectHistoryDate: (date: number) => {
      self.selectedHistoryDate = date;
    },
    fetchDaily: flow(function* () {
      if (!self.selectedPoint) return null;
      try {
        const { lat, lon } = self.selectedPoint;
        const response = yield getCurrentWeather({
          lat,
          lon,
          excludes: ['current', 'minutely', 'hourly', 'alerts'],
        });
        self.daily = response.daily.map((d: any) => ({
          dt: d.dt,
          temp: d.temp.day,
          icon: d.weather[0].icon,
        }));
      } catch (error) {
        console.error(error);
      }
    }),
    fetchHistory: flow(function* () {
      if (!self.selectedHistoryPoint || !self.selectedHistoryDate) return null;
      try {
        const { lat, lon } = self.selectedHistoryPoint;
        const response = yield getHistoryWeather({
          lat,
          lon,
          time: self.selectedHistoryDate/1000,
        });
        self.history = {
          dt: response.current.dt,
          temp: response.current.temp,
          icon: response.current.weather[0].icon,
        };
      } catch (error) {
        console.error(error);
      }
    }),
  }));

export default Store;
