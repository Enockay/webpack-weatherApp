import './style.css';

const div = document.createElement('div');
div.classList.add('container');
document.body.appendChild(div);

const heading = document.createElement('h3');
heading.classList.add('heading');
heading.textContent = 'YAMO WEATHER APP';
div.appendChild(heading);

const para = document.createElement('p');
para.textContent = 'You can search The location of your place to check on the weather focasting temperature';
para.classList.add('para');
heading.appendChild(para);

const container = document.createElement('div');
container.classList.add('inputContainer');
div.appendChild(container);

const input = document.createElement('input');
input.classList.add('input');
input.setAttribute('placeholder', 'search your location');
container.appendChild(input);

const button = document.createElement('button');
button.classList.add('search');
button.textContent = 'search';
container.appendChild(button);

const footer = document.createElement('footer');
footer.classList.add('footer');
footer.textContent = 'app created and compile by enockay mwema @2023';
document.body.appendChild(footer);

export { div, input, button };
