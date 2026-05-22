import { useState } from 'react';
import { Send, Clock, History, Bell } from 'lucide-react';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('compose');

  const history = [
    { id: 1, title: 'Scheduled Maintenance', message: 'The system will be down for 2 hours on Sunday.', type: 'All Hotels', status: 'Sent', date: '2026-05-20 10:00' },
    { id: 2, title: 'New Feature Available', message: 'Check out the new advanced analytics dashboard.', type: 'Premium Only', status: 'Sent', date: '2026-05-18 14:30' },
    { id: 3, title: 'Subscription Expiring', message: 'Your subscription expires in 3 days. Renew now.', type: 'Selected Hotels (3)', status: 'Scheduled', date: '2026-05-25 09:00' },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Notifications</h1>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div className="flex gap-4 mb-6 border-b pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <button 
              className={`btn flex items-center gap-2 ${activeTab === 'compose' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('compose')}
            >
              <Send size={16} /> Compose Message
            </button>
            <button 
              className={`btn flex items-center gap-2 ${activeTab === 'history' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('history')}
            >
              <History size={16} /> History & Scheduled
            </button>
          </div>

          {activeTab === 'compose' ? (
            <form>
              <div className="form-group">
                <label className="form-label">Notification Title</label>
                <input type="text" className="form-input" placeholder="Enter title" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Message Content</label>
                <textarea 
                  className="form-input" 
                  rows="5" 
                  placeholder="Type your message here..."
                  style={{ resize: 'vertical' }}
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="form-group">
                  <label className="form-label">Target Audience</label>
                  <select className="form-input">
                    <option>All Hotels</option>
                    <option>Active Subscriptions</option>
                    <option>Expired Subscriptions</option>
                    <option>Select Specific Hotels...</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-6 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                <button type="button" className="btn btn-secondary">Draft</button>
                <button type="button" className="btn btn-primary" style={{ backgroundColor: 'var(--success)' }}>
                  <Send size={16} /> Send Now
                </button>
              </div>
            </form>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Audience</th>
                    <th>Status</th>
                    <th>Date/Time</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div style={{ fontWeight: 500 }}>{item.title}</div>
                        <div className="text-sm text-muted" style={{ maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.message}</div>
                      </td>
                      <td>{item.type}</td>
                      <td>
                        <span className={`badge ${item.status === 'Sent' ? 'badge-success' : 'badge-warning'}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Bell size={20} className="text-accent-color" />
            <h3>Notification Stats</h3>
          </div>
          
          <div className="flex flex-col gap-4 mt-6">
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              <p className="text-sm text-muted">Total Sent This Month</p>
              <h2 className="text-2xl mt-1">1,452</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              <p className="text-sm text-muted">Open Rate</p>
              <h2 className="text-2xl mt-1">68.5%</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              <p className="text-sm text-muted">Click-Through Rate</p>
              <h2 className="text-2xl mt-1">24.2%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
