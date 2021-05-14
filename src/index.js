import './styles.css';
import menu from './menu.json';
import menuTemplates from './menu-card.hbs';


const refs = {
    list: document.querySelector('.js-menu'),
    checkbox: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//* создаём разметку
refs.list.innerHTML = menuTemplates(menu);

function changeTheme() {
    refs.body.setAttribute('class', refs.body.classList.contains(Theme.DARK) ? Theme.LIGHT : Theme.DARK);
    localStorage.setItem('theme', refs.body.classList.value);
};

refs.checkbox.addEventListener('change', changeTheme);

function themeFromLocalStorage() {
    refs.body.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'));
    refs.checkbox.checked = localStorage.getItem('theme') === Theme.DARK;
}

themeFromLocalStorage();