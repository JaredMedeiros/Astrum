import './SprintRoadmap.scss'
import addOne from '../../assets/rename.png'
import goBack from '../../assets/goBackArrow.png'

export default function SprintRoadmap() {
    return (
        <div className = 'sprint-roadmap'>
            <h1 className = 'sprint-roadmap__page-title'>Sprint 3 Roadmap</h1>
            <div className = 'sprint-roadmap__wrap'>
            <main className = 'sprint-roadmap__container'>
                {/* replace this with a map function */}
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>
                <div className = 'sprint-roadmap__goal'>
                    <h2 className = 'sprint-roadmap__goal-title'>Task C Due</h2>
                    <p className = 'sprint-roadmap__goal-date'>05/07</p>
                </div>  
            </main>  
            <img src = {addOne} className = 'sprint-roadmap__add' alt = 'add a goal' />
            </div>
            <img src = {goBack} className = 'sprint-roadmap__go-back' alt = 'go back to project dashboard' />
        </div>
    )
}