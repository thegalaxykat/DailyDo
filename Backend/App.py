from flask import Flask, send_from_directory, request, redirect
from Database import TaskDatabase as task_db

app = Flask(__name__, static_folder=None)

# Create the tasks table if it doesn't exist
with task_db() as db:
    db.create_database()

BUILD_FOLDER = "../Frontend/build"


@app.route("/")
def get_root():
    return redirect("/index.html")


@app.route("/<path:p>")
def serveFile(p):
    try:
        return send_from_directory(BUILD_FOLDER, p)
    except:
        return ("File not found", 404) # classic


@app.route("/get-tasks", methods=["GET"])
def get_tasks():
    with task_db() as db:
        try:
            tasks = db.get_tasks()
            return {"tasks": tasks}
        except Exception as e:
            return str(e), 400


@app.route("/add-task", methods=["POST"])
def add_task():
    body = request.json
    with task_db() as db:
        try:
            db.add_task(body["task"], body["today"])
            return "", 204 # means successful action with no content
        except Exception as e:
            return str(e), 400 # bad request


@app.route("/delete-task", methods=["POST"])
def delete_task():
    body = request.json
    with task_db() as db:
        try:
            db.delete_task(body["id"])
            return "", 204
        except Exception as e:
            return str(e), 400
