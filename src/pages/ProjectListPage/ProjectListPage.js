import './ProjectListPage.scss';
import projectArrow from '../../assets/arrowToProject.png';
import more from '../../assets/rename.png';
import gradientCircle from '../../assets/greenboy.png'
import { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import AddProject from '../AddProject/AddProject';


class ProjectListPage extends Component {

    state = {
        projects: [],
    }

    componentDidMount() {
        axios.get("http://localhost:5500/projects")
             .then ((res) => {
                 let arrayResponse = [res.data]
                 this.setState({arrayResponse})
             })
    }         
    
    render()
        { 
        return (
            <div className = 'pl-page'>
                <main className = 'pl-page__project-container'>
                    {this.state.projects.map((projects)=> (
                        <div key={projects.id} className = 'pl-page__project-list'>
                            <div className = 'pl-page__project-line'>
                                <h1 className = 'pl-page__project-title'>{projects.projectName}</h1>
                                <img src = {projectArrow} className = 'pl-page__arrow' alt = 'arrow to project' />
                            </div>    
                        </div>
                    ))}   
                    <p className = 'pl-page__tagline'>collaborate.<i> simply</i></p>
                </main>
                <Link to="/add-project"><img src = {more} className = 'pl-page__add-project' alt = 'add more' /></Link>
                <img src = {gradientCircle} className = 'pl-page__gradient-circle' alt = '' />

            </div>
        )
    }
}

export default ProjectListPage;