## Description

This API consists of a CRUD of people.

## Installation

```bash
$ npm install
```

## Preparing the database

```bash
# run existing migrations
$ npm run typeorm:run-migrations

# generate new migrations in case of changes in database models
$ npm run typeorm:generate-migration
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API documentation

The People CRUD API description can be accessed via the [/api](http://localhost:3030/api) route.
