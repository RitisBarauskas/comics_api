import './index.css';
import Api from '../scripts/components/Api';
import Card from '../scripts/components/Card';
import {firstButton, prevButton, randButton, nextButton, lastButton} from '../scripts/utils/constants';



// Задаем данные для подключение к АПИ, включая прокси для обхода CORS
const api = new Api({
    url: 'http://xkcd.com/',
    headers: {
        "content-type": "application/json"
    },
    cors: 'https://cors-anywhere.herokuapp.com/'
})

// Объявляем переменную со значением последней карточки
let lastCard = 1;

// Получаем данные о текущей карточки и переопределяем переменную со значением последней карточки
function initialCard() {
    api.getDataCard()
    .then((data) => {
        lastCard = data.num;
        createCard(data);
    })
    .catch((err) => console.log(err))
}

const cardNumber = document.location.pathname
console.log(cardNumber);
if (cardNumber == '/') {
    console.log(cardNumber);
    initialCard();
} else {
    console.log(cardNumber.slice(1));
    getCard()
}


// Генерация случайного числа в заданном промежутке
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.body.querySelectorAll('.card__link')
        .forEach((link) => link.addEventListener('click', link_clickHandler));

function link_clickHandler(evt) {
    evt.preventDefault();

    const path = evt.target.href;

    window.history.pushState({route: path}, "title", path);
}


// Функция создания карточки
function createCard(data) {
    let prevCard = (data.num - 1)
    if (prevCard == 0) {
        prevCard = 1;
    }
    let nextCard = (data.num + 1)
    if (nextCard >= lastCard) {
        nextCard = lastCard;
    }
    const randCard = getRandomInt(1, lastCard);
    new Card({
        data,
        prevCard,
        nextCard,
        randCard,
        lastCard,
    }).generateCard();
}