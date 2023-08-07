# TodosListApi

## Intro

This is the backend REST API project for the Todos list project. It is implemented using **ExpressJS** library powered by **NodeJS**. The **NoSQL** database platform **MongoDB** has been used for data storage.

## Running the project

The project can be run as a generic NodeJS application in the development environment.

### Setting up environment variables

The database connection string is passed to the application using environment variable. A sample environment file is added in the project directory. It need to be copied as **.env**.

```
cp .env.example .env
```

The values in the newly created environment file need to be replaced according to the development enviroment.

```
DB_URL=mongodb://localhost:27017/todo-list
PORT=3001
```

### Running

The project can be run in the local machine using npm. At first the dependencies need to be installed using following command.

```
npm install
```

Till this point the dependencies are installed and the project is ready to be run using following command.

```
npm run start
```
