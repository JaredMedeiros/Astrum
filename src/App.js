import './App.scss';
import LandingPage from './pages/LandingPage/LandingPage'
import PageHeader from './Components/PageHeader/PageHeader'
import ProjectListPage from './pages/ProjectListPage/ProjectListPage'
import PageFooter from './Components/PageFooter/PageFooter'
import AddProject from './pages/AddProject/AddProject';
import AddTask from './pages/AddTask/AddTask';
import AddTeam from './Components/AddTeam/AddTeam';
import AddCheckpoint from './pages/AddCheckpoint/AddCheckpoint';
import ProjectDashboard from './pages/ProjectDashboard/ProjectDashboard';
import SprintRoadmap from './pages/SprintRoadmap/SprintRoadmap'
import LogInPage from './pages/LogInPage/LogInPage'
import SignUpPage from './pages/SignUpPage/SignUpPage';
import TaskBoard from './pages/TaskBoard/TaskBoard';
import TaskDetailPage from './pages/TaskDetailPage/TaskDetailPage';
import WorkblockPage from './pages/WorkblockPage/WorkblockPage';
import ChatPage from './pages/ChatPage/ChatPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {

  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Routes>
            <Route path = '/' element={<LandingPage/>} />
            <Route path = '/projects' element={<ProjectListPage/>} />
            <Route path='/login' element={<LogInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/add-project' element={<AddProject />} />
            <Route path='dashboard/:id' element={<ProjectDashboard/>} />
            <Route path='/task-board/:id' element={<TaskBoard/>} />
            <Route path='/add-task/:id' element={<AddTask/>} />
            <Route path='task-details/:id' element={<TaskDetailPage/>} />
            <Route path='sprint-roadmap/:id' element={<SprintRoadmap/>} />
            <Route path='add-checkpoint/:id' element={<AddCheckpoint/>} />
            <Route path='/workblock' element={<WorkblockPage/>} />
            <Route path='/chat' element={<ChatPage/>} />
            {/* <Route path='/add-team' element={<AddTeam />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
