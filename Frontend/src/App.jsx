import { useState } from "react";
import PlanDay from "./components/PlanDay";
import "./App.css";
import "./checkbox.css";

function App() {
  const [tasks, setTasks] = useState(null); // list of task objects

  // load tasks from the db as json
  if (tasks === null) {
    fetch("/get-tasks").then((resp) =>
      resp.json().then((j) => setTasks(j.tasks))
    );
    return <div>Loading...</div>;
  } else {
    // regular page output
    return (
      <div>
        <PlanDay tasks={tasks} />
      </div>
    );
  }
}

export default App;
