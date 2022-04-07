import Pomodoro from '../../Components/Pomodoro/Pomodoro'
import Notes from '../../Components/Notes/Notes'
import goBack from '../../assets/goBackArrow.png'
import './WorkblockPage.scss'
import {useLocation, useNavigate} from 'react-router-dom'
import logo from '../../assets/Final-Logo-Green.png'

export default function WorkblockPage() {

    const location = useLocation()
    const navigate = useNavigate();

    return (
        <main className = 'workblock'>
            <div className = 'color-bar'>
                <span className = 'color-1'></span>
                <span className = 'color-2'></span>
                <span className = 'color-3'></span>
                <span className = 'color-4'></span>
            </div>
            <img className = 'workblock__logo' src = {logo} alt = 'Astrum logo'/>
            <img onClick={() => navigate(-1)} src = {goBack} className = 'workblock__go-back' alt = 'go back to project dash board' />
            <Pomodoro/>
            <Notes/>
        </main>
    )
}