import { useState } from 'react';
import { Search, Filter, Download, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('transactions');

  // Dummy Data
  const transactions = [
    { id: 'TRX-98231', hotel: 'Taj Residency', amount: '₹9,999.00', method: 'Credit Card', date: '2026-05-21 14:30', status: 'Completed' },
    { id: 'TRX-98230', hotel: 'Royal Palace', amount: '₹4,999.00', method: 'UPI', date: '2026-05-21 11:15', status: 'Completed' },
    { id: 'TRX-98229', hotel: 'Sunrise Resort', amount: '₹29,999.00', method: 'Bank Transfer', date: '2026-05-20 09:45', status: 'Pending' },
    { id: 'TRX-98228', hotel: 'Green Valley', amount: '₹9,999.00', method: 'Credit Card', date: '2026-05-19 16:20', status: 'Failed' },
    { id: 'TRX-98227', hotel: 'Ocean View Resort', amount: '₹9,999.00', method: 'Credit Card', date: '2026-05-18 10:05', status: 'Refunded' },
  ];

  const razorpayLogs = [
    { id: 'pay_L0zX1a2b3c', event: 'payment.captured', amount: '₹8,200.00', status: 'Success', time: '2026-05-21 14:30' },
    { id: 'pay_L0zW9x8y7z', event: 'payment.failed', amount: '₹4,100.00', status: 'Failed', time: '2026-05-21 11:15' },
    { id: 'pay_L0zV4d5e6f', event: 'order.created', amount: '₹24,800.00', status: 'Success', time: '2026-05-20 09:45' },
    { id: 'rfnd_L0zU1a2b3c', event: 'refund.processed', amount: '₹8,200.00', status: 'Success', time: '2026-05-18 10:05' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
      case 'Success': return <span className="badge badge-success">{status}</span>;
      case 'Pending': return <span className="badge badge-warning">{status}</span>;
      case 'Failed': return <span className="badge badge-danger">{status}</span>;
      case 'Refunded': return <span className="badge badge-info">{status}</span>;
      default: return <span className="badge badge-neutral">{status}</span>;
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Payments & Logs</h1>
        <button className="btn btn-secondary">
          <Download size={18} /> Export CSV
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="card">
          <p className="text-sm text-muted">Total Volume</p>
          <h3 className="mt-2 text-2xl">₹1,24,50,000</h3>
        </div>
        <div className="card">
          <p className="text-sm text-muted">Successful</p>
          <h3 className="mt-2 text-2xl">1,245</h3>
        </div>
        <div className="card">
          <p className="text-sm text-muted">Failed</p>
          <h3 className="mt-2 text-2xl">23</h3>
        </div>
        <div className="card">
          <p className="text-sm text-muted">Refunds</p>
          <h3 className="mt-2 text-2xl">₹1,24,000</h3>
        </div>
      </div>

      <div className="card">
        <div className="flex justify-between items-center mb-6 border-b pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div className="flex gap-2">
            <button 
              className={`btn ${activeTab === 'transactions' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('transactions')}
            >
              Transaction History
            </button>
            <button 
              className={`btn ${activeTab === 'razorpay' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('razorpay')}
            >
              Razorpay Logs
            </button>
          </div>
          
          <div className="flex gap-2">
            <div className="search-bar" style={{ width: '250px' }}>
              <Search size={16} className="search-icon" />
              <input type="text" placeholder="Search ID or Hotel..." style={{ padding: '0.4rem 1rem 0.4rem 2rem' }} />
            </div>
            <button className="btn btn-secondary icon-btn" style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)' }}>
              <Filter size={16} />
            </button>
          </div>
        </div>

        {activeTab === 'transactions' ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Hotel Name</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((trx, index) => (
                  <tr key={index}>
                    <td style={{ fontFamily: 'monospace', color: 'var(--accent-color)' }}>{trx.id}</td>
                    <td style={{ fontWeight: 500 }}>{trx.hotel}</td>
                    <td>{trx.amount}</td>
                    <td>{trx.method}</td>
                    <td>{trx.date}</td>
                    <td>{getStatusBadge(trx.status)}</td>
                    <td>
                      <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>Receipt</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Event Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th>Raw Data</th>
                </tr>
              </thead>
              <tbody>
                {razorpayLogs.map((log, index) => (
                  <tr key={index}>
                    <td style={{ fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{log.id}</td>
                    <td><code style={{ backgroundColor: 'var(--bg-secondary)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>{log.event}</code></td>
                    <td>{log.amount}</td>
                    <td>{getStatusBadge(log.status)}</td>
                    <td>{log.time}</td>
                    <td>
                      <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>View JSON</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;
