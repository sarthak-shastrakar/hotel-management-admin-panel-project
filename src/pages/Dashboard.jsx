import { Building2, CheckCircle, XCircle, DollarSign, Activity } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const Dashboard = () => {
  // Dummy Data
  const stats = [
    { title: 'Total Hotels', value: '156', icon: <Building2 size={24} />, color: 'var(--info)' },
    { title: 'Active Hotels', value: '142', icon: <CheckCircle size={24} />, color: 'var(--success)' },
    { title: 'Expired Hotels', value: '14', icon: <XCircle size={24} />, color: 'var(--danger)' },
    { title: 'Total Revenue', value: '₹34,45,231', icon: <DollarSign size={24} />, color: 'var(--warning)' },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 },
    { name: 'Jun', revenue: 5500 },
  ];

  const hotelStatusData = [
    { name: 'Active', value: 142 },
    { name: 'Expired', value: 14 },
  ];
  const COLORS = ['#10b981', '#ef4444'];

  const requests = [
    { id: 1, hotelName: 'Taj Residency', type: 'New Registration', date: '2026-05-22' },
    { id: 2, hotelName: 'Royal Palace', type: 'Plan Upgrade', date: '2026-05-21' },
    { id: 3, hotelName: 'Sunrise Resort', type: 'Document Verification', date: '2026-05-20' },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard Overview</h1>
        <button className="btn btn-primary">Download Report</button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="card flex items-center gap-4">
            <div 
              style={{ 
                backgroundColor: `${stat.color}20`, 
                color: stat.color,
                padding: '1rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              {stat.icon}
            </div>
            <div>
              <p className="text-muted text-sm">{stat.title}</p>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Revenue Chart */}
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <h3 className="mb-4">Monthly Revenue</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="name" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" tickFormatter={(value) => `₹${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  itemStyle={{ color: 'var(--accent-color)' }}
                />
                <Bar dataKey="revenue" fill="var(--accent-color)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Chart */}
        <div className="card">
          <h3 className="mb-4">Hotels Status</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={hotelStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {hotelStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div style={{ width: 12, height: 12, backgroundColor: COLORS[0], borderRadius: '50%' }}></div>
                <span className="text-sm">Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ width: 12, height: 12, backgroundColor: COLORS[1], borderRadius: '50%' }}></div>
                <span className="text-sm">Expired</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requests */}
      <div className="card">
        <h3 className="mb-4">Requests</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Hotel Name</th>
                <th>Request Type</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td style={{ fontWeight: 500 }}>{request.hotelName}</td>
                  <td><span className="badge badge-warning">{request.type}</span></td>
                  <td>{request.date}</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>View</button>
                      <button className="btn btn-primary" style={{ backgroundColor: 'var(--success)', padding: '0.25rem 0.5rem', fontSize: '0.75rem', border: 'none' }}>Approve</button>
                      <button className="btn btn-primary" style={{ backgroundColor: 'var(--danger)', padding: '0.25rem 0.5rem', fontSize: '0.75rem', border: 'none' }}>Reject</button>
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

export default Dashboard;
