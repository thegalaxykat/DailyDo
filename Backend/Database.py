import sqlite3

DATABASE = "Backend/database.db"


class TaskDatabase:

    def __init__(self):
        self.conn = None
        self.cursor = None

    def __enter__(self):
        self.conn = sqlite3.connect(DATABASE)  # note: creates if doesn't exist
        self.cursor = self.conn.cursor()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.conn.commit()
        self.conn.close()

    def get_tasks(self):
        self.cursor.execute("SELECT * FROM tasks")
        rows = self.cursor.fetchall()  # return results of query as tuples
        return [dict(id=r[0], task=r[1], complete=r[2], today=r[3]) for r in rows]

    def add_task(self, task, today):
        self.cursor.execute(
            "INSERT INTO tasks (task, complete, today) VALUES (?, ?, ?)",
            [task, 0, today],
        )

    def update_completed(self, id, complete):
        self.cursor.execute("UPDATE tasks SET complete=? WHERE id=?", [complete, id])

    def update_today(self, id, today):
        self.cursor.execute("UPDATE tasks SET today=? WHERE id=?", [today, id])

    def delete_task(self, id):
        self.cursor.execute("DELETE FROM tasks WHERE id=?", [id])

    def create_database(self):
        """
        Create the tasks table if it doesn't exist and add some example tasks
        """
        try:
            self.cursor.execute("SELECT * FROM tasks")
        except sqlite3.OperationalError:
            self.cursor.execute(
                "CREATE TABLE tasks (id INTEGER PRIMARY KEY, task TEXT, complete INTEGER, today TEXT)"
            )
            example_tasks = [
                ("This is a task you'll definitely do today", 0, "I Will"),
                ("This is a task you *might* do today", 0, "I Might"),
                ("Finished tasks are checked off", 1, "I Might"),
            ]
            self.cursor.executemany(
                "INSERT INTO tasks (task, complete, today) VALUES (?, ?, ?)",
                example_tasks,
            )


# Reminder that conn is the connection to the db and cursor is a pointer to the
# db. The cursor is used to execute sql commands and changes must be committed
# to the db through the connection when everything is done the connection needs
# to be closed.
