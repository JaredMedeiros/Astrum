import './TaskDetailPage.scss'
import goBack from '../../assets/goBackArrow.png'
import { Component } from 'react'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'

function TaskDetailPage() {
  
    const location = useLocation()
    const navigate = useNavigate();

    return (
        <main className = 'task-detail'>
            <div className = 'task-detail__content-wrap'>
                <div className = 'task-detail__top'>
                    <h1 className = 'task-detail__title'>{location.state.tasks.taskName}</h1>
                    <p className = 'task-detail__status'>In Review</p>
                </div>
                <p className = 'task-detail__details'>
                    <strong>Details: </strong> 
                    {location.state.tasks.taskDescription}
                </p>
                <div className = 'task-detail__coder-holder'>
                    <p className = 'task-detail__coder'>{location.state.tasks.assignedTo}</p>
                </div>
            </div>
            <img onClick={() => navigate(-1)} src = {goBack} className = 'task-detail__go-back' alt = 'go back to task board' />
        </main>
    )
    // }
}

export default TaskDetailPage