import React, { useState } from 'react';
import "../Styles/PrescriptionSubmission.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const PrescriptionForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryTime: '',
    message: '',
    file: null,
    pickup: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Prescription submitted!");
  };

  return (
    <div className="container mt-5 p-4 rounded shadow" style={{ maxWidth: '600px', backgroundColor: '#C4CFCE' }}>
      <h2 className="text-center text-dark mb-4">Submit Your Prescription</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input name="name" type="text" className="form-control" placeholder="Full Name" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input name="email" type="email" className="form-control" placeholder="Email" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input name="phone" type="tel" className="form-control" placeholder="Phone Number" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input name="address" type="text" className="form-control" placeholder="Delivery Address" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input name="deliveryTime" type="text" className="form-control" placeholder="Preferred Delivery Time" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <textarea name="message" className="form-control" placeholder="Notes for the pharmacist (optional)" rows="3" onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <input 
            name="file" 
            type="file" 
            accept=".pdf,.jpg,.jpeg,.png" 
            className="form-control" 
            required 
            onChange={handleChange} 
          />
        </div>
        <div className="form-check mb-3">
          <input 
            name="pickup" 
            type="checkbox" 
            className="form-check-input" 
            checked={form.pickup} 
            onChange={handleChange} 
            id="pickupCheck" 
          />
          <label className="form-check-label" htmlFor="pickupCheck">
            Pick up at pharmacy
          </label>
        </div>
        <div className="mb-3 text-muted">
          <p className="mb-1">Estimated Delivery: 1-2 days</p>
          <p>Free delivery on orders over $50</p>
        </div>
        <button type="submit" className="btn btn-teal w-100">Submit Prescription</button>
      </form>
    </div>
  );
};

export default PrescriptionForm;