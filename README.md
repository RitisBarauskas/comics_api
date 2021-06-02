# Best Comics Every Day

## интерфейс для просмотра комиксов, которые подгружаются по API с сайта https://xkcd.com


### Особенности
Отличительной особенностью интерфейса является система навигации и использования псевдомаршрутизатора. Технология дает возможность использования (визуально) прямых ссылок вида http://localhost:8080/#/2462 где 2462 - произвольный порядковый номер комикса. Также для обхода CORS используется прокси https://cors-anywhere.herokuapp.com/

### Утановка
1. Установить Node.js
2. Скопировать репозиторий и выполнить команду npm install, 
3. После установки зависимостей перейти по ссылке https://cors-anywhere.herokuapp.com/ для активации прокси.
4. Выполнить команду npm run dev. Интерфейс доступен по адресу http://localhost:8080/ 
5. Либо после установки зависимостей и настройки прокси выполнить команду npm run build. Собранный проект можно запустить из директории проекта в папке dist/index.html

### Технологии
HTML, CSS, JavaScript, Webpack

### Об авторе
Ritis Barauskas. Python and web developer
