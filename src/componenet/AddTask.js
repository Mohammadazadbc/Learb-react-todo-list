import React, { useCallback, useState } from 'react';

const AddTask = ({taskInlist}) => {
    const [name, setName] = useState('');
    const [Description, setDescription] = useState('')

    const onSubmit =(e)=>{
        e.preventDefault();
        if(!name){
            alert('empty input')
            return;
        }
        taskInlist({name, Description})
        setName('')
        setDescription('')
    }

  
    return (
        <>
        <h1>TODO LIST</h1>
        <form onSubmit={onSubmit} > 
            <div> <label>Enter Name of Todo</label> <input className="input" value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Type the name of todo..."></input> </div>
            <div> <label>Enter a description</label> <input value={Description} onChange={(e)=> setDescription(e.target.value)}  className="input" type="text" placeholder="Type here the description..."></input> </div>
            <button className="btn" type="submit">ADD TASK</button>
        </form>
   </>
    );
};

export default AddTask;