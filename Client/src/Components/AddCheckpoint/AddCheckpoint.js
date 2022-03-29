import './AddCheckpoint.scss'
import addThis from '../../assets/update.png'
import goBack from '../../assets/goBackArrow.png'

export default function AddCheckpoint() {
    return (
        <div className = 'add-checkpoint-page'>
            <h1 className = 'add-checkpoint-page__page-title'>Add Roadmap Checkpoint.</h1>
            <form className = 'add-checkpoint-page__form'>
                <input type = 'text' id = 'checkpoint-title' placeholder = 'Checkpoint title...' />
                <div className = 'add-checkpoint-page__form-bottom'>
                    <input type = 'text' id = 'checkpoint-due-date' placeholder = 'Due (mm/dd)' />
                    <button className = 'add-checkpoint-page__button'>
                        <img src = {addThis} className = 'add-checkpoint-page__button-img' alt = 'add checkpoint' />
                    </button>
                </div>
            </form>
            <img src = {goBack} className = 'add-checkpoint-page__go-back' alt = 'go back' />
        </div>
    )
}