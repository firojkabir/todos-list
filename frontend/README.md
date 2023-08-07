# TodosListApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Running the project

The project can be run as a generic NodeJS application in the development environment.

### Setting up environment variables

The base API URL for the angular application is configured by configuration file in **src/environments/environment.ts**.

```
export const environment = {
  apiBaseUrl: 'http://localhost:3001',
};
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

If the project is running successfully in localhost, it can be accessed at http://localhost:4200.

## Project structure

Modular file structure pattern have been followed as per angular style guide. Important files necessary for building the user interface is stored in **src**.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
