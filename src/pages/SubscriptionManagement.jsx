import { useState } from 'react';
import { Check, Plus, AlertTriangle, Edit2, Trash2 } from 'lucide-react';

const SubscriptionManagement = () => {
  const [activeTab, setActiveTab] = useState('plans');
  const [showAddForm, setShowAddForm] = useState(false);

  // Dummy Data
  const plans = [
    { id: 1, name: 'Basic Plan', price: '₹299', duration: 'Monthly', features: ['Up to 50 Rooms', 'Basic Support', 'Standard Reports'], status: 'Active' },
    { id: 2, name: 'Premium Plan', price: '₹499', duration: 'Monthly', features: ['Up to 200 Rooms', 'Priority Support', 'Advanced Analytics'], status: 'Active' },
    { id: 3, name: 'Enterprise Plan', price: '₹999', duration: 'Yearly', features: ['Unlimited Rooms', '24/7 Dedicated Support', 'Custom Integrations'], status: 'Active' },
  ];

  const expiryAlerts = [
    { id: 1, hotelName: 'Taj Residency', expiryDate: '2026-05-25', daysRemaining: 3, plan: 'Premium' },
    { id: 2, hotelName: 'Royal Palace', expiryDate: '2026-05-27', daysRemaining: 5, plan: 'Basic' },
    { id: 3, hotelName: 'Sunrise Resort', expiryDate: '2026-05-30', daysRemaining: 8, plan: 'Basic' },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Subscription Management</h1>
        <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Cancel' : <><Plus size={18} /> Create Plan</>}
        </button>
      </div>

      {showAddForm && (
        <div className="card mb-6">
          <h3 className="mb-4">Create New Plan</h3>
          <form className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <label className="form-label">Plan Title</label>
              <input type="text" className="form-input" placeholder="e.g. Platinum Plan" />
            </div>
            <div className="form-group">
              <label className="form-label">Plan Type</label>
              <select className="form-input">
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Price (₹)</label>
              <input type="number" className="form-input" placeholder="e.g. 5000" />
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Description / Features</label>
              <textarea className="form-input" rows="3" placeholder="List the features included in this plan"></textarea>
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setShowAddForm(false)}>Cancel</button>
              <button type="submit" className="btn btn-primary">Save Plan</button>
            </div>
          </form>
        </div>
      )}

      <div className="flex gap-4 mb-6" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <button 
          className={`btn ${activeTab === 'plans' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('plans')}
        >
          Subscription Plans
        </button>
        <button 
          className={`btn ${activeTab === 'alerts' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('alerts')}
        >
          Expiry Alerts
          <span className="badge badge-danger" style={{ marginLeft: '0.5rem' }}>3</span>
        </button>
      </div>

      {activeTab === 'plans' && (
        <div className="grid grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="card flex" style={{ flexDirection: 'column' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>{plan.name}</h3>
                  <span className="badge badge-success mt-2">{plan.status}</span>
                </div>
                <div className="flex gap-2">
                  <button className="icon-btn" style={{ width: '30px', height: '30px' }}><Edit2 size={16} /></button>
                  <button className="icon-btn" style={{ width: '30px', height: '30px', color: 'var(--danger)' }}><Trash2 size={16} /></button>
                </div>
              </div>
              
              <div className="mb-6">
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-color)' }}>{plan.price}</span>
                <span className="text-muted"> / {plan.duration}</span>
              </div>
              
              <ul style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div style={{ color: 'var(--success)', display: 'flex' }}><Check size={18} /></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn btn-secondary w-full">Edit Features</button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'alerts' && (
        <div className="card">
          <div className="flex items-center gap-3 mb-6" style={{ color: 'var(--warning)' }}>
            <AlertTriangle size={24} />
            <h3 style={{ color: 'var(--text-primary)' }}>Upcoming Expirations</h3>
          </div>
          
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Hotel Name</th>
                  <th>Current Plan</th>
                  <th>Expiry Date</th>
                  <th>Days Remaining</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {expiryAlerts.map((alert) => (
                  <tr key={alert.id}>
                    <td style={{ fontWeight: 500 }}>{alert.hotelName}</td>
                    <td>{alert.plan}</td>
                    <td>{alert.expiryDate}</td>
                    <td>
                      <span className={`badge ${alert.daysRemaining <= 3 ? 'badge-danger' : 'badge-warning'}`}>
                        {alert.daysRemaining} days
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>
                        Send Reminder
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionManagement;
