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
import LogInPage from './Components/LogInPage/LogInPage'
import SignUpPage from './Components/SignUpPage/SignUpPage';
import TaskBoard from './Components/TaskBoard/TaskBoard';
import TaskDetailPage from './Components/TaskDetailPage/TaskDetailPage';
import WorkblockPage from './Components/WorkblockPage/WorkblockPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react'

function App() {
const [user, setLoginUser] = useState({

})

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = '/'>
            {
              user && user._id ? <ProjectDashboard/> : <LogInPage/>
            }<ProjectDashboard/> 
          </Route>
          <Route path = '/LoginPage'><LogInPage setLoginUser = {setLoginUser}/></Route>
          <Route path = '/SignupPage'><SignUpPage/></Route>
        </Routes>
      </Router>
      {/* <PageHeader/> */}
      {/* <WorkblockPage/> */}
      {/* <TaskDetailPage/> */}
      {/* <TaskBoard/> */}
      {/* <LogInPage/> */}
      {/* <SignUpPage/> */}
      {/* <LandingPage/> */}
      {/* <SprintRoadmap/> */}
      {/* <ProjectDashboard/> */}
      {/* <AddCheckpoint/> */}
      {/* <AddTeam/> */}
      {/* <AddProject/> */}
      {/* <AddTask/> */}
      {/* <ProjectListPage/> */}
      {/* <PageFooter/> */}
    </div>
  );
}

export default App;
