import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiMail } from 'react-icons/fi';
import navlogo from '../../assets/ui-stash-logo.svg';
import './navbar.css';

export default function Navbar({ onOpenSearch, onOpenContact, onToggleSidebar, isSidebarOpen }) {
  const location = useLocation();

  const isComponentRoute = [
    '/buttons', '/cards', '/accordions', '/inputfields', '/loaders&spinners', 
    '/loaders-spinners', '/tabs', '/dropdowns', '/navbars', '/Navbars'
  ].includes(location.pathname);

  return (
    <header className="navbar-header-root">
      <div className="navbar-container">
        {/* Left: Mobile Toggle + Brand Logo */}
        <div className="navbar-left">
          <button 
            className="sidebar-toggle-btn"
            onClick={onToggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </button>

          <Link to="/" className="navbar-brand">
            <img className="nav-brand-img" src={navlogo} alt="UI Stash" />
          </Link>
        </div>

        {/* Center: Search Trigger Bar */}
        <div className="navbar-center">
          <button className="nav-search-trigger" onClick={onOpenSearch}>
            <FiSearch className="search-icon" />
            <span className="search-placeholder">Quick search components...</span>
            <span className="search-shortcut">Ctrl K</span>
          </button>
        </div>

        {/* Right: Navigation Links + Action CTAs */}
        <div className="navbar-right">
          <nav className="nav-links-menu">
            <Link className={`nav-item-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
              Home
            </Link>
            <Link className={`nav-item-link ${isComponentRoute ? 'active' : ''}`} to="/buttons">
              Components
            </Link>
            <Link className={`nav-item-link ${location.pathname === '/templates' ? 'active' : ''}`} to="/templates">
              Templates
            </Link>
            <Link className={`nav-item-link ${location.pathname === '/theming' ? 'active' : ''}`} to="/theming">
              Theming
            </Link>
            <Link className={`nav-item-link ${location.pathname === '/docs' ? 'active' : ''}`} to="/docs">
              Docs
            </Link>
            <Link className={`nav-item-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
              About
            </Link>
          </nav>

          <div className="nav-actions-group">
            <button className="nav-contact-btn" onClick={onOpenContact}>
              <FiMail className="contact-icon" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}