# TodosListApi

## Intro

This is the backend REST API project for the Todos list project. It is implemented using **ExpressJS** library powered by **NodeJS**. The **NoSQL** database platform **MongoDB** has been used for data storage.

## Running the project

The project can be run as a generic NodeJS application in the development environment.

### Setting up environment variables

The database connection string is passed to the application using the environment variable. A sample environment file is added to the project directory. It needs to be copied as **.env**.

```
cp .env.example .env
```

The values in the newly created environment file need to be replaced according to the development environment.

```
PORT=3001
JWT_SECRET=Your_secret_key
DB_URL=mongodb://localhost:27017/todo-list
```

### Running

The project can be run on the local machine using npm. At first, the dependencies need to be installed using the following command.

```
npm install
```

Till this point the dependencies are installed and the project is ready to be run using the following command.

```
npm run start
```
