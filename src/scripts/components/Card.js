export default class Card {
    constructor({data, prevCard, nextCard, randCard, lastCard}) {
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
        this._lastCard = lastCard;
        this._card = document.querySelector('.card');
        this._cardTitle = this._card.querySelector('.card__title');
        this._cardImage = this._card.querySelector('.card__image');
        this._cardYear = this._card.querySelector('.card__text_year');
        this._cardAlt = this._card.querySelector('.card__text_alt');
        this._cardLinkPrev = this._card.querySelector('.card__link_prev');
        this._cardLinkNext = this._card.querySelector('.card__link_next');
        this._cardLinkRand = this._card.querySelector('.card__link_rand');
        this._cardLinkLast = this._card.querySelector('.card__link_last');
        this._cardLinkFirst = this._card.querySelector('.card__link_first');
    }

    generateCard() {
        this._cardTitle.textContent = this._title;
        this._cardImage.src = this._img;
        this._cardImage.alt = this._title;
        this._cardAlt.textContent = this._alt;
        this._cardYear.textContent = this._day+'-'+this._month+'-'+this._year;
        this._cardLinkPrev.href = this._prevCard;
        this._cardLinkNext.href = this._nextCard;
        this._cardLinkRand.href = this._randCard;
        this._cardLinkLast.href = this._lastCard;
        this._cardLinkFirst.href = 1;
        // if (this._num == this._nextCard) {
        //     this._cardButtonNext.setAttribute('disabled', true);
        // } else {
        //     this._cardButtonNext.removeAttribute('disabled', true);
        // }
        // if (this._num == this._prevCard) {
        //     this._cardButtonPrev.setAttribute('disabled', true);
        // } else {
        //     this._cardButtonPrev.removeAttribute('disabled', true);
        // }
      }
}
