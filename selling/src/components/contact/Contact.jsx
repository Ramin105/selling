import React, { useState } from 'react';
import styles from './Contact.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://northwind.now.sh/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          description: `Subject: ${formData.subject}\nMessage: ${formData.message}\nContact Email: ${formData.email}`
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      setSubmissionStatus({ loading: false, success: true, error: null });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.title}>Contact Form</h2>
      
      {submissionStatus.success && (
        <div className={styles.successMessage}>
          Your message has been sent successfully!
        </div>
      )}
      
      {submissionStatus.error && (
        <div className={styles.errorMessage}>
          Error: {submissionStatus.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className={styles.nameFields}>
          <div className={styles.formGroup}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Message</label>
          <textarea
            name="message"
            placeholder='Write your notes or questions here'
            value={formData.message}
            onChange={handleChange}
            className={styles.textareaField}
            required
          />
        </div>
        

        
        <div className={styles.formGroup}>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={submissionStatus.loading}
          >
            {submissionStatus.loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default ContactForm;