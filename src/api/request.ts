export const baseUrl = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'cab996ab083ea0a187c31623c2213ae3';

export const request = async (path: string, params: any) => {
  const url = baseUrl + path + `&appid=${API_KEY}&units=metric`;
  const response = await fetch(url, {
    ...params,
  });
  const data = await response.json();
  return data;
};
