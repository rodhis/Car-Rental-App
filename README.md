# Car Rental app

Using this app you can request a car, for various needs, and also register yourself as a driver!

## Install and run instructions

1- Download the files to a folder;

2- Open an terminal on the project folder and type `npm install` to install the projects dependencies;

3- On the same terminal, type `npm install -g json-server` to install json-server globally (the global install is required to make json-server work properly);

4- Again, on the same terminal, type `npm run dev` to run the Vite (front-end) server;

5- Open a different terminal on the same project folder and type `npm run server` to run json-server (database).

Note that <strong>both Vite and Json-Server must be running in different terminals</strong> for the project to work.

## Project usage instructions

You can browse the page as you like. If you wish to know more about a car type, select "Read More" under one of the buttons.

If you wish to register, fill the form on the end of the page following these instructions:

- Full Name must not contain numbers and must contain at least one surename;
- Email must be format "example@email.com";
- Referral code format must be 3 letters, one dash and 5 numbers; E.g.: AAA-0001;
- You must select a car type, which you can read more on the proper section.
- The "I drive my own car" section is optional, in which you may choose the type of the car you own.

## Troubleshoot

If you're not getting the confirmation screen, please make sure that <strong>backend/db.json only has a single object</strong> with the key "registered-drivers: []". This is a limitation requested by the Project Owner.

## Info

This project was made as a challenge for my React internship at Compass Uol. It contains React, hooks, Redux, MaterialUI, Yup, json-server and a single test made with Vitest, Jest and React Test Library for demo purposes.
