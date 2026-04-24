# EXPERIMENT 10 - Deployment and DevOps

## Author

- Name: kumar ashutosh
- UID: 23bis70130

## Deployment

### Frontend (Netlify)

| Production URL | Deploy Preview URL |
|---|---|
| https://kumar-23bis70130-exp10-frontend-fs2.netlify.app | https://69e85cf061398c5be8c45c12--kumar-23bis70130-exp10-frontend-fs2.netlify.app |

### Backend

| Service | Production URL | Status |
|---|---|---|
| exp10 RBAC API | https://exp10-backend-23bis70130.onrender.com | Live |

## Objective

Implement a DevOps-oriented full-stack setup with:

- Role-based authorization
- Docker containerization
- Docker Compose setup
- Netlify-ready frontend deployment
- PM2 process management for Node.js backend

## Project Structure

```bash
exp10/
├── backend/
│   ├── src/
│   │   ├── data/users.js
│   │   ├── middleware/auth.js
│   │   ├── routes/authRoutes.js
│   │   ├── routes/protectedRoutes.js
│   │   └── index.js
│   ├── Dockerfile
│   ├── ecosystem.config.cjs
│   └── package.json
├── frontend/
│   ├── app.js
│   ├── index.html
│   ├── styles.css
│   ├── Dockerfile
│   └── netlify.toml
├── docker-compose.yml
└── README.md
```

## Role-Based Authorization

Preloaded users:

- `admin / admin123` -> role `admin`
- `editor / editor123` -> role `editor`
- `viewer / viewer123` -> role `viewer`

Protected API routes:

- `GET /api/access/admin` -> admin only
- `GET /api/access/editor` -> admin or editor
- `GET /api/access/viewer` -> admin, editor, or viewer

## Backend Setup (Node.js)

```bash
cd backend
npm install
npm run dev
```

Backend URL: `http://localhost:5000`

## PM2 Management

Run inside `exp10/backend`:

```bash
npm run start:pm2
npm run pm2:logs
npm run pm2:restart
npm run pm2:stop
npm run pm2:delete
```

## Docker Containerization

Build and run via Docker Compose from `exp10`:

```bash
docker compose up --build
```

Services:

- Frontend: `http://localhost:8080`
- Backend: `http://localhost:5000`

## Deploy Frontend to Netlify

1. Push repository to GitHub.
2. In Netlify, create a new site from Git.
3. Set base directory to `exp10/frontend`.
4. Build command: leave empty (static site).
5. Publish directory: `.`

## Learning Outcomes

- Implemented JWT-based role authorization with middleware.
- Containerized frontend and backend services.
- Managed multi-service local environment with Docker Compose.
- Configured PM2 scripts for production process operations.
- Prepared frontend for Netlify static deployment.
