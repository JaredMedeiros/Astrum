import Pomodoro from '../Pomodoro/Pomodoro'
import Notes from '../Notes/Notes'
import goBack from '../../assets/goBackArrow.png'
import './WorkblockPage.scss'

export default function WorkblockPage() {
    return (
        <main className = 'workblock'>
            <h1 className = 'workblock__title'>Workblock</h1>
            <img src = {goBack} className = 'workblock__go-back' alt = 'go back to project dash board' />
            <Pomodoro/>
            <Notes/>
        </main>
    )
}