import './ProjectListPage.scss';
import projectArrow from '../../assets/arrowToProject.png';
import more from '../../assets/rename.png';
import gradientCircle from '../../assets/greenboy.png'
import { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import AddProject from '../AddProject/AddProject';
import PageHeader from '../../Components/PageHeader/PageHeader';
import PageFooter from '../../Components/PageFooter/PageFooter';


class ProjectListPage extends Component {

    state = {
        projects: [],
    }

    componentDidMount() {
        axios.get("http://localhost:5500/projects")
             .then ((res) => {
                 this.setState({projects: res.data})
             })
    }         
    
    render()
        { 
        return (
            <>
            {/* <PageHeader/> */}
            <div className = 'pl-page'>
                <main className = 'pl-page__project-container'>
                    {this.state.projects.map((project, index)=> (
                        <div key={index} className = 'pl-page__project-list'>
                            <div className = 'pl-page__project-line'>
                                <h1 className = 'pl-page__project-title'>{project.projectName}</h1>
                                <Link className = 'pl-page__arrow' to={`/dashboard/${project._id}`}><img  src = {projectArrow} alt = 'arrow to project' /></Link>
                            </div>    
                        </div>
                    ))}   
                    <p className = 'pl-page__tagline'>collaborate.<i> simply</i></p>
                </main>
                <Link to="/add-project"><img src = {more} className = 'pl-page__add-project' alt = 'add more' /></Link>
            </div>
            {/* <PageFooter/> */}
            </>
        )
    }
}

export default ProjectListPage;