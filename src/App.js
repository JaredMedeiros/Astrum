import './App.scss';
import LandingPage from './Components/LandingPage/LandingPage'
import PageHeader from './Components/PageHeader/PageHeader'
import ProjectListPage from './pages/ProjectListPage/ProjectListPage'
import PageFooter from './Components/PageFooter/PageFooter'
import AddProject from './pages/AddProject/AddProject';
import AddTask from './Components/AddTask/AddTask';
import AddTeam from './Components/AddTeam/AddTeam';
import AddCheckpoint from './Components/AddCheckpoint/AddCheckpoint';
import ProjectDashboard from './pages/ProjectDashboard/ProjectDashboard';
import SprintRoadmap from './Components/SprintRoadmap/SprintRoadmap'
import LogInPage from './pages/LogInPage/LogInPage'
import SignUpPage from './pages/SignUpPage/SignUpPage';
import TaskBoard from './Components/TaskBoard/TaskBoard';
import TaskDetailPage from './Components/TaskDetailPage/TaskDetailPage';
import WorkblockPage from './Components/WorkblockPage/WorkblockPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {

  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Routes>
            <Route path = '/projects' element={<ProjectListPage/>} />
            <Route path='/login' element={<LogInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/add-project' element={<AddProject />} />
            <Route path='dashboard/:id' element={<ProjectDashboard/>} />
            <Route path='/add-team' element={<AddTeam />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
