DROP DATABASE IF EXISTS reservationsModule;

CREATE DATABASE reservationsModule;

USE reservationsModule;

CREATE TABLE listing(
  Name varchar(50) NOT NULL,
  perNight int NOT NULL,
  perNightX int,
  RATING int,
  guestsAllowed int NOT NULL,
  guestsInfants int,
  cleaningFee int,
  serviceFee int,
  occupancyFee int
)

CREATE TABLE reservedDates (
  DATE NOT NULL
)