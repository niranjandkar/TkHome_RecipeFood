import React, { useState } from 'react';
import '../Styling/ContactUs.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Our team will contact you soon with the details');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        }); 
      } else {
        console.error('Failed to send data to the server');
        setSubmissionStatus('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&ga=GA1.1.938841253.1728959236&semt=ais_hybrid"
            alt="Connect with Us"
            className="contact-image"
          />
        </div>
        <div className="contact-right">
          <h2>Connect with Us!</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-row">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                className="input-field" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-row">
              <input 
                type="text" 
                name="phone"
                placeholder="Phone" 
                className="input-field" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                className="input-field" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <textarea 
                name="message"
                placeholder="Message" 
                className="input-field" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </div>
            <button type="submit" className="submit-btn">Send</button>
          </form>
          {submissionStatus && <p className="status-message">{submissionStatus}</p>}
        </div>
      </div>
    </section>
  );
}
