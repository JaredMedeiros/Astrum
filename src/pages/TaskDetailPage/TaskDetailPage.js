import './TaskDetailPage.scss'
import goBack from '../../assets/goBackArrow.png'
import { Component } from 'react'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'

function TaskDetailPage() {

    // state = {
    //     tasks: [],
    // }

    // componentDidMount() {
    //     const newID = window.location.pathname;
    //     const projectID = newID.slice(13, 25);
    //     const taskID = newID.slice(25)
    //     axios.get("http://localhost:5500/projects/" + projectID +"/" + taskID).then((response) => {
    //         this.setState({tasks: response.data})
    //         console.log(response.data.tasks)
    //         // console.log(response.data.projectName)
    //     });
    // }   

    const location = useLocation()
    // const { from } = location.state
    // console.log(location.state.tasks.taskDescription)

    const navigate = useNavigate();


    // render() {
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