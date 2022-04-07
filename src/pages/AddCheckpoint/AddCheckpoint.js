import './AddCheckpoint.scss'
import addThis from '../../assets/update.png'
import goBack from '../../assets/goBackArrow.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function AddCheckpoint() {

    const [checkpointTitle, setCheckpointTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    
    const navigate = useNavigate();

    async function addCheckpoint(event) {
        event.preventDefault();

    try {
        const newID = window.location.pathname;
        const finalID = newID.slice(15)
    const response = await axios.post(("http://localhost:5500/schedules" + finalID), {
      
        checkpointTitle,
        dueDate,

    });
    console.log(response.data);
    navigate("/sprint-roadmap" + finalID);
    } catch (e){
      console.log(e.stack)
    }

  }

    return (
        <div className = 'add-checkpoint-page'>
            <div className = 'color-bar'>
                <span className = 'color-1'></span>
                <span className = 'color-2'></span>
                <span className = 'color-3'></span>
                <span className = 'color-4'></span>
            </div>
            <h1 className = 'add-checkpoint-page__page-title'>Add Roadmap Checkpoint.</h1>
            <form className = 'add-checkpoint-page__form' onSubmit={addCheckpoint}>
                <input type = 'text' id = 'checkpoint-title' value={checkpointTitle} onChange={(e) => setCheckpointTitle(e.target.value)} placeholder = 'Checkpoint title...' />
                <div className = 'add-checkpoint-page__form-bottom'>
                    <input type = 'text' id = 'checkpoint-due-date' value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder = 'Due (mm/dd)' />
                    <button className = 'add-checkpoint-page__button'>
                        <img src = {addThis} className = 'add-checkpoint-page__button-img' alt = 'add checkpoint' />
                    </button>
                </div>
            </form>
            <img src = {goBack} className = 'add-checkpoint-page__go-back' alt = 'go back' />
        </div>
    )
}