import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './Layout.css';

const Layout = ({ children, isDarkMode, toggleTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (sidebarOpen) setSidebarOpen(false);
  };

  return (
    <div className="app-container">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}
      
      <div className={`sidebar-container ${sidebarOpen ? 'open' : ''}`}>
        <Sidebar />
      </div>
      
      <main className="main-content">
        <Topbar 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          toggleSidebar={toggleSidebar} 
        />
        <div className="page-container">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
