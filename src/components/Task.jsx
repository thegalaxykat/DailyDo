import { useState } from "react";

function Task({ description }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    console.log("Task clicked");
    setIsChecked(!isChecked);
  };

  return (
    <div> {/* this extra div forces it to take the whole line */}
      <div onClick={handleClick} className="task">
        {/* TODO add a custom checkbox with animation */}
        <input
          type="checkbox"
          checked={isChecked}
          readOnly
          className="checkbox"
        />
        <label className={`strike-through ${isChecked ? "checked" : ""}`}>
          {description}
        </label>
      </div>
    </div>
  );
}

export default Task;
