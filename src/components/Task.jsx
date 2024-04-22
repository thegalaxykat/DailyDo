import { useState } from "react";
import Checkbox from "./Checkbox";

function Task({ description }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    console.log("Task clicked");
    setIsChecked(!isChecked);
  };

  return (
    <div> {/* this extra div forces it to take the whole line */}
      <div onClick={handleClick} className="task">
        <Checkbox checked={isChecked} />
        {/* <input
          type="checkbox"
          checked={isChecked}
          readOnly
        /> */}
        <label className={`strike-through ${isChecked ? "checked" : ""}`}>
          {description}
        </label>
      </div>
    </div>
  );
}

export default Task;
