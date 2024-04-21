import { useState } from "react";
import "../App.css";
import Task from "./Task";

function PlanDay() {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateString = date.toLocaleDateString("en-US", options);

  return (
    <div>
      <h1>Today is {dateString}</h1>
      <h2>I Will</h2>
      <Task description={"Start this project"}/>
      <Task description={"Write some more example tasks"}/>
      <h2>I Might</h2>
      <Task description={"Eat an apple"}/>
      <Task description={"Watch Star Wars"}/>
      <Task description={"Name a fish Bert"}/>
    </div>
  );
}

export default PlanDay;
