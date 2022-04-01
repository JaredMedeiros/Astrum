import './AddTeam.scss'
import addThis from '../../assets/update.png'
import goBack from '../../assets/goBackArrow.png'

export default function AddTeam() {
    return (
        <div className = 'add-team-page'>
            <h1 className = 'add-team-page__page-title'>Add Team.</h1>
            <form className = 'add-team-page__form'>
                <input type = 'text' id = 'team-name' placeholder = 'Name...' />
                <input type = 'text' id = 'team-email' placeholder = 'Email...'/>
                <button className = 'add-team-page__button'>
                    <img src = {addThis} className = 'add-team-page__button-img' alt = 'add team' />
                </button>
            </form>
            <div className = 'add-team-page__team-list'>
                </div>
            <img src = {goBack} className = 'add-team-page__go-back' alt = 'go back' />
        </div>
    )
}