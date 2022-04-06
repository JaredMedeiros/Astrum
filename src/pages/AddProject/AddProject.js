import './AddProject.scss'
import addThis from '../../assets/update.png'
import goBack from '../../assets/goBackArrow.png'
import {Link, useNavigate} from 'react-router-dom'
import {Component, useState, useEffect} from 'react'
import axios from 'axios'

function AddProject() {

    const [projectName, setProjectName] = useState("");
 

    const navigate = useNavigate();

    async function addProject(event) {
        event.preventDefault();

    try {
  
    const response = await axios.post("http://localhost:5500/projects", {
        
        projectName

    });
    console.log(response.data);
    navigate("/projects");
    } catch (e){
      console.log(e.stack)
    }

  }




    // state = {
    //     projectName: {},

    // };

    // SubmitForm = (e) => {
    //     e.preventDefault();
    //     let apiUrl = "http://localhost:5500/projects"
    //     this.setState({projectName: e.target.value})
        
    //     const response =  axios.post(apiUrl, {
    //         projectName
    //     })

    //     console.log(response.data)
    // }

        return (
            <div className = 'add-project-page'>
                <h1 className = 'add-project-page__page-title'>Add Project.</h1>
                <form className = 'add-project-page__form' onSubmit={addProject}>
                    <input type = 'text' name = 'projectName' id = 'project-name' value={projectName} onChange={(e) => setProjectName(e.target.value)}placeholder = 'Project name...' />
                    {/* <textarea type = 'text' id = 'project-description' placeholder = 'Project description...'/> */}
                    <div className = 'add-project-page__form-bottom'>
                        <button className = 'add-project-page__button'>
                            <img src = {addThis} className = 'add-project-page__button-img' alt = 'add project' />
                        </button>
                    </div>
                </form>
                <Link to="/projects"><img src = {goBack} className = 'add-project-page__go-back' alt = 'go back' /></Link>
            </div>
        )
    }

export default AddProject;