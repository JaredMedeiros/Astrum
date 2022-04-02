import './ProjectDashboard.scss'


export default function ProjectDashboard() {

    return (
        // this name will be populated dynamically
        <div className = 'project-dashboard'>
            <h1 className = 'project-dashboard__title'>Project C</h1>
            <main className = 'project-dashboard__entry-point-list'>
                <div className = 'project-dashboard__entry-point'>
                    <div className = 'project-dashboard__entry-point-top'>
                        <div className = 'square'></div>
                    </div>
                    <div className = 'project-dashboard__entry-point-bottom'>
                        <h2 className = 'project-dashboard__entry-point-title'>
                            Task Board
                        </h2>
                    </div>
                </div>
                <div className = 'project-dashboard__entry-point'>
                    <div className = 'project-dashboard__entry-point-top'>
                        <div className = 'triangle'></div>
                    </div>
                    <div className = 'project-dashboard__entry-point-bottom'>
                        <h2 className = 'project-dashboard__entry-point-title'>
                            Chat
                        </h2>
                    </div>
                </div>
                <div className = 'project-dashboard__entry-point'>
                    <div className = 'project-dashboard__entry-point-top'>
                        <div className = 'circle'></div>
                    </div>
                    <div className = 'project-dashboard__entry-point-bottom'>
                        <h2 className = 'project-dashboard__entry-point-title'>
                            Sprint Roadmap
                        </h2>
                    </div>
                </div>
                <div className = 'add-team-button-mobile'>
                <h3 className = 'add-team-button-mobile__text'>Team +</h3>
            </div>
            </main>
            <div className = 'add-team-button'>
                <h3 className = 'add-team-button__text'>Team +</h3>
            </div>
        </div>
    )
}