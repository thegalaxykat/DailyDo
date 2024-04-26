import sqlite3

connection = sqlite3.connect('database.db')
cursor = connection.cursor() # execute sql commands

cursor.execute("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, task TEXT, status TEXT, due_date TEXT, do_it_date TEXT, today TEXT)")

example_tasks = [
    (1, "This is a task you'll definitely do today", "Not Started", None, None, "I Will"),
    (2, "This is a task you *might* do today", "Not Started", None, None, "I Might"),
    (3, "Finished tasks are checked off", "Done", None, None, "I Might")]

cursor.executemany("INSERT INTO tasks (id, task, status, due_date, do_it_date, today) VALUES (?, ?, ?, ?, ?, ?)", example_tasks)

connection.commit()  # actually save changes to db
connection.close()
