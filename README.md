# Finder-Job-Board

This is a Node.js application built using the Express.js framework and MongoDB for the database. The purpose of this application is to allow admins to post jobs, internships, and remote jobs to the website, as well as manage user accounts and notifications.

## Features

### The application includes the following features:

- User registration and authentication
- Admin user accounts with additional privileges
- Job posting functionality with the ability to edit and delete posts
- Notification system for users to receive updates on job postings
- Ability to post notifications to users
- Posting and management of questions for job applications
- Test taking functionality with the ability to edit and delete tests
- A responsive design.
- Effect of hovering.
- The width of the device will be automatically fixed.

## Installation
To install this application, you will need to have Node.js and MongoDB installed on your system. Then, follow these steps:

 - Clone this repository to your local machine
- Install dependencies using `npm install`
- Start the server using `npm start`
- Access the application at http://localhost:3000


## Routes (You can use 👍)
### User Routes & their works
- `/register` : to show registration form
- `/register` : to register new user
- `/login` : to show login form
- `/login` : to login
- `/logout` : to logout

### Jobs Routes & their works
- `/` : home page
- `/jobs` : to view jobs
- `/jobs/new` : to create new job
- `/jobs/:id` : to view job
- `/jobs/:id/edit` : to edit job
- `/jobs/:id/delete` : to delete job


## Notification Routes & their work
- `/notifications` : to view notifications
- `/notifications/new` : to create new notification
- `/notifications/:id` : to delete notification


## Questions Routes & their work
- `/questions` : to view questions
- `/questions/new` : to create new question
- `/questions/:id` : to delete question
- `/test` : to give test


## User Routes & their work
- `/users` : to view user
- `/users/:id/edit` : to edit user
- `/users/:id` : to delete user








