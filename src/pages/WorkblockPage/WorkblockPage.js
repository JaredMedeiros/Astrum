import Pomodoro from '../../Components/Pomodoro/Pomodoro'
import Notes from '../../Components/Notes/Notes'
import goBack from '../../assets/goBackArrow.png'
import './WorkblockPage.scss'
import {useLocation, useNavigate} from 'react-router-dom'

export default function WorkblockPage() {

    const location = useLocation()
    const navigate = useNavigate();

    return (
        <main className = 'workblock'>
            <h1 className = 'workblock__title'>Workblock</h1>
            <img onClick={() => navigate(-1)} src = {goBack} className = 'workblock__go-back' alt = 'go back to project dash board' />
            <Pomodoro/>
            <Notes/>
        </main>
    )
}