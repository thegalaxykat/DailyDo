import { useState, useEffect } from "react";
import TaskGroup from "./TaskGroup";

function PlanDay( {tasks}) {
  // filter tasks into will and might
  const [willTasks, setWillTasks] = useState([]);
  const [mightTasks, setMightTasks] = useState([]);

  // update when tasks changes
  useEffect(() => {
    setWillTasks(tasks.filter(task => task.today === 'I Will'));
    setMightTasks(tasks.filter(task => task.today === 'I Might'));
  }, [tasks]);

  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateString = date.toLocaleDateString("en-US", options);

  return (
    <div className="block">
      <h1>Today is {dateString}</h1>
      <TaskGroup type={"I Will"} tasks={willTasks} />
      <TaskGroup type={"I Might"} tasks={mightTasks}/>
    </div>
  );
}

export default PlanDay;
