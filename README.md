# Weather-App

# Функционал

✅ Отображение погоды на 5 дней согласно выбранному городу (поддерживается любой язык ввода).  
✅ Интеграция с двумя погодными сервисами с возможностью переключения между ними.  
✅ Интеграция с Google Calendar пользователя посредством Calendar API и авторизации с Google.  
✅ Автозаполнение поля города согласно геолокации пользователя.  
✅ Визуализация погоды фоновыми изображениями согласной текущей погоде в городе.  
✅ Сохранение состояния пользователя (за исключением авторизации) в локальном хранилище.  

# Стек

◼ React (Functional Components + Hooks)  
◼ Styled-Components  
◼ Redux Toolkit  
◼ Redux Saga  
◼ Redux Persist  
◼ Formik  
◼ Axios  
◼ ESLint (Airbnb config)  
◼ Webpack  
◼ Babel  

# Используемые API

◼ Google Calendar API: https://www.npmjs.com/package/react-google-calendar-api  
◼ Open Weather API:  https://openweathermap.org  
◼ Storm Glass API: https://docs.stormglass.io  

# Пояснения

❗ Storm Glass API предоставляет лишь 10 бесплатных запросов в день. Если погода с этого сервиса  
не отображается, то количество запросов исчерпано (вами или другим пользователем).  
❗ Верификация приложена на Google Cloud не проходилась, поэтому протестировать функционал Google  
Calendar API можно лишь по добавлению вашей почты к списку OAuth.