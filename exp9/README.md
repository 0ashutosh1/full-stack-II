# EXPERIMENT 9 - Implement Authentication using JWT

## Author

- Name: kumar ashutosh
- UID: 23bis70130

## Project Overview

This experiment demonstrates authentication using Flask with Basic Auth, token-based login, and JWT-protected routes.

## Backend Deployment

| Service | Production URL | Status |
|---|---|---|
| exp9 API | https://exp9-backend-23bis70130.onrender.com | Live |

## Project Structure

```bash
Experiment9/
├── app.py
├── README.md
└── venv/
```

## Technologies Used

- Python
- Flask
- Flask-JWT-Extended
- JSON APIs
- Postman
- Virtual Environment (venv)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /basic-protected | Basic authentication protected route |
| POST | /token-login | Generate simple token |
| GET | /token-protected | Token protected route |
| POST | /jwt-login | Generate JWT access token |
| GET | /jwt-protected | JWT protected route |

## Learning Outcomes

- Understood the difference between authentication and authorization.
- Implemented Basic Authentication with Flask.
- Generated and verified tokens for protected routes.
- Used JWT for secure route access.
- Tested API endpoints with Postman.

## Run the Project

```bash
python app.py
```
