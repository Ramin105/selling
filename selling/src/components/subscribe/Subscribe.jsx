import React, { useState } from "react";
import styles from './Subscribe.module.css';

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://northwind.vercel.app/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: "Subscriber Email",
          description: email
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      setStatus({ loading: false, success: true, error: null });
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <section 
      style={{
        backgroundImage: "url('https://preview.colorlib.com/theme/selling/images/hero_2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: 'brightness(0.7)',
        padding: '40px',
        height: '47vh',  
        color: "#fff",
        textAlign: "center",
        fontFamily: "'Nunito Sans', sans-serif",
        display: 'flex',
        alignItems: 'center',
        margin: '35px 0'
      }}
    >
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "0 20px",
        position: "relative",
        zIndex: 2
      }}>
        <h2 style={{
          fontSize: "22px",
          fontWeight: "300",
          marginBottom: "30px"
        }}>
          Get notified on each updates.
        </h2>
        
        <form onSubmit={handleSubmit} style={{display: 'flex'}}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid white",
              fontSize: "16px",
              color: "#fff"
            }}
            required
          />
          
          <button 
            type="submit"
            className={styles.btn}
            disabled={status.loading}
          >
            {status.loading ? 'Sending...' : 'Subscribe'}
          </button>
        </form>

        {status.success && (
          <p style={{ marginTop: '20px', color: '#4CAF50' }}>
            Thank you for subscribing!
          </p>
        )}

        {status.error && (
          <p style={{ marginTop: '20px', color: '#f44336' }}>
            Error: {status.error}
          </p>
        )}

        {!status.success && !status.error && (
          <p style={{ marginTop: '20px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.
          </p>
        )}
      </div>
    </section>
  );
};

export default Subscribe;