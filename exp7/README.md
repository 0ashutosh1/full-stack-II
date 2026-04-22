# EXPERIMENT 7 - Develop RESTful APIs using Backend Framework (Flask)

## Author

- Name: MRIDUL
- UID: 23BIS70122

## Project Overview

This experiment demonstrates how to build a simple RESTful API using Flask with CRUD operations for a student resource.

## Backend Deployment

| Service | Production URL | Status |
|---|---|---|
| exp7 API | Not deployed yet | Pending |

## Project Structure

```bash
Experiment7/
├── app.py
├── run.py
├── routes/
│   └── student_routes.py
├── requirements.txt
├── README.md
└── virenv/
```

## Technologies Used

- Python
- Flask
- REST API
- JSON responses
- Virtual environment

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /students/ | Create a student |
| GET    | /students/ | Get all students |
| PUT    | /students/<id> | Update a student |
| DELETE | /students/<id> | Delete a student |

## Learning Outcomes

- Understood how to structure a Flask application using blueprints.
- Learned how to create RESTful CRUD endpoints.
- Practiced request handling with JSON payloads.
- Learned how to return API responses using Flask `jsonify`.
- Gained hands-on experience with backend API development.

## Run the Project

```bash
python run.py
```

## Notes

- The current API stores student data in memory.
- Data is lost when the server restarts.
- This project can be extended with database integration in a future experiment.
