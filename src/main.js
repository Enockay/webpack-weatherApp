/* eslint-disable import/no-duplicates */
// lets design card contents
// eslint-disable-next-line import/extensions
import { div } from './index.js';
import './card.css';
import { input } from './index';
import { button } from './index';
// eslint-disable-next-line import/no-cycle, import/extensions
import { fetchData, resolvePromise } from './api.js';

// card container
const cardContainer = document.createElement('div');
cardContainer.classList.add('cardContainer');
div.appendChild(cardContainer);

function designCard(name, degree, condition, time) {
  const card = document.createElement('div');
  card.classList.add('card');
  cardContainer.appendChild(card);

  const location = document.createElement('p');
  location.classList.add('location');
  location.textContent = `Your Search : ${name}`;
  card.appendChild(location);

  const temp = document.createElement('p');
  temp.classList.add('temp');
  temp.textContent = `${name} Temperatures :`;
  card.appendChild(temp);

  const label = document.createElement('div');
  label.classList.add('label');
  label.textContent = `${degree}°C`;
  card.appendChild(label);

  const weatherC = document.createElement('p');
  weatherC.classList.add('condition');
  weatherC.textContent = `weather condition : ${condition}`;
  card.appendChild(weatherC);

  const timeZone = document.createElement('p');
  timeZone.classList.add('time');
  timeZone.textContent = `${time}`;
}

button.addEventListener('click', () => {
  const userInput = input.value;
  fetchData(userInput);
  // eslint-disable-next-line no-alert
  alert('wait for API to load first');
});

resolvePromise();

export {
  // eslint-disable-next-line import/prefer-default-export
  designCard,
};
