import './index.css';
import Router from '../scripts/utils/Router'
import Api from '../scripts/components/Api';
import Card from '../scripts/components/Card';

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

//функция получения произвольной карточки. Если идет прямой переход, то определяется и последняя карточка
function getCard(num) {
    if (lastCard === 1) {
        api.getDataCard()
            .then((data) => {
                lastCard = data.num;
            })
            .catch((err) => console.log(err))
    }    
    api.getDataCardNum(num)
        .then((data) => {
            createCard(data);
        })
        .catch((err) => console.log(err))    
}

//Определяем маршрутизатор
const router = new Router({
    mode: 'hash',
    root: '/'
  });
  
  router
    .add(/(.*)/, (cardNumber) => {
        getCard(cardNumber);
    });


// Генерация случайного числа в заданном промежутке
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Слушаем ссылки сбрасываем текущее поведение при переходе по ним.
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