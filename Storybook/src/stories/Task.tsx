import React from "react";

import "../index.css";
interface TaskProps {
  task: { id: string; title: string; state: string };
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}
const Task = (props: TaskProps) => {
  const {
    task: { id, title, state },
    onArchiveTask,
    onPinTask,
  } = props;
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};

export default Task;
