import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faEnvelope, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import useScrollAnimation from '../hooks/useScrollAnimation';

const API_URL = process.env.NODE_ENV === 'development'
? 'http://localhost:5001/api'
: 'https://portfolio-website-rkkl.onrender.com/api';


const Contact = () => {
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const [notification, setNotification] = useState({
    show: false,
    message: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    console.log('Form submitted:', formData);
    e.preventDefault();
    setSubmitStatus({ loading: true, success: false, error: null });
  
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        
        console.log('Success case triggered');
        // Clear form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus({ loading: false, success: true, error: null });
        
        // Show success notification
        setNotification({
          show: true,
          message: 'Message sent successfully!'
        });
        console.log('Notification set:', { show: true, message: 'Message sent successfully!' });
  
        // Hide notification after 3 seconds
        setTimeout(() => {
          setNotification({
            show: false,
            message: ''
          });
          console.log('Notification hidden');
        }, 3000);
      } else {
        setSubmitStatus({ loading: false, success: false, error: data.message });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        loading: false, 
        success: false, 
        error: 'Failed to send message. Please try again.' 
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {notification.show && (
          <div className="notification">
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>{notification.message}</span>
          </div>
        )}

        {submitStatus.error && (
          <div className="error-message">
            <FontAwesomeIcon icon={faExclamationCircle} />
            <span>{submitStatus.error}</span>
          </div>
        )}
        <div className="contact-content">
          <h2 className="section-title contact-title">
            <FontAwesomeIcon icon={faPaperPlane} className="title-icon" />
            Get In Touch
          </h2>

          <div className="contact-wrapper">
            {/* left */}
            <div className="contact-info" ref={infoRef}>
              <div className="contact-description">
                <p>Thank you for your interest in getting in touch</p>
                <br/>
                <p>
                  I value open communication and am always open to questions, 
                  feedback, or collaboration ideas. Feel free to reach out by 
                  using the contact form.
                </p>
              </div>
              
              <div className="contact-socials">
                <a href="mailto:jchuah07@gmail.com" className="social-link">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
                <a href="https://github.com/joshuachuah" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/joshua-chuah00/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>

            {/* right (form) */}
            <form onSubmit={handleSubmit} className="contact-form scroll-animation" ref={formRef}>
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    autoComplete='name'
                    required
                  />
                </div>

                <div className="form-group half">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    autoComplete='email'
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-input"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button" disabled={submitStatus.loading}>
                <span>{submitStatus.loading ? 'Sending...' : 'Send Message'}</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;