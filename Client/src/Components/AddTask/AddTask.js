import './AddTask.scss'
import addThis from '../../assets/update.png'
import goBack from '../../assets/goBackArrow.png'

export default function AddTask() {
    return (
        <div className = 'add-task-page'>
            <h1 className = 'add-task-page__page-title'>Add task.</h1>
            <form className = 'add-task-page__form'>
                <input type = 'text' id = 'task-name' placeholder = 'task name...' />
                <textarea type = 'text' id = 'task-description' placeholder = 'task description...'/>
                <div className = 'add-task-page__form-bottom'>
                    <div className = 'add-task-page__add-team'>
                        <h3 className = 'add-task-page__add-team-text'>Assign</h3>
                    </div>
                    <button className = 'add-task-page__button'>
                        <img src = {addThis} className = 'add-task-page__button-img' alt = 'add task' />
                    </button>
                </div>
            </form>
            <img src = {goBack} className = 'add-task-page__go-back' alt = 'go back' />
        </div>
    )
}