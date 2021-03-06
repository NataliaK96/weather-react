# Weather forecast

**Deploy:** https://nataliak96.github.io/weather-react/

## Template

В темплейт приложения были добавлены:

- **typescript** - для исключения ошибок на ранних этапах разработки.
- **node-sass** - для удобного описания стилей и избежания одинаковых названий классов. Были использованы scss modules, а не styled-components, т.к. верстка (названия классов) должна соответствовать методологии БЭМ.
- **moment** - для удобного форматирования даты.
- **mobx, mobx-state-tree** - т.к. проект небольшой, для организации store удобно было использовать mobx, а не redux, это уменьшило количество boilerplate.

Для запросов не стала использовать axios или другое готовое решение, использовала fetch в кастомной обертке, т.к. обработка ошибок небольшая и используются только get запросы.

В каком моменте сомневаюсь: не совсем понятно поведение datepicker: открывается ли календарь при нажатии на строку ввода или открывается только при клике на иконку; в техзадании не указано, должен ли сворачиваться список городов по клику в любой области.

### Установка

Для того, чтобы запустить приложение, выполните следующие пункты:

1. Склонируйте репозиторий на свой ПК.
2. Для разработки была использована Node.js v12.18.3. Убедитесь, что вы используете актуальную версию.
3. Установите пакеты, введя в терминале следующую команду:

```sh
$ yarn install
```

### Запуск

После успешной установки запустите виртуальный сервер с проектом, введя в терминал следующую команду:

```sh
$ yarn start
```
