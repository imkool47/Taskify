import { useState } from "react";
import { TaskCard } from "./TaskCard.jsx";
import { BoxCard } from "./BoxCard.jsx";
import "./TaskList.css";

export const TaskList = () => {
  const [task, setTask] = useState([
    { id: 5271, name: "Watch React Lectures", completed: true },
    { id: 7825, name: "Practice React Code", completed: false },
    { id: 8391, name: "Practice React Interview", completed: false },
  ]);
  const [show, setShow] = useState(true);

  const styles = {
    color: "#be3434",
    border: "1px solid #be3434",
    borderRadius: "5px",
    fontSize: "28px",
    padding: "20px"
  }

  function handleDelete(id) {
    setTask(task.filter((task) => id !== task.id));
  }

  return (
    <div className="tasklist">
      <h1 style={styles}>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          task.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, tempora?
        </p>
      </BoxCard>

      <BoxCard result="alert">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, tempora?
        </p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, tempora?
        </p>
      </BoxCard>
    </div>
  )
}
