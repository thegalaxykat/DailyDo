import { useState } from "react";
import TaskGroup from "./TaskGroup";

function PlanDay() {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateString = date.toLocaleDateString("en-US", options);

  return (
    <div className="block">
        <h1>Today is {dateString}</h1>
        <TaskGroup title={"I Will"} tasks={["Start this project", "Write more example tasks"]}/>
        <TaskGroup title={"I Might"} tasks={["Eat an apple", "Watch Star Wars", "Name a fish Bert"]}/>
    </div>
  );
}

export default PlanDay;
