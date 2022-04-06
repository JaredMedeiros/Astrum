import './ProjectDashboard.scss'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import axios from 'axios'

class ProjectDashboard extends Component {

    state = {
        thisProject: [],
    }

    componentDidMount() {
        const newID = window.location.pathname;
        const finalID = newID.slice(10);
        axios.get("http://localhost:5500/projects" + finalID).then((response) => {
            this.setState({thisProject: response.data})
            // console.log(response.data)
            // console.log(response.data.projectName)
        });
    }
    
    
      

    render(){
    return (
        <div className = 'project-dashboard'>
            <h1 className = 'project-dashboard__title'>{this.state.thisProject.projectName}</h1>
            <main className = 'project-dashboard__entry-point-list'>
                <Link to={`/task-board/${this.state.thisProject._id}`} className = 'project-dashboard__entry-point'>
                    <div className = 'project-dashboard__entry-point-top'>
                        <div className = 'square'></div>
                    </div>
                    <div className = 'project-dashboard__entry-point-bottom'>
                        <h2 className = 'project-dashboard__entry-point-title'>
                            Task Board
                        </h2>
                    </div>
                </Link>
                <Link to={`/chat/${this.state.thisProject._id}`} className = 'project-dashboard__entry-point'>
                    <div className = 'project-dashboard__entry-point-top'>
                        <div className = 'triangle'></div>
                    </div>
                    <div className = 'project-dashboard__entry-point-bottom'>
                        <h2 className = 'project-dashboard__entry-point-title'>
                            Chat
                        </h2>
                    </div>
                </Link>
                <Link to={`/sprint-roadmap/${this.state.thisProject._id}`} className = 'project-dashboard__entry-point'>
                    <div className = 'project-dashboard__entry-point-top'>
                        <div className = 'circle'></div>
                    </div>
                    <div className = 'project-dashboard__entry-point-bottom'>
                        <h2 className = 'project-dashboard__entry-point-title'>
                            Sprint Roadmap
                        </h2>
                    </div>
                </Link>
                <div className = 'add-team-button-mobile'>
                <h3 className = 'add-team-button-mobile__text'>Team +</h3>
            </div>
            </main>
            <div className = 'add-team-button'>
                <h3 className = 'add-team-button__text'>Team +</h3>
            </div>
        </div>
    )
}
}

export default ProjectDashboard