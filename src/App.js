import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import PrescriptionSubmission from './Pages/PrescriptionSubmission';
import ContactPage from './Pages/ContactPage';


import './App.css';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      className={`nav-link ${isActive ? 'active' : ''}`} 
      to={to}
    >
      {children}
    </Link>
  );
};

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/prescription">Prescription</NavLink>
          <NavLink to="/contact">Contact</NavLink>
   
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/prescription" element={<PrescriptionSubmission />} />
            <Route path="/contact" element={<ContactPage />} />
          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
