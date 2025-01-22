import { useState } from 'react';
import { TaskCard } from './TaskCard.jsx';

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
            <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
        ))}
        </ul>
        <div className="box success">
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, tempora?</p>
        </div>
        <div className="box warning">
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, tempora?</p>
        </div>
        <div className="box alert">
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, tempora?</p>
        </div>
    </>
  )
}