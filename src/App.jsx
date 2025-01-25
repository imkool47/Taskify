import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { TaskList } from "./components/TaskList.jsx";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
