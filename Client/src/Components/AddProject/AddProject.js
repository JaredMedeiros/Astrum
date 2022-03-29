import './AddProject.scss'
import addThis from '../../assets/update.png'
import goBack from '../../assets/goBackArrow.png'

export default function AddProject() {
    return (
        <div className = 'add-project-page'>
            <h1 className = 'add-project-page__page-title'>Add Project.</h1>
            <form className = 'add-project-page__form'>
                <input type = 'text' id = 'project-name' placeholder = 'Project name...' />
                <textarea type = 'text' id = 'project-description' placeholder = 'Project description...'/>
                <div className = 'add-project-page__form-bottom'>
                    <div className = 'add-project-page__add-team'>
                        <h3 className = 'add-project-page__add-team-text'>Add team</h3>
                    </div>
                    <button className = 'add-project-page__button'>
                        <img src = {addThis} className = 'add-project-page__button-img' alt = 'add project' />
                    </button>
                </div>
            </form>
            <img src = {goBack} className = 'add-project-page__go-back' alt = 'go back' />
        </div>
    )
}