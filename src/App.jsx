import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { TaskList } from "./components/TaskList.jsx";
import { AddTask } from "./components/AddTask.jsx";
import { ShowTask } from "./components/ShowTask.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <ShowTask />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
