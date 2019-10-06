# AirBnM

> This module is the reservations booking component of the AirBnM listings page.

## Related Projects

  - https://github.com/haab-solutions/reservation-module
  - https://github.com/haab-solutions/photo-gallery-module
  - https://github.com/haab-solutions/reviews-module
  - https://github.com/haab-solutions/recommendations-module

## Table of Contents

1. [Description](#Description)
1. [Requirements](#requirements)
1. [Development](#development)

## Description

This reservations booking module contains the price per night, average rating, dynamic calendar, guest counter, and calculator. There are a total of 100 mock listings available through the route localhost:3000/api/listingData/:listingID (1-100). The calendar component within the module dynamically renders available dates based off of the taken dates sent back from the server and database. It then changes the background color of the dates chosen on the start and end dates when hovering over available dates. The guests counter disables adults and children when the maximum number of guests is reached, while disabling infants at a random number determined by the information coming from the database. The calculator is dynamically rendered when the start and end dates are chosen.

## Requirements

### To Run This Module
From within the root directory: make sure that MySQL is running and that the root user has no password.
>Run "npm run DB" and "npm run seed" to build the database, build the schema, and seed the database.
>Run "npm run start" to start the server.
>If further optimizations are made, run "npm run build" to watch your changes.

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

