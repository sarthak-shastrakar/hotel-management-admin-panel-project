import { useState } from 'react';
import { Plus, Search, MoreVertical, Eye, CheckCircle, XCircle, Ban } from 'lucide-react';

const HotelManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  // Dummy Data
  const hotels = [
    { id: 1, name: 'Taj Residency', owner: 'Rahul Sharma', email: 'rahul@tajresidency.in', phone: '+91 98765 43210', plan: 'Premium', status: 'Active', date: '2026-01-15' },
    { id: 2, name: 'Royal Palace', owner: 'Priya Patel', email: 'priya@royalpalace.in', phone: '+91 87654 32109', plan: 'Basic', status: 'Pending', date: '2026-05-20' },
    { id: 3, name: 'Sunrise Resort', owner: 'Amit Kumar', email: 'amit@sunriseresort.in', phone: '+91 76543 21098', plan: 'Enterprise', status: 'Suspended', date: '2025-11-10' },
    { id: 4, name: 'Green Valley', owner: 'Neha Singh', email: 'neha@greenvalley.in', phone: '+91 65432 10987', plan: 'Premium', status: 'Active', date: '2026-03-05' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active': return <span className="badge badge-success">Active</span>;
      case 'Pending': return <span className="badge badge-warning">Pending</span>;
      case 'Suspended': return <span className="badge badge-danger">Suspended</span>;
      default: return <span className="badge badge-neutral">{status}</span>;
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Hotel Management</h1>
        <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          <Plus size={18} /> {showAddForm ? 'Cancel' : 'Add Hotel'}
        </button>
      </div>

      {showAddForm ? (
        <div className="card mb-6">
          <h3 className="mb-4">Add New Hotel</h3>
          <form className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <label className="form-label">Hotel Name</label>
              <input type="text" className="form-input" placeholder="Enter hotel name" />
            </div>
            <div className="form-group">
              <label className="form-label">Owner Name</label>
              <input type="text" className="form-input" placeholder="Enter owner name" />
            </div>
            <div className="form-group">
              <label className="form-label">Hotel Email</label>
              <input type="email" className="form-input" placeholder="Enter hotel email" />
            </div>
            <div className="form-group">
              <label className="form-label">Hotel Mobile Number</label>
              <input type="tel" className="form-input" placeholder="Enter hotel mobile" />
            </div>
            <div className="form-group">
              <label className="form-label">Owner Mobile Number</label>
              <input type="tel" className="form-input" placeholder="Enter owner mobile" />
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Hotel Address</label>
              <input type="text" className="form-input" placeholder="Enter full address" />
            </div>
            <div className="form-group">
              <label className="form-label">Subscription Plan</label>
              <select className="form-input">
                <option>Basic Plan</option>
                <option>Premium Plan</option>
                <option>Enterprise Plan</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Hotel Type</label>
              <select className="form-input">
                <option>Resort</option>
                <option>Business Hotel</option>
                <option>Boutique</option>
                <option>Motel</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Number of Rooms</label>
              <input type="number" className="form-input" placeholder="e.g. 50" />
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label" style={{ fontWeight: 600, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Supporting Documents</label>
            </div>
            <div className="form-group">
              <label className="form-label">Hotel Registration Document</label>
              <input type="file" className="form-input" style={{ padding: '0.5rem' }} />
            </div>
            <div className="form-group">
              <label className="form-label">Owner ID Proof (Aadhaar/PAN)</label>
              <input type="file" className="form-input" style={{ padding: '0.5rem' }} />
            </div>
            
            <div className="form-group" style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setShowAddForm(false)}>Cancel</button>
              <button type="submit" className="btn btn-primary">Save Hotel</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div className="search-bar" style={{ maxWidth: '300px' }}>
              <Search size={18} className="search-icon" />
              <input type="text" placeholder="Search hotels..." />
            </div>
            <div className="flex gap-2">
              <select className="form-input" style={{ width: 'auto' }}>
                <option>All Plans</option>
                <option>Basic</option>
                <option>Premium</option>
              </select>
              <select className="form-input" style={{ width: 'auto' }}>
                <option>All Status</option>
                <option>Active</option>
                <option>Suspended</option>
              </select>
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Hotel Name</th>
                  <th>Owner</th>
                  <th>Contact</th>
                  <th>Plan</th>
                  <th>Reg. Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((hotel) => (
                  <tr key={hotel.id}>
                    <td style={{ fontWeight: 500 }}>{hotel.name}</td>
                    <td>{hotel.owner}</td>
                    <td>
                      <div className="text-sm">{hotel.email}</div>
                      <div className="text-sm text-muted">{hotel.phone}</div>
                    </td>
                    <td>{hotel.plan}</td>
                    <td>{hotel.date}</td>
                    <td>{getStatusBadge(hotel.status)}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button className="icon-btn" style={{ width: '32px', height: '32px' }} title="View Details"><Eye size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-between items-center mt-4 text-sm text-muted">
            <span>Showing 1 to 4 of 4 entries</span>
            <div className="flex gap-2">
              <button className="btn btn-secondary">Previous</button>
              <button className="btn btn-primary">1</button>
              <button className="btn btn-secondary">Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelManagement;
