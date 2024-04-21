import { useState } from "react";

function Task({ description}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    console.log("Task clicked");
    setIsChecked(!isChecked);
  }

  return (
    <div onClick={handleClick}>
      <input type="checkbox" checked={isChecked} readOnly />
      <label>{description}</label>
    </div>
  );
}

export default Task;
