import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import About from './pages/about';
import ModelsSection from './pages/modelsSection';
import Comparison from './pages/comparison';
import Upload from './pages/upload';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<ModelsSection />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
