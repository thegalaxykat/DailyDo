import Task from "./Task";
import { useState } from "react";

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
