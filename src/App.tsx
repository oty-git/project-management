import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        <Route path="/" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
