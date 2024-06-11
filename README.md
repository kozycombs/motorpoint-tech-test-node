### Instructions

This repository is for a technical task in Typescript provided by Motorpoint.

Clone this repository and complete the following tasks.

- Add the remaining fields to the vehicle model
- Implement an endpoint for listing all cars
- Implement an endpoint for listing cars by make
- Implement an endpoint for listing cars by model
- Add any other endpoints you think are useful / relevant

Consider the following as well.

- Error handling
- Unit tests

Upload the completed solution to your own GitHub and provide the link to it (ensure it is publically available).
The solution must compile and run without any errors.

### Created with

This project was created with the stack below:

- Nodejs
- ExpressJs
- Typescript
- Jest
- ESLint
- Git
- Visual studio code

## Getting Started

To run this project locally on your machine please follow the instructions below

### Prerequisites

- node from version 18
- npm

```sh
  npm install npm@latest -g
```

### Installation

Clone the repo

```sh
git clone https://github.com/kozycombs/motorpoint-tech-test-node.git
```

Install NPM packages

```sh
   npm install
```

### Run the app

Start the development server

```sh
   npm run start:dev
```

Runs the app in the development mode.\
Open [http://localhost:3500](http://localhost:3500) in Postman / Thunder client for vscode to test the api endpoint.

### Endpoint

- /api/vehicles - Get all vehicles
- /api/vehicles/make - Get the make of all vehicles
- /api/vehicles?make=bmw - Get all vehicles by make
- /api/vehicles?model=1 series - Get all vehicles by model
- /api/vehicles?make=bmw&model=1 series - Get all vehicles by make and model

### Run unit tests

```sh
   npm run test
```
