import Task from "./Task";
import { useState } from "react";
import AddTask from "./AddTask";

/**
 * TaskGroup component that displays a group of tasks
 *
 * @param type - the title of the task group to be displayed
 * @param tasks - an array of tasks objects to be displayed
 */
function TaskGroup({ type, tasks }) {
  const [isHovered, setIsHovered] = useState(false);
  const [AddingTask, setAddingTask] = useState(false);

  const closeAddTask = () => {
    setIsHovered(false);
    setAddingTask(false);
  };

  // TODO sanitize input
  const addNewTask = (newTask) => {
    // if (newTask !== "") {
    //   console.log("Adding task...");
    //   fetch("/add-task", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ task: newTask, today: type }),
    //   });
      setAddingTask(false);
    // }
  };

  const deleteTask = (id) => {
    // console.log("Deleting task...");
    // fetch("/delete-task", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ id: id }),
    // });
  };

  return (
    <div
      className="task-group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="task-group-head">
        <h2 onClick={() => setAddingTask(true)}>{type}</h2>
        {isHovered && (
          <img
            src="/edit.svg"
            alt="Edit tasks"
            className="edit-icon"
            onClick={() => setAddingTask(true)}
          />
        )}
      </div>
      {tasks.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          description={item.task}
          deleteTask={deleteTask}
          checked={item.complete}
        />
      ))}
      {AddingTask && (
        <AddTask add={addNewTask} close={closeAddTask} prompt={type} />
      )}
    </div>
  );
}

export default TaskGroup;
