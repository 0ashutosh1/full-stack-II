from flask import Flask
from routes.student_routes import student_bp

AUTHOR_NAME = "MRIDUL"
AUTHOR_UID = "23BIS70122"

def create_app():
    app = Flask(__name__)

    # Register Blueprint
    app.register_blueprint(student_bp)

    return app

app = create_app()

@app.route("/")
def home():
    return {
        "message": "Backend Server is running",
        "author": AUTHOR_NAME,
        "uid": AUTHOR_UID,
    }