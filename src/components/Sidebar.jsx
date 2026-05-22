import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  CreditCard, 
  Receipt, 
  Bell, 
  Image as ImageIcon, 
  Settings 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/hotels', label: 'Hotel Management', icon: <Building2 size={20} /> },
    { path: '/subscriptions', label: 'Subscription Management', icon: <CreditCard size={20} /> },
    { path: '/payments', label: 'Payments', icon: <Receipt size={20} /> },
    { path: '/notifications', label: 'Notifications', icon: <Bell size={20} /> },
    { path: '/banners', label: 'Banner Management', icon: <ImageIcon size={20} /> },
    { path: '/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">H</div>
          <span className="logo-text">HotelPro</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="admin-profile">
          <div className="avatar">A</div>
          <div className="admin-info">
            <p className="admin-name">Admin User</p>
            <p className="admin-role">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
