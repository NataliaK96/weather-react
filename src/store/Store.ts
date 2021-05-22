import { flow, types } from 'mobx-state-tree';
import { MDayWeather, MPoint } from 'models';
import { getCurrentWeather } from 'api';

const Store = types
  .model({
    points: types.array(MPoint),
    selectedPoint: types.maybeNull(MPoint),
    daily: types.array(MDayWeather),
    history: types.maybeNull(MDayWeather),
  })
  .actions((self) => ({
    selectPoint: (pointId: number) => {
      const point = self.points.find((p) => p.id === pointId) || null;
      self.selectedPoint = point ? { ...point } : null;
    },
    fetchDaily: flow(function* () {
      if (!self.selectedPoint) return null;
      try {
        const { lat, lon } = self.selectedPoint;
        const response = yield getCurrentWeather({ lat, lon });
        self.daily = response.daily.map((d: any) => ({
          dt: d.dt,
          temp: d.temp.day,
          icon: d.weather[0].icon,
        }));
      } catch (error) {
        console.error(error);
      }
    }),
  }));

export default Store;
