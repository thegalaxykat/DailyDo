import { useState } from "react";
import Checkbox from "./Checkbox";

function Task({ description, deleteTask, id, checked }) {
  const [isChecked, setIsChecked] = useState(Boolean(checked));
  const [isHovered, setIsHovered] = useState(false);

  // using this instead of just OnClick for the checkbox so that you can click the label too
  const handleClick = () => {
    const new_state = !isChecked;
    // update the task in the database
    fetch("/update-completed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        complete: new_state ? 1 : 0,
      }),
    });
    setIsChecked(new_state);
  };

  return (
    <div
      className="flexbox"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
