import { Sun, Moon, Search, Menu } from 'lucide-react';
import './Topbar.css';

const Topbar = ({ isDarkMode, toggleTheme, toggleSidebar }) => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="icon-btn mobile-menu-btn" onClick={toggleSidebar}>
          <Menu size={20} />
        </button>
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search hotels, users, or settings..." />
        </div>
      </div>
      
      <div className="topbar-right">
        <button className="icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Topbar;
