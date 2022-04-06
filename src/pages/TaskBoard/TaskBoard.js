import {React, Component} from 'react';
import {Link} from 'react-router-dom'
import './TaskBoard.scss';
import addOne from '../../assets/rename.png'
import goBack from '../../assets/goBackArrow.png'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import axios from 'axios';

class TaskBoard extends Component{

    state = {
        tasks: [],
        project:[]
    }

    componentDidMount() {
        const newID = window.location.pathname;
        const finalID = newID.slice(11);
        axios.get("http://localhost:5500/projects" + finalID).then((response) => {
            this.setState({tasks: response.data.tasks, project:response.data})
            console.log(response.data.tasks)
            // console.log(response.data.projectName)
        });
    }     

render() {
    return (
        <div className = 'taskboard'>
            <h1 className = 'taskboard__title'>
                <strong>Task Board —</strong> {this.state.project.projectName}
            </h1>
            <div className = 'taskboard__content-wrapper'>
                <div className = 'taskboard__task-list-border'>
                    <main className = 'taskboard__task-list'>
                        {this.state.tasks.map((task, index) => (
                            <Link to= {`/task-details/${this.state.project._id}`} state={{tasks: task}} key={index} className = 'taskboard__task-line'>
                                <p className = 'taskboard__task-name'><strong>{task.taskName}</strong></p>
                                <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                            </Link>
                        ))}
                    </main>
                </div>
                <Link to={`/add-task/${this.state.project._id}`}><img src = {addOne} className = 'taskboard__add' alt = 'add a task' /></Link>
            </div>
            <Link to={`/dashboard/${this.state.project._id}`}><img src = {goBack} className = 'taskboard__go-back' alt = 'go back to project dashboard' /></Link>
        </div>
    )
}
}

export default TaskBoard