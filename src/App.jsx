import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './App.css';

// Components
import Navbar from './Components/Navbar/navbar';
import Sidebar from './Components/Sidebar/sidebar';
import Home from './Components/Home/home';
import Overview from './Components/overview/overview';
import Theming from './Components/Themeing/themeing';
import Buttons from './Components/Buttons/buttons';
import Cards from './Components/Cards/cards';
import Accordions from './Components/Accordians/accordians';
import InputFields from './Components/Inputfeilds/inputfeilds';
import Loaders from './Components/Loaders&Spinners/loaders&spinners';
import Tabs from './Components/Tabs/tabs';
import Dropdowns from './Components/Dropdowns/dropdowns';
import NavbarVault from './Components/Navbarpage/navbarpage';
import Templates from './Components/Templates/templates';
import Docs from './Components/Docs/docs';
import About from './Components/About/about';

// Modals
import SearchModal from './Components/Search/searchModal';
import ContactModal from './Components/Contact/contactModal';

function App() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Toast Notification System
  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Keyboard shortcut for Spotlight Search (Ctrl + K / Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app-root">
      {/* Ambient background glow orbs */}
      <div className="ambient-glow top-left"></div>
      <div className="ambient-glow top-right"></div>

      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Layout (Sidebar + Main Content Area) */}
      <div className="app-layout">
        {/* Mobile Sidebar Backdrop */}
        <div
          className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
          onClick={() => setIsSidebarOpen(false)}
        />

        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="app-main-content">
          <Routes>
            <Route path="/" element={<Home showToast={showToast} />} />
            <Route path="/overview" element={<Overview showToast={showToast} />} />
            <Route path="/theming" element={<Theming showToast={showToast} />} />
            <Route path="/buttons" element={<Buttons showToast={showToast} />} />
            <Route path="/cards" element={<Cards showToast={showToast} />} />
            <Route path="/accordions" element={<Accordions showToast={showToast} />} />
            <Route path="/inputfields" element={<InputFields showToast={showToast} />} />
            <Route path="/input-fields" element={<InputFields showToast={showToast} />} />
            <Route path="/loaders&spinners" element={<Loaders showToast={showToast} />} />
            <Route path="/loaders-spinners" element={<Loaders showToast={showToast} />} />
            <Route path="/loaders" element={<Loaders showToast={showToast} />} />
            <Route path="/tabs" element={<Tabs showToast={showToast} />} />
            <Route path="/dropdowns" element={<Dropdowns showToast={showToast} />} />
            <Route path="/Navbars" element={<NavbarVault showToast={showToast} />} />
            <Route path="/navbars" element={<NavbarVault showToast={showToast} />} />
            <Route path="/templates" element={<Templates showToast={showToast} />} />
            <Route path="/docs" element={<Docs showToast={showToast} />} />
            <Route path="/about" element={<About showToast={showToast} />} />
            {/* Fallback route */}
            <Route path="*" element={<Home showToast={showToast} />} />
          </Routes>
        </main>
      </div>

      {/* Spotlight Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <button
        className="floating-search-button"
        type="button"
        onClick={() => setIsSearchOpen(true)}
        aria-label="Open search"
        title="Open search"
      >
        <FiSearch aria-hidden="true" />
        <span>Search</span>
        <kbd>⌘ K</kbd>
      </button>

      {/* Contact Us Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={showToast}
      />

      {/* Global Toast Alerts */}
      <div className="vault-toast-container">
        {toasts.map((t) => (
          <div key={t.id} className="vault-toast">
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
