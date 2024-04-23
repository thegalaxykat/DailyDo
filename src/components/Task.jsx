import { useState } from "react";
import Checkbox from "./Checkbox";

function Task({ description }) {
  const [isChecked, setIsChecked] = useState(false);

  // using this instead of just OnClick for the checkbox so that you can click the label too
  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div> {/* this extra div forces it to take the whole line */}
      <div onClick={handleClick} className="task">
        <Checkbox checked={isChecked} />
        <label className={`strike-through ${isChecked ? "checked" : ""}`}>
          {description}
        </label>
      </div>
    </div>
  );
}

export default Task;
