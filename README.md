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
1. [Images](#images)

## Description

This reservations booking module contains the price per night, average rating, dynamic calendar, guest counter, and calculator. There are a total of 100 mock listings available through the route localhost:3000/api/listingData/:listingID (1-100). The calendar component within the module dynamically renders available dates based off of the taken dates sent back from the server and database. It then changes the background color of the dates chosen on the start and end dates when hovering over available dates. The guests counter disables adults and children when the maximum number of guests is reached, while disabling infants at a random number determined by the information coming from the database. The calculator is dynamically rendered when the start and end dates are chosen.

## Requirements

### To Run This Module

From within the root directory: make sure that MySQL is running and that the root user has no password.

Run "npm run DB" and "npm run seed" to build the database, build the schema, and seed the database.

Run "npm run start" to start the server.

If further optimizations are made, run "npm run build" to watch your changes.


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Images

![image](https://user-images.githubusercontent.com/47989605/66277974-daacc580-e859-11e9-98eb-c9e0a9b339b1.png)
![component guests](https://user-images.githubusercontent.com/47989605/66278046-7b02ea00-e85a-11e9-8288-8c58838ad960.png)
![co](https://user-images.githubusercontent.com/47989605/66278068-bdc4c200-e85a-11e9-802f-4d3bc0f4f397.gif)
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/47989605/66278076-ca491a80-e85a-11e9-9385-c7adbe60430a.gif)
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/47989605/66278077-db922700-e85a-11e9-8a73-47fdc7e93255.gif)


