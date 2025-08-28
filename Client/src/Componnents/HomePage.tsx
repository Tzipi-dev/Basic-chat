import React, { useState } from 'react';
import './style.css';
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { Chat } from '../Types/Chat';

const HomePage = () => {
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [directOpen, setDirectOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);

  // רשימות דינמיות
  const shortcutsList= [
    { label: 'קישור 1', type: 'shortcut' },
    { label: 'קישור 2', type: 'shortcut' },
    { label: 'קישור 3', type: 'shortcut' },
  ];

  const directList = [
    { label: 'דף הבית', type: 'direct' },
    { label: 'פרויקטים', type: 'direct' },
    { label: 'אודות', type: 'direct' },
    { label: 'צור קשר', type: 'direct' },
  ];

  const groupList = [
    { label: 'קבוצה 1', type: 'group' },
    { label: 'קבוצה 2', type: 'group' },
    { label: 'קבוצה 3', type: 'group' },
    { label: 'קבוצה 4', type: 'group' },
  ];

  // פונקציה ליצירת הקישורים
  const renderLinks = (list) => (
    list.map((item, index) => (
      <a key={index} href="#" className='rounded-rectangle'>
        {item.label}
      </a>
    ))
  );

  return (
    <div>
      <div className="sidebar">

        {/* Shortcuts */}
        <div 
          className="sidebar-header" 
          onClick={() => setShortcutsOpen(!shortcutsOpen)} 
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
        >
          <span>{shortcutsOpen ? <SlArrowDown /> : <SlArrowRight />}</span>
          Shortcuts
        </div>
        {shortcutsOpen && (
          <nav className="sidebar-nav">
            {renderLinks(shortcutsList)}
          </nav>
        )}

        {/* Direct Messages */}
        <div 
          className="sidebar-header" 
          onClick={() => setDirectOpen(!directOpen)} 
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}
        >
          <span>{directOpen ? <SlArrowDown /> : <SlArrowRight />}</span>
          Direct Messages
        </div>
        {directOpen && (
          <nav className="sidebar-nav">
            {renderLinks(directList)}
          </nav>
        )}

        {/* Group Messages */}
        <div 
          className="sidebar-header" 
          onClick={() => setGroupOpen(!groupOpen)} 
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}
        >
          <span>{groupOpen ? <SlArrowDown /> : <SlArrowRight />}</span>
          Group Messages
        </div>
        {groupOpen && (
          <nav className="sidebar-nav">
            {renderLinks(groupList)}
          </nav>
        )}

      </div>

      <main className="page-content">
        <h1>ברוכים הבאים לדף הבית</h1>
        <p>זהו דף הבית של האתר שלנו. כאן תוכלו למצוא מידע על הפרויקטים שלנו, אודותינו ודרכים ליצור קשר.</p>
      </main>
    </div>
  );
}

export default HomePage;
