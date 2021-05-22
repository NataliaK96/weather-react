import { Instance } from 'mobx-state-tree';
import { MDayWeather, MPoint } from 'models';

export type TDayWeather = Instance<typeof MDayWeather>;
export type TPoint = Instance<typeof MPoint>;
