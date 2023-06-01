import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./stories/Task";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Task task={{ id: "1", title: "TASK", state: "TASK_INBOX" }} />
    </div>
  );
}

export default App;
