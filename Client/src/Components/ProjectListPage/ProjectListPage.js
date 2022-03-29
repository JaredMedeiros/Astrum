import './ProjectListPage.scss';
import projectArrow from '../../assets/arrowToProject.png';
import more from '../../assets/rename.png';
import gradientCircle from '../../assets/greenboy.png'


export default function ProjectListPage() {
    return (
        <div className = 'pl-page'>
            <main className = 'pl-page__project-container'>
                <div className = 'pl-page__project-list'>
                    {/* Replace this with a map that runs through the backend data */}
                    <div className = 'pl-page__project-line'>
                        <h1 className = 'pl-page__project-title'>Project A</h1>
                        <img src = {projectArrow} className = 'pl-page__arrow' alt = 'arrow to project' />
                    </div>
                    <div className = 'pl-page__project-line'>
                        <h1 className = 'pl-page__project-title'>Project B</h1>
                        <img src = {projectArrow} className = 'pl-page__arrow' alt = 'arrow to project' />
                    </div>
                    <div className = 'pl-page__project-line'>
                        <h1 className = 'pl-page__project-title'>Project C</h1>
                        <img src = {projectArrow} className = 'pl-page__arrow' alt = 'arrow to project' />
                    </div>    
                </div>    
                <p className = 'pl-page__tagline'>collaborate.<i> simply</i></p>
            </main>
            <img src = {more} className = 'pl-page__add-project' alt = 'add more' />
            <img src = {gradientCircle} className = 'pl-page__gradient-circle' alt = '' />

        </div>
    )
}