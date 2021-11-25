import { useState } from "react"
import AddTask from "./componenet/AddTask";
import ShowList from "./componenet/ShowList";
import Tasks from "./componenet/Tasks";


function App() {
  const [tasks, setTask] = useState([

  
  ])

  const deleteTask =(id)=>{
    setTask(tasks.filter((task)=> task.id !== id))
  }
const addInlist =(task)=>{
  const id = Math.floor(Math.random()*100) +1;
  const newTask = {id, ...task};
  setTask([...tasks, newTask])
}
const [showHideList, setShowHideList]= useState(false)
const ListVision= ()=>{
  setShowHideList(!showHideList)
}

  return (
    <div className="all">
      <AddTask taskInlist={addInlist}   />
      <div className="list">
      <ShowList ListVision={ListVision} showHideList={showHideList} />
   
{ showHideList && <Tasks tasks={tasks} deleteTask={deleteTask} />}

      </div>
    </div>
  );
}




export default App;
