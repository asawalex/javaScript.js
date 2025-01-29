import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleDashboardClick = () => {
    navigate('/dashboardService');
  };

  const handleReportClick = () => {
    navigate('/incident');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Neighborhood Watch Security</h1>
      <p style={styles.paragraph}>Thank you for joining our community! Please complete your profile to get started.</p>
      <button style={styles.button} onClick={handleProfileClick}>Complete Profile</button>
      <p style={styles.paragraph}>Here's a quick tutorial to help you get familiar with the app:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>Emergency Alerts: Receive and send alerts in case of emergencies.</li>
        <li style={styles.listItem}>Visitor Management: Keep track of visitors to your neighborhood.</li>
        <li style={styles.listItem}>Community Announcements: Stay updated with the latest news and events.</li>
      </ul>
      <button style={styles.button} onClick={handleDashboardClick}>Go to Dashboard</button>
      <button style={styles.button} onClick={handleReportClick}>Make Report</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7fafc',
    padding: '2rem',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  paragraph: {
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  button: {
    width: '100%',
    maxWidth: '200px',
    backgroundColor: '#4299e1',
    color: '#fff',
    padding: '0.75rem',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    marginBottom: '1.5rem',
  },
  listItem: {
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },
};

export default WelcomePage;
