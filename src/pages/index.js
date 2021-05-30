import './index.css';
import Api from '../scripts/components/Api'

const api = new Api({
    url: 'http://xkcd.com/',
    headers: {
        "content-type": "application/json"
    },
    cors: 'https://cors-anywhere.herokuapp.com/'
})

api.getDataCard()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err))