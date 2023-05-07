# articles-areal
<h1 align="center">frontend</h1>
<p align="center"><img width="60" src="https://v3.ru.vuejs.org/logo.png" alt="Vue logo"> <img width="300" src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-dark.svg" alt="Tailwind CSS logo"> <img width="50" src="https://pinia.vuejs.org/logo.svg"></p>
<h1 align="center">backend</h1>
<h1 align="center">express <img width="60" src="https://sequelize.org/img/logo.svg"> <img width="60" src="https://www.postgresql.org/media/img/about/press/elephant.png"></h1>

## Клонируем репозиторий

```
git clone https://github.com/ChaosAttractor/articles-areal.git
```
### Переходим в папку
```
cd articles-areal
```

### Открыть в vscode
```
code .
```

## Установка зависимостей

```
cd backend
```

```
npm i
```
```
npm audit fix
```

```
cd ..
```

```
cd frontend
```

```
npm i
```
```
npm audit fix
```

## Миграция

```
cd backend
```

```
cd migration
```

```
npx sequelize-cli db:migrate
```

```
npx sequelize-cli db:seed:all
```

## Запуск
### Путь из корневой папки `articles-areal`
```
cd frontend
```

```
npm run dev
```
### Открываем новый терминал

```
cd backend
```

```
npm run dev
```

## Дополнительные настройки (опционально)

### В папке `backend`
 Файл `.env` отвечает за конфиг БД 

### В папке `backend\migration\config`
 Файл `config.json` отвечает за конфиг БД при миграции
