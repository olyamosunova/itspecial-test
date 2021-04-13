# itspecial-test

## Task
Необходимо разработать Vue компонент для сортировки таблиц с данными и сверстать адаптивную таблицу.
 
Функциональность:
 
Сортировка по столбцам: при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике - по убыванию. Графическим элементом или текстовым сообщением указывается направление сортировки.
Клиентская пагинация: данные необходимо отображать постранично, максимум 25 элементов на страницу. Необходимо предоставить пользовательскую навигацию для перехода по страницам.
Фильтрация: компонент предоставляет текстовое поле, в которое пользователь может ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Фильтрация осуществляется по нажатию на кнопку "Найти".
По клике на строку таблицы значения полей выводятся в дополнительном блоке под таблицей.
Данные в таблицу загружаются с сервера.
 
Для демонстрации работы компонента необходимо сделать простую HTML страницу с адаптивной таблицей.
 
Данные берутся по ссылке:
http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}
 
Требования:
 
Код должен быть написан на Vue
Во время загрузки данных необходимо отображать индикатор
Для хранения данных, полученных с API, должен использоваться vuex
 
Дополнительным плюсом будет:
 
Использование typescript
 
Схема визуального представления данных:
 
Если выбран пользователем с id = 101 , то под таблицей выводим следующую информацию:
```js
> Выбран пользователь <b>Sue Corson</b>
> Описание:
> <textarea>
> et lacus magna dolor...
> </textarea>
> Адрес проживания: <b>9792 Mattis Ct</b>
> Город: <b>Waukesha</b>
> Провинция/штат: <b>WI</b>
> Индекс: <b>22178</b>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
