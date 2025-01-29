import React, { useState } from 'react';

const IncidentForm = () => {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState(0);
  const [timestamp, setTimestamp] = useState('');
  const [media, setMedia] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/api/incidents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, location, description, userId, timestamp, media }),
    });

    const data = await response.json();

    if (response.ok) {
      setType('');
      setLocation('');
      setDescription('');
      setUserId(0);
      setTimestamp('');
      setMedia('');
      setSuccess('Incident reported successfully!');
      setError('');
    } else {
      setError(data.message || 'Failed to report incident');
      setSuccess('');
    }
 
//   const userData={
//     type:type,
//     date:new Date('date'),
//     location:location,
//     userId:userId,
//     media:media,
// }
// e.onchageData(userData);
};
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f7fafc' }}>
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)', width: '24rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', marginBottom: '1.5rem' }}>Report Incident</h2>
        {success && <div style={{ color: '#48bb78', textAlign: 'center', marginBottom: '1rem' }}>{success}</div>}
        {error && <div style={{ color: '#f56565', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>Type</label>
            <input
              type="text"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              placeholder="Enter incident type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>Location</label>
            <input
              type="text"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>Description</label>
            <textarea
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>User ID</label>
            <input
              type="number"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              placeholder="Enter user ID"
              value={userId}
              onChange={(e) => setUserId(Number(e.target.value))}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>Timestamp</label>
            <input
              type="datetime-local"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>Media</label>
            <input
              type="text"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              placeholder="Enter media URL"
              value={media}
              onChange={(e) => setMedia(e.target.value)}
            />
          </div>

          <button type="submit" style={{ width: '100%', backgroundColor: '#4299e1', color: '#fff', padding: '0.75rem', borderRadius: '0.25rem', hover: { backgroundColor: '#3182ce' } }}>
            Report Incident
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncidentForm;
