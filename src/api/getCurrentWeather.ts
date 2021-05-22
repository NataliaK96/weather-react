import { request } from './request';

type Params = {
  lat: string | number;
  lon: string | number;
  excludes?: string[];
};

export const getCurrentWeather = ({ lat, lon, excludes }: Params) =>
  request(
    `/onecall?lat=${lat}&lon=${lon}&exclude=${excludes?.join(',') || ''}&units=metric`,
    {
      method: 'GET',
    }
  );
