import Task from "./task";
import { useState } from "react";

/**
 * TaskGroup component that displays a group of tasks
 *
 * @param title - the title of the task group to be displayed
 * @param tasks - an array of tasks to be displayed
 */
function TaskGroup({ title, tasks }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEdit = () => {
    console.log("Edit tasks");
    // TODO: Implement adding tasks
  };

  return (
    <div
      className="task-group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="task-group-head">
        <h2>{title}</h2>
        {isHovered && (
          <img
            src="/edit.svg"
            alt="Edit tasks"
            className="edit-icon"
            onClick={handleEdit}
          />
        )}
      </div>
      {tasks.map((task, index) => (
        <Task key={index} description={task} />
      ))}
    </div>
  );
}

export default TaskGroup;
