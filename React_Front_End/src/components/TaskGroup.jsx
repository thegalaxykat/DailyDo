import Task from "./Task";
import { useState } from "react";
import AddTask from "./AddTask";

/**
 * TaskGroup component that displays a group of tasks
 *
 * @param title - the title of the task group to be displayed
 * @param tasks - an array of tasks to be displayed
 */
function TaskGroup({ type, tasks }) {
  const [isHovered, setIsHovered] = useState(false);
  const [AddingTask, setAddingTask] = useState(false);

  const [temp, setTemp] = useState(false); // see line 32

  const closeAddTask = () => {
    setIsHovered(false);
    setAddingTask(false);
  };

  const addNewTask = (newTask) => {
    // technically this should be a POST request to a database but I'm just using a temporary array
    if (newTask !== "") {
      tasks.push(newTask);
      setAddingTask(false);
    }
  };

  const deleteTask = (id) => {
    tasks.splice(id, 1);
    // this is a hacky way to force a re-render but it's temporary since soon I'll be moving all of this to a database
    setTemp(!temp);
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
      {tasks.map((task, index) => (
        <Task
          key={index}
          id={index}
          description={task}
          deleteTask={deleteTask}
        />
      ))}
      {AddingTask && (
        <AddTask add={addNewTask} close={closeAddTask} prompt={type} />
      )}
    </div>
  );
}

export default TaskGroup;
