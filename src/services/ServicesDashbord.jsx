import React from 'react';
import { AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const ServicesDashboard = () => {
  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <DashboardCard title="Total Incidents" value="248" icon={<AlertTriangle size={24} />} color="#4299e1" />
        <DashboardCard title="Open Incidents" value="42" icon={<Clock size={24} />} color="#ecc94b" />
        <DashboardCard title="Resolved Incidents" value="206" icon={<CheckCircle size={24} />} color="#48bb78" />
        <DashboardCard title="Response Rate" value="95%" icon={<TrendingUp size={24} />} color="#9f7aea" />
      </div>
      <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)', padding: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2d3748', marginBottom: '1rem' }}>Recent Incidents</h2>
        {/* Add a table or list of recent incidents here */}
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div style={{ backgroundColor: color, borderRadius: '0.5rem', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)', padding: '1.5rem', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>{title}</h3>
          <p style={{ fontSize: '1.875rem', fontWeight: '700' }}>{value}</p>
        </div>
        <div style={{ color: '#fff', opacity: '0.75' }}>{icon}</div>
      </div>
    </div>
  );
};

export default ServicesDashboard;
