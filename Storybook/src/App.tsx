import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

import Task from "./stories/Task";

function App() {
  const [count, setCount] = useState(0);
  const task = { id: "1", title: "Test Task", state: "TASK_INBOX" };

  return (
    <>
      <Task
        task={task}
        onArchiveTask={(id) => {
          console.log(id);
        }}
        onPinTask={(id) => {
          console.log(id);
        }}
      />
    </>
  );
}

export default App;
