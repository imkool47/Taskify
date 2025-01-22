import { useState } from 'react';

export const TaskList = () => {
      const [task, setTask] = useState([
        {id:5271, name: "Watch React Lectures",completed: true},
        {id:7825, name: "Practice React Code",completed: false},
        {id:8391, name: "Practice React Interview",completed: false},
    ]);
    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTask(task.filter((task) => id !== task.id))
    }

  return (
    <> 
    <h1>Task List</h1>
    <ul>
        <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
        { show && task.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
                <span>{task.id} - {task.name}</span>
                <button onClick={() => handleDelete(task.id)}  className='delete'>Delete</button>
            {/* <button>Mark as {task.completed ? "incomplete" : "complete"}</button> */}
            </li> 
            ))}
        </ul>
    </>
  )
}