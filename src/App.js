import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import PrescriptionSubmission from './Pages/PrescriptionSubmission';
import ContactPage from './Pages/ContactPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<AboutUs />} />
        <Route path='/' element={<PrescriptionSubmission />} />
        <Route path='/' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
