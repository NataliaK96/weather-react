import { request } from './request';

type Params = {
  lat: string | number;
  lon: string | number;
  time: string | number;
};

export const getHistoryWeather = ({ lat, lon, time }: Params) =>
  request(
    `/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}`,
    {
      method: 'GET',
    }
  );
