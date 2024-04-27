import { useState } from "react";
import Checkbox from "./Checkbox";

function Task({ description, deleteTask, id }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // using this instead of just OnClick for the checkbox so that you can click the label too
  const handleClick = () => {
    setIsChecked(!isChecked);
    // update the task in the database
    // TODO
  };

  return (
    <div className="flexbox" onMouseEnter={() => setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)} >
      <div onClick={handleClick} className="task">
        <Checkbox checked={isChecked} />
        <label className={`strike-through ${isChecked ? "checked" : ""}`}>
          {description}
        </label>
      </div>
        {isHovered && (
          <img
            src="/trash.svg"
            alt="delete task"
            className="delete-icon"
            onClick={() => deleteTask(id)}
          />
        )}
    </div>
  );
}

export default Task;
