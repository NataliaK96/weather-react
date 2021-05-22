import { types } from 'mobx-state-tree';

export const MDayWeather = types.model({
  dt: types.number,
  temp: types.number,
  icon: types.string,
});
