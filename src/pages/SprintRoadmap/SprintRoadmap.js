import './SprintRoadmap.scss'
import addOne from '../../assets/rename.png'
import goBack from '../../assets/goBackArrow.png'
import {React, Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import PageHeader from '../../Components/PageHeader/PageHeader';
import PageFooter from '../../Components/PageFooter/PageFooter';
import ToggleButton from '../../Components/ToggleButton/ToggleButton'

class SprintRoadmap extends Component {

    state = {
        checkpoints:[],
        project: []
    }

    componentDidMount() {
        const newID = window.location.pathname;
        const finalID = newID.slice(15);
        axios.get("http://localhost:5500/projects" + finalID).then((response) => {
            this.setState({project:response.data, checkpoints: response.data.checkpointList})
        });
    } 

    render() {
    return (
        <>
        <PageHeader/>
        <div className = 'sprint-roadmap'>
            <h1 className = 'sprint-roadmap__page-title'>{`${this.state.project.projectName} RoadMap`}</h1>
            <div className = 'sprint-roadmap__wrap'>
            <main className = 'sprint-roadmap__container'>
                {this.state.checkpoints.map((checkpoint, index) => (
                    <div className = 'sprint-roadmap__goal' key={index}>
                        <h2 className = 'sprint-roadmap__goal-title'>{checkpoint.checkpointTitle}</h2>
                        <ToggleButton/>
                        <p className = 'sprint-roadmap__goal-date'>{checkpoint.dueDate}</p>
                    </div>
                ))}
            </main>  
            <Link to={`/add-checkpoint/${this.state.project._id}`}><img src = {addOne} className = 'sprint-roadmap__add' alt = 'add a goal' /></Link>
            </div>
            <Link to={`/dashboard/${this.state.project._id}`}><img src = {goBack} className = 'sprint-roadmap__go-back' alt = 'go back to project dashboard' /></Link>
        </div>
        <PageFooter/>
        </>
    )
    }
}

export default SprintRoadmap;