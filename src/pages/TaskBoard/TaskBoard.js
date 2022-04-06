import {React, Component} from 'react';
import {Link} from 'react-router-dom'
import './TaskBoard.scss';
import addOne from '../../assets/rename.png'
import goBack from '../../assets/goBackArrow.png'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import axios from 'axios';
import PageHeader from '../../Components/PageHeader/PageHeader';
import PageFooter from '../../Components/PageFooter/PageFooter';

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
        <>
        <PageHeader/>
        <div className = 'taskboard'>
            <h1 className = 'taskboard__title'>
                <strong>Task Board —</strong> {this.state.project.projectName}
            </h1>
            <div className = 'taskboard__content-wrapper'>
                <div className = 'taskboard__task-list-border'>
                    <main className = 'taskboard__task-list'>
                        {this.state.tasks.map((task, index) => (
                            <div  className = 'taskboard__task-line'  key={index}>
                                <Link  className = 'taskboard__task-name' to= {`/task-details/${this.state.project._id}`} state={{tasks: task}}>
                                    <p><strong>{task.taskName}</strong></p>
                                </Link>
                                <EditText className = 'taskboard__task-status' placeholder = 'status'/>
                            </div>
                        ))}
                    </main>
                </div>
                <Link to={`/add-task/${this.state.project._id}`}><img src = {addOne} className = 'taskboard__add' alt = 'add a task' /></Link>
            </div>
            <Link to={`/dashboard/${this.state.project._id}`}><img src = {goBack} className = 'taskboard__go-back' alt = 'go back to project dashboard' /></Link>
        </div>
        <PageFooter/>
        </>
    )
}
}

export default TaskBoard