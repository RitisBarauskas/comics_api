export default class Card {
    constructor({data, prevCard, nextCard, randCard}) {
        this._num = data.num;
        this._img = data.img;
        this._title = data.title;
        this._alt = data.alt;
        this._day = data.day;
        this._month = data.month;
        this._year = data.year;
        this._prevCard = prevCard;
        this._nextCard = nextCard;
        this._randCard = randCard;
        this._card = document.querySelector('.card');
        this._cardTitle = this._card.querySelector('.card__title');
        this._cardImage = this._card.querySelector('.card__image');
        this._cardYear = this._card.querySelector('.card__text_year');
        this._cardAlt = this._card.querySelector('.card__text_alt');
        this._cardButtonPrev = this._card.querySelector('.card__button_prev');
        this._cardButtonNext = this._card.querySelector('.card__button_next');
        this._cardButtonRand = this._card.querySelector('.card__button_rand');
    }

    generateCard() {
        console.log(this._num);
        this._cardTitle.textContent = this._title;
        this._cardImage.src = this._img;
        this._cardImage.alt = this._title;
        this._cardAlt.textContent = this._alt;
        this._cardYear.textContent = this._day+'-'+this._month+'-'+this._year;
        this._cardButtonPrev.value = this._prevCard;
        this._cardButtonNext.value = this._nextCard;
        this._cardButtonRand.value = this._randCard;
        if (this._num == this._nextCard) {
            this._cardButtonNext.setAttribute('disabled', true);
        } else {
            this._cardButtonNext.removeAttribute('disabled', true);
        }
        if (this._num == this._prevCard) {
            this._cardButtonPrev.setAttribute('disabled', true);
        } else {
            this._cardButtonPrev.removeAttribute('disabled', true);
        }
      }
}
