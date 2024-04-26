import { useState } from "react";

/**
 * popup that allows the user to add a task
 *
 * @param add - a function that adds a new task
 * @param close - a function that closes the popup
 */
function AddTask({ add, close, prompt = "Add a task" }) {
  const [task, setTask] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault(); // override default form submission
    add(task.trim());
  };

  // the first letter is always capitalized
  const handleChange = (evt) => {
    const value = evt.target.value;
    setTask(value.charAt(0).toUpperCase() + value.slice(1));
  };

  return (
    <div>
      <div className="popup">
        <button onClick={close} className="icon-button"><img src="/x.svg" /></button>
        <form className="add-task" onSubmit={handleSubmit}>
          <input
            autoFocus
            value={task}
            type="text"
            placeholder={prompt + "..."}
            onChange={handleChange}
          />
          <button type="submit" className="icon-button"><img src="/plus-square.svg" /></button>
        </form>
      </div>
      <div className="shade" onClick={close}></div>
    </div>
  );
}

export default AddTask;
