export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        this._cors = config.cors;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getDataCard() {
        return fetch(this._cors+this._url+`info.0.json`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkResponse);
    }

    getDataCardNum(num) {
        return fetch(this._cors+this._url+num+`/info.0.json`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkResponse);
    }
}