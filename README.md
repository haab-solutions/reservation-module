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

The booking module contains price per night, average rating, a dynamic calendar, guest counter, and calculator. There are 100 listings that are accessible using localhost/rooms/:listingID, from 1 - 100. The calendar component within the module dynamically renders available dates based on start date clicked, and has a hover feature that keeps the background color highlighted from start date to potential end date. The guests counter disables infants at 5, and disables adults and children when the maximum number of guests is reached. The calculator is dynamically rendered when start and end dates are chosen.

## Requirements

### To Run This Module
From within the root directory: make sure that MySQL is running and that the root user has no password. Run "npm start" to start the server.

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

