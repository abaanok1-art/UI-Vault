import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GrOverview } from 'react-icons/gr';
import { IoPlayCircle, IoLayers } from 'react-icons/io5';
import { BiSolidColorFill } from 'react-icons/bi';
import { TfiMapAlt } from 'react-icons/tfi';
import { HiOutlineTemplate, HiSparkles } from 'react-icons/hi';
import { CgPlayButtonR } from 'react-icons/cg';
import { PiCardsBold } from 'react-icons/pi';
import { FaChevronDown, FaSpinner, FaSitemap } from 'react-icons/fa';
import { FcMultipleInputs } from 'react-icons/fc';
import { TiTabsOutline } from 'react-icons/ti';
import { RxDropdownMenu } from 'react-icons/rx';
import './sidebar.css';

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const handleLinkClick = () => {
    if (onClose && window.innerWidth <= 1024) {
      onClose();
    }
  };

  const navSections = [
    {
      title: 'Getting Started',
      icon: <IoPlayCircle className="sec-icon" />,
      items: [
        { title: 'Overview', path: '/overview', icon: <GrOverview />, badge: 'Guide' },
        { title: 'Theming System', path: '/theming', icon: <BiSolidColorFill />, badge: 'Tokens' }
      ]
    },
    {
      title: 'Components Vault',
      icon: <IoLayers className="sec-icon" />,
      items: [
        { title: 'Buttons Vault', path: '/buttons', icon: <CgPlayButtonR />, badge: '60+' },
        { title: 'Cards Vault', path: '/cards', icon: <PiCardsBold />, badge: '40+' },
        { title: 'Accordions', path: '/accordions', icon: <FaChevronDown />, badge: '50+' },
        { title: 'Input Fields', path: '/inputfields', icon: <FcMultipleInputs />, badge: '60+' },
        { title: 'Loaders & Spinners', path: '/loaders&spinners', icon: <FaSpinner className="spin-icon" />, badge: '32+' },
        { title: 'Tabs Navigation', path: '/tabs', icon: <TiTabsOutline />, badge: '30+' },
        { title: 'Dropdowns & Menus', path: '/dropdowns', icon: <RxDropdownMenu />, badge: '30+' }
      ]
    },
    {
      title: 'Navigation',
      icon: <TfiMapAlt className="sec-icon" />,
      items: [
        { title: 'Navbar Vault', path: '/Navbars', icon: <FaSitemap />, badge: '50+' }
      ]
    },
    {
      title: 'Templates & Layouts',
      icon: <HiOutlineTemplate className="sec-icon" />,
      items: [
        { title: 'Full Templates', path: '/templates', icon: <HiSparkles />, badge: 'New' }
      ]
    }
  ];

  return (
    <aside className={`vault-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-inner">
        {navSections.map((sec, secIdx) => (
          <div key={secIdx} className="sidebar-section-block">
            <div className="sidebar-section-heading">
              <span>{sec.title}</span>
              {sec.icon}
            </div>
            <div className="sidebar-items-list">
              {sec.items.map((item, itemIdx) => {
                const isActive = location.pathname.toLowerCase() === item.path.toLowerCase();

                return (
                  <NavLink
                    key={itemIdx}
                    to={item.path}
                    className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    <div className="item-title-group">
                      <span className="item-icon">{item.icon}</span>
                      <span className="item-label">{item.title}</span>
                    </div>
                    {item.badge && (
                      <span className={`item-badge ${item.badge === 'New' ? 'badge-new' : ''}`}>
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}