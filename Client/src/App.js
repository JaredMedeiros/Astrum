import './App.scss';
import LandingPage from './Components/LandingPage/LandingPage'
import PageHeader from './Components/PageHeader/PageHeader'
import ProjectListPage from './Components/ProjectListPage/ProjectListPage'
import PageFooter from './Components/PageFooter/PageFooter'
import AddProject from './Components/AddProject/AddProject';
import AddTask from './Components/AddTask/AddTask';
import AddTeam from './Components/AddTeam/AddTeam';
import AddCheckpoint from './Components/AddCheckpoint/AddCheckpoint';
import ProjectDashboard from './Components/ProjectDashboard/ProjectDashboard';
import SprintRoadmap from './Components/SprintRoadmap/SprintRoadmap'

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      <PageHeader/>
      <SprintRoadmap/>
      {/* <ProjectDashboard/> */}
      {/* <AddCheckpoint/> */}
      {/* <AddTeam/> */}
      {/* <AddProject/> */}
      {/* <AddTask/> */}
      {/* <ProjectListPage/> */}
      <PageFooter/>
    </div>
  );
}

export default App;
