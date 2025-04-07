import React, { useState } from 'react';
import "../Styles/PrescriptionSubmission.css";
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
    // TODO: Send data to backend or API
    console.log(form);
    alert("Prescription submitted!");
  };

  return (
    <div className="form-container">
      <h2>Submit Your Prescription</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Full Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="phone" type="tel" placeholder="Phone Number" required onChange={handleChange} />
        <input name="address" type="text" placeholder="Delivery Address" required onChange={handleChange} />
        <input name="deliveryTime" type="text" placeholder="Preferred Delivery Time" onChange={handleChange} />
        <textarea name="message" placeholder="Notes for the pharmacist (optional)" onChange={handleChange} />
        
        <input 
          name="file" 
          type="file" 
          accept=".pdf,.jpg,.jpeg,.png" 
          required 
          onChange={handleChange} 
        />

        <label className="checkbox-label">
          <input 
            name="pickup" 
            type="checkbox" 
            checked={form.pickup} 
            onChange={handleChange} 
          />
          Pick up at pharmacy
        </label>

        <div className="delivery-info">
          <p>Estimated Delivery: 1-2 days</p>
          <p>Free delivery on orders over $50</p>
        </div>

        <button type="submit">Submit Prescription</button>
      </form>
    </div>
  );
};

export default PrescriptionForm;