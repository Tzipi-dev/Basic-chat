import React, { useState, useEffect } from 'react';
import './style.css';
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut, User } from "firebase/auth";

const HomePage = () => {
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [directOpen, setDirectOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // מאזין לשינויים בכניסה
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // המשתמש כבר נשמר ב-state דרך ה-onAuthStateChanged
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    signOut(auth).catch(console.error);
  };

  // רשימות דינמיות
  const shortcutsList = [
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

  const renderLinks = (list) => (
    list.map((item, index) => (
      <a key={index} href="#" className='rounded-rectangle'>
        {item.label}
      </a>
    ))
  );

  // אם אין משתמש מחובר
  if (!currentUser) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h2>אנא התחברו</h2>
        <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          התחבר עם Google
        </button>
      </div>
    );
  }

  // אם המשתמש מחובר → מציגים את HomePage הרגיל
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
        <button onClick={handleLogout} style={{ marginTop: '20px' }}>התנתק</button>
      </main>
    </div>
  );
}

export default HomePage;
