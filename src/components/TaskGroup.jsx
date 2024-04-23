import Task from "./task";
import { useState } from "react";
import AddTask from "./AddTask";

/**
 * TaskGroup component that displays a group of tasks
 *
 * @param title - the title of the task group to be displayed
 * @param tasks - an array of tasks to be displayed
 */
function TaskGroup({ title, tasks }) {
  const [isHovered, setIsHovered] = useState(false);
  const [AddingTask, setAddingTask] = useState(false);

  const closeAddTask = () => {
    setIsHovered(false);
    setAddingTask(false);
  };

  const addNewTask = (newTask) => {
    if (newTask !== "") {
      tasks.push(newTask);
      setAddingTask(false);
    }
  };

  return (
    <div
      className="task-group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="task-group-head">
        <h2>{title}</h2>
        {isHovered && (
          <img
            src="/edit.svg"
            alt="Edit tasks"
            className="edit-icon"
            onClick={() => setAddingTask(true)}
          />
        )}
      </div>
      {tasks.map((task, index) => (
        <Task key={index} description={task} />
      ))}
      {AddingTask && <AddTask add={addNewTask} close={closeAddTask} />}
    </div>
  );
}

export default TaskGroup;
