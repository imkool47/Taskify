import { useRef, useState } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  // const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
  const taskRef = useRef("");

  // const handleChange = (event) => {
  //   setTaskValue(event.target.value);
  // };

  const handelReset = () => {
    // setTaskValue("");
    taskRef.current.value = "";
    setProgress(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 100000),
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    handelReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          maxLength="25"
          ref={taskRef}
        />

        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>

        <button type="submit">Add Task</button>
        <span onClick={handelReset} className="reset">
          Reset
        </span>
      </form>
      <p>{taskRef.current.value}</p>
    </section>
  );
};
