import './TaskDetailPage.scss'
import goBack from '../../assets/goBackArrow.png'

export default function TaskDetailPage() {
    return (
        <main className = 'task-detail'>
            <div className = 'task-detail__content-wrap'>
                <div className = 'task-detail__top'>
                    <h1 className = 'task-detail__title'>Task C</h1>
                    <p className = 'task-detail__status'>In Review</p>
                </div>
                <p className = 'task-detail__details'>
                    <strong>Details: </strong> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
                <div className = 'task-detail__coder-holder'>
                    <p className = 'task-detail__coder'>Johnny Coder</p>
                </div>
            </div>
            <img src = {goBack} className = 'task-detail__go-back' alt = 'go back to task board' />
        </main>
    )
}