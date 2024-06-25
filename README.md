# Traversy_DevCamper_API

Backend API for DevCamper application, which is a bootcamp directory website
Most of the content of this the same as that found at https://github.com/bradtraversy/devcamper-api,
as this was produced as part of a udemy course.

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev
# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses, and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Demo

Extensive demonstration with examples [here](https://documenter.getpostman.com/view/8923145/SVtVVTzd?version=lastest)

- Version: 1.0.0
- License: MIT
- Author: Thomas Williams
