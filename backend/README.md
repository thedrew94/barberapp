# BARBERAPP PROJECT STRUCTURE

project-root/
├── frontend/
│ ├── node_modules/
│ ├── public/
│ ├── src/
│ ├── .gitignore
│ ├── .prettierignore
│ ├── .prettierrc.json
│ ├── index.html
│ ├── package.json
│ ├── package-lock.json
│ └── vite.config.js
├── backend/
│ ├── controllers
│ ├── models
│ ├── node_modules
│ ├── public
│ ├── routes
│ ├── utils
│ ├── .env
│ ├── .gitignore
│ ├── package-lock.json
│ ├── package.json
│ └── server.js

## BARBERAPP FIRST INIT

1. in the frontend/ folder run:
   npm install

2. in the backend/ folder run:
   npm install

3. in the backend folder create the following file:
   .env

4. in the .env file add the environment variables:
   MONGO_STRING_CONNECTION= xxx
   PORT= xxx
   JWT_SECRET= xxx
   JWT_EXPIRES_IN= xxx
   JWT_COOKIE_EXPIRES_IN= xxx

5. inside the terminal from the backend/ folder run:
   nodemon server.js

6. inside the terminal from the frontend/ folder run:
   npm run dev

### BARBERAPP PROJECT INFO

- **TITLE**: BarberApp
- **DESCRIPTION**: BarberApp
- **INFO**: BarberApp
- **AUTHORS**: Fabian, Andrei
