import { types } from 'mobx-state-tree';

export const MPoint = types.model({
  id: types.number,
  name: types.maybeNull(types.string),
  lat: types.string,
  lon: types.string,
});
