import { useState } from "react";

function AddTask({ add, close }) {
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
      <form className="add-task" onSubmit={handleSubmit}>
        <input
          value={task}
          type="text"
          placeholder="Add a task"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <div className="shade" onClick={close}></div>
    </div>
  );
}

export default AddTask;
