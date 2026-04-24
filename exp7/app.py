from flask import Flask
from routes.student_routes import student_bp

AUTHOR_NAME = "kumar ashutosh"
AUTHOR_UID = "23bis70130"

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