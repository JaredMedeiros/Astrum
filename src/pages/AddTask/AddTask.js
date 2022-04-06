import './AddTask.scss'
import addThis from '../../assets/update.png'
import goBack from '../../assets/goBackArrow.png'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

export default function AddTask() {

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    // const [thisProject, setThisProject] = useState("")
 

    const navigate = useNavigate();

    async function addTask(event) {
        event.preventDefault();

    try {
        const newID = window.location.pathname;
        const finalID = newID.slice(9)
    const response = await axios.post(("http://localhost:5500/tasks" + finalID), {
      
        taskName,
        taskDescription,
        assignedTo

    });
    console.log(response.data);
    navigate("/task-board" + finalID);
    } catch (e){
      console.log(e.stack)
    }

  }

    return (
        <div className = 'add-task-page'>
            <h1 className = 'add-task-page__page-title'>Add task.</h1>
            <form className = 'add-task-page__form' onSubmit={addTask}>
                <input type = 'text' id = 'task-name' value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder = 'task name...' />
                <textarea type = 'text' id = 'task-description' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder = 'task description...'/>
                <div className = 'add-task-page__form-bottom'>
                <input type = 'text' id = 'task-asignee' value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} placeholder = 'Assign' />
                    <button className = 'add-task-page__button'>
                        <img src = {addThis} className = 'add-task-page__button-img' alt = 'add task' />
                    </button>
                </div>
            </form>
            <img src = {goBack} className = 'add-task-page__go-back' alt = 'go back' />
        </div>
    )
}