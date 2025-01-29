import { useEffect, useState } from "react";
import { Header } from "./components/Header.jsx";
import { AddTask } from "./components/AddTask.jsx";
import { ShowTask } from "./components/ShowTask.jsx";
import { Footer } from "./components/Footer.jsx";

import "./App.css";

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <Footer />
    </div>
  );
}

export default App;
