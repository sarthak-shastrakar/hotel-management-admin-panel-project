import { useState } from 'react';
import { Plus, Image as ImageIcon, Trash2 } from 'lucide-react';

const BannerManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  // Dummy Data
  const [banners, setBanners] = useState([
    { id: 1, name: 'Summer Promotion 2026', type: 'Promotional', status: true, date: '2026-05-10', img: 'https://images.unsplash.com/photo-1542314831-c6a420325142?auto=format&fit=crop&w=150&h=80' },
    { id: 2, name: 'Premium Upgrade Offer', type: 'Offer', status: true, date: '2026-04-15', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=150&h=80' },
    { id: 3, name: 'New Feature Announcement', type: 'System', status: false, date: '2026-03-20', img: 'https://images.unsplash.com/photo-1551882547-ff40c0d5c9f4?auto=format&fit=crop&w=150&h=80' },
  ]);

  const toggleStatus = (id) => {
    setBanners(banners.map(b => b.id === id ? { ...b, status: !b.status } : b));
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Banner Management</h1>
        <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Cancel' : <><Plus size={18} /> Add Banner</>}
        </button>
      </div>

      {showAddForm && (
        <div className="card mb-6">
          <h3 className="mb-4">Add New Banner</h3>
          <form className="grid grid-cols-2 gap-4">
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Banner Image Upload</label>
              <div style={{ 
                border: '2px dashed var(--border-color)', 
                borderRadius: 'var(--radius-md)', 
                padding: '2rem', 
                textAlign: 'center',
                backgroundColor: 'var(--bg-secondary)',
                cursor: 'pointer'
              }}>
                <ImageIcon size={48} style={{ color: 'var(--text-secondary)', margin: '0 auto 1rem' }} />
                <p>Click or drag image to upload</p>
                <p className="text-sm text-muted mt-2">Recommended size: 1200x400px (JPG, PNG)</p>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Banner Title</label>
              <input type="text" className="form-input" placeholder="E.g., Summer Promo" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Banner Type</label>
              <select className="form-input">
                <option>Promotional</option>
                <option>Offer</option>
                <option>System Announcement</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Redirect URL (Optional)</label>
              <input type="url" className="form-input" placeholder="https://..." />
            </div>
            
            <div className="form-group" style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setShowAddForm(false)}>Cancel</button>
              <button type="submit" className="btn btn-primary">Publish Banner</button>
            </div>
          </form>
        </div>
      )}

      <div className="card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Banner Name</th>
                <th>Type</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => (
                <tr key={banner.id}>
                  <td>
                    <img src={banner.img} alt={banner.name} style={{ width: '120px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                  </td>
                  <td style={{ fontWeight: 500 }}>{banner.name}</td>
                  <td>
                    <span className="badge badge-neutral">{banner.type}</span>
                  </td>
                  <td>{banner.date}</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="icon-btn" style={{ width: '32px', height: '32px', color: 'var(--danger)' }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BannerManagement;
