import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import PrescriptionSubmission from './Pages/PrescriptionSubmission';
import ContactPage from './Pages/ContactPage';

import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link className='nav-link' to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link className='nav-link' to="/about" style={{ marginRight: '1rem' }}>About Us</Link>
        <Link className='nav-link' to="/prescription" style={{ marginRight: '1rem' }}>Prescription</Link>
        <Link className='nav-link' to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/prescription" element={<PrescriptionSubmission />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
