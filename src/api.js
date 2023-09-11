/* eslint-disable no-alert */
// generate the api key now
// eslint-disable-next-line import/no-cycle
import { designCard } from './main';

async function fetchData(place) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=fa24b51fdf1440d289a114727233008&q=${place}&aqi=no`,
      { mode: 'cors' },
    );
    const data = await response.json();
    const degree = data.current.temp_c;
    const { name } = data.location;
    const condition = data.current.condition.text;
    const time = data.current.last_updated;

    designCard(name, degree, condition, time);
  } catch (error) {
    alert(`${error},ocurred in fetch`);
  }
}
function resolvePromise() {
  const promise = new Promise((resolve) => {
    alert('set fetching time is 10seconds wait kindly');
    setTimeout(() => {
      resolve(
        fetchData('Nairobi'),
        fetchData('kisumu'),
        fetchData('cairo'),
        fetchData('london'),
        fetchData('chuka'),
        fetchData('malawi'),
        fetchData('kimagog'),
        fetchData('rwanda'),
        fetchData('algeria'),
      );
    }, 10000);
  });
  return promise;
}

export { fetchData, resolvePromise };
