import React from 'react';


const Tasks = ({tasks,deleteTask}) => {
    return (
        <ul> 
        { tasks.map((task)=>(
           
                <li key={task.id} >{task.name} {task.Description} <button className="d-btn" onClick={()=> deleteTask(task.id)} >Delete</button> </li>
            
        ))}
        </ul>
    );
};

export default Tasks;