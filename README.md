# Full Stack Project (Basic Setup)

This repository is the starting point for a full-stack web application. It currently contains a minimal, working frontend and backend structure so you can clone or fork it and adapt it for your personal projects.

This README explains the current state of the project, how to run it locally, the folder structure, and the dependencies currently used in each side (frontend/backend).

## Current project status

- This is an early/basic setup for a full-stack app.
- Frontend: Vite + React app scaffolded with routing, Redux state management, and Tailwind for styling.
- Backend: Basic Express server with middleware and a MongoDB connection helper (via Mongoose).

The project is intended to be expanded into a complete product. Feel free to fork/clone and use the structure as a starting point.

## Repo layout

- `frontend/` — React application built with Vite. Contains UI, routes, Redux store, and Tailwind CSS.
- `backend/` — Node/Express API server. Contains configuration for database connection, routes, middleware, and models.

## Quick start (clone & run)

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

2. Install and run the backend

```bash
cd backend
# install dependencies
npm install
# run in development mode (nodemon)
npm run dev
```

- The backend listens on the port specified by the `PORT` env var (defaults to 5000).
- The backend listens on the port specified by the `PORT` env var (defaults to 5000).
- To make setup easier there's a `backend/.env.example` file included that lists the environment variables the server expects. Copy it to `backend/.env` and fill in the values before starting the server.

Example (`backend/.env.example`):

```bash
PORT=3000        # Optional override for the server port (dev example). The app will use PORT or fall back to 5000.
MONGODB_URL=""   # MongoDB connection string (e.g. mongodb+srv://user:pass@cluster0.mongodb.net)
DB_NAME=""        # Optional database name used by your DB connection logic
```

See `backend/src/config/dbConfig.js` for the exact environment variable usage and any additional keys required by your DB driver or services.

3. Install and run the frontend

```bash
cd frontend
npm install
npm run dev
```

- The frontend dev server (Vite) typically runs at `http://localhost:5173` by default. It will be able to call the backend API (CORS is enabled in the backend by default).

## What this project includes now

Frontend:
- Vite dev environment and build tooling
- React + React DOM
- React Router for client-side routing
- Redux + React-Redux for app-wide state management (Toolkit is also installed)
- Tailwind CSS for utility-first styling

Backend:
- Express server (using modern ES module style)
- Middleware: body parsing, cookie parsing, CORS, Helmet for security headers, compression, request logging (morgan)
- Mongoose for MongoDB connection and models
- JWT and bcryptjs for potential auth flows
- Basic route mounting and an error handler

## Current dependency lists

These are the dependencies as they exist today in the repository's package manifests.

### Frontend dependencies

From `frontend/package.json`:

- @reduxjs/toolkit
- @tailwindcss/vite
- react
- react-dom
- react-redux
- react-router
- redux
- tailwindcss

Dev dependencies (frontend):

- @eslint/js
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- vite


### Backend dependencies

From `backend/package.json`:

- bcryptjs
- compression
- cookie-parser
- cors
- dotenv
- express (v5+ in package.json)
- helmet
- jsonwebtoken
- mongoose
- morgan

Dev dependencies (backend):

- eslint
- eslint-config-prettier
- eslint-plugin-prettier
- nodemon
- prettier


## How you can use / adapt this repo

- Fork or clone the repo and modify the frontend and backend code to implement your features.
- Add environment variables for DB connection and any external services (e.g., OAuth, third-party APIs).
- Expand the `backend/src/routes` and `backend/src/models` folders to add new endpoints and DB schemas.
- Expand the `frontend/src` folder with routes, components, and connect them to the API.



