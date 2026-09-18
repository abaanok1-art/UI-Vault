import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX, FiArrowRight, FiCommand, FiSliders, FiLayout, FiBookOpen, FiUserCheck, FiPhoneCall } from 'react-icons/fi';
import { CgPlayButtonR } from 'react-icons/cg';
import { PiCardsBold } from 'react-icons/pi';
import { FaChevronDown, FaSpinner, FaSitemap } from 'react-icons/fa';
import { FcMultipleInputs } from 'react-icons/fc';
import { TiTabsOutline } from 'react-icons/ti';
import { RxDropdownMenu } from 'react-icons/rx';
import { HiSparkles } from 'react-icons/hi';
import { BiSolidColorFill } from 'react-icons/bi';
import './searchModal.css';

const SEARCH_ITEMS = [
  {
    title: 'Buttons Stash',
    path: '/buttons',
    category: 'Components',
    count: '60+ Unique Styles',
    keywords: ['button', 'buttons', 'neon', 'glitch', 'laser', '3d', 'arcade', 'glass', 'gradient', 'click', 'cta'],
    icon: <CgPlayButtonR />
  },
  {
    title: 'Cards Stash',
    path: '/cards',
    category: 'Components',
    count: '40+ Variations',
    keywords: ['card', 'cards', 'glass', 'glassmorphic', 'neon', 'cyberpunk', 'container', 'panel', 'surface'],
    icon: <PiCardsBold />
  },
  {
    title: 'Accordions Stash',
    path: '/accordions',
    category: 'Components',
    count: '50+ Variations',
    keywords: ['accordion', 'accordions', 'faq', 'collapse', 'expand', 'toggle', 'dropdown', 'chevron'],
    icon: <FaChevronDown />
  },
  {
    title: 'Input Fields Stash',
    path: '/inputfields',
    category: 'Components',
    count: '60+ Variations',
    keywords: ['input', 'inputs', 'textfield', 'form', 'password', 'search', 'email', 'floating', 'pill'],
    icon: <FcMultipleInputs />
  },
  {
    title: 'Loaders & Spinners',
    path: '/loaders&spinners',
    category: 'Components',
    count: '32+ Variations',
    keywords: ['loader', 'loaders', 'spinner', 'spinners', 'pulse', 'orbit', 'wave', 'bars', 'dots', 'loading', 'progress'],
    icon: <FaSpinner />
  },
  {
    title: 'Tabs Navigation',
    path: '/tabs',
    category: 'Components',
    count: '30+ Variations',
    keywords: ['tab', 'tabs', 'navigation', 'pill', 'segmented', 'underline', 'menu', 'switch'],
    icon: <TiTabsOutline />
  },
  {
    title: 'Dropdowns & Menus',
    path: '/dropdowns',
    category: 'Components',
    count: '30+ Variations',
    keywords: ['dropdown', 'dropdowns', 'menu', 'select', 'options', 'glass', 'cyber menu', 'action', 'profile'],
    icon: <RxDropdownMenu />
  },
  {
    title: 'Navbar Stash',
    path: '/Navbars',
    category: 'Navigation',
    count: '50+ Variations',
    keywords: ['navbar', 'navbars', 'header', 'navigation', 'floating', 'glassmorphic', 'neon', 'minimal'],
    icon: <FaSitemap />
  },
  {
    title: 'Full Templates (Hero, Pricing, Footer)',
    path: '/templates',
    category: 'Templates',
    count: '15+ Layouts',
    keywords: ['template', 'templates', 'hero', 'pricing', 'footer', 'landing page', 'saas', 'layout'],
    icon: <HiSparkles />
  },
  {
    title: 'Theming & Design Tokens',
    path: '/theming',
    category: 'Getting Started',
    count: 'CSS Variables',
    keywords: ['theme', 'theming', 'colors', 'tokens', 'css', 'variables', 'cyan', 'purple', 'emerald', 'glow'],
    icon: <BiSolidColorFill />
  },
  {
    title: 'Overview & Architecture Guide',
    path: '/overview',
    category: 'Getting Started',
    count: 'Quick Start',
    keywords: ['overview', 'guide', 'docs', 'starter', 'react', 'vite', 'intro', 'github'],
    icon: <FiCommand />
  },
  {
    title: 'Documentation & Integration',
    path: '/docs',
    category: 'General',
    count: 'Handbook',
    keywords: ['docs', 'documentation', 'install', 'import', 'jsx', 'copy paste', 'guide'],
    icon: <FiBookOpen />
  },
  {
    title: 'About Creator (Abdul Moiz)',
    path: '/about',
    category: 'General',
    count: 'Vision & Contact',
    keywords: ['about', 'creator', 'abdul moiz', 'developer', 'whatsapp', 'email', 'contact', 'moiiizyyy@gmail.com'],
    icon: <FiUserCheck />
  }
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const listRef = useRef(null);

  const cleanQuery = query.trim().toLowerCase();

  const filteredItems = SEARCH_ITEMS.filter((item) => {
    if (!cleanQuery) return true;
    return (
      item.title.toLowerCase().includes(cleanQuery) ||
      item.category.toLowerCase().includes(cleanQuery) ||
      (item.keywords && item.keywords.some(k => k.includes(cleanQuery)))
    );
  });

  // Reset index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex].path);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  if (!isOpen) return null;

  const handleSelect = (path) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-header">
          <FiSearch className="search-modal-icon" />
          <input
            type="text"
            autoFocus
            placeholder="Search 300+ components, shaders, templates, themes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="search-clear-btn" onClick={() => setQuery('')}>
              Clear
            </button>
          )}
          <button className="search-close-btn" onClick={onClose} aria-label="Close search">
            <FiX />
          </button>
        </div>

        <div className="search-results-list" ref={listRef}>
          {filteredItems.length === 0 ? (
            <div className="no-search-results">
              <p>No components found for "<strong>{query}</strong>"</p>
              <span>Try searching for "buttons", "cards", "neon", "loaders", or "templates"</span>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={idx}
                  className={`search-result-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(item.path)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="result-left">
                    <span className="result-icon">{item.icon}</span>
                    <div className="result-text">
                      <span className="result-title">{item.title}</span>
                      <span className="result-category">{item.category}</span>
                    </div>
                  </div>
                  <div className="result-right">
                    <span className="result-count">{item.count}</span>
                    <FiArrowRight className="result-arrow" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="search-modal-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
          <span><kbd>↵</kbd> Open Selected</span>
          <span><kbd>ESC</kbd> Close</span>
        </div>
      </div>
    </div>
  );
}
