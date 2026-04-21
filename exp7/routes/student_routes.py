from flask import Blueprint, request, jsonify

student_bp = Blueprint("students", __name__, url_prefix="/students")

students = []

# CREATE
@student_bp.route("/", methods=["POST"])
def create_student():
    data = request.get_json()
    students.append(data)
    return jsonify({"message": "Student created", "data": data})

# READ
@student_bp.route("/", methods=["GET"])
def get_students():
    return jsonify(students)

# UPDATE
@student_bp.route("/<int:index>", methods=["PUT"])
def update_student(index):
    data = request.get_json()
    students[index] = data
    return jsonify({"message": "Student updated"})

# DELETE
@student_bp.route("/<int:index>", methods=["DELETE"])
def delete_student(index):
    students.pop(index)
    return jsonify({"message": "Student deleted"})