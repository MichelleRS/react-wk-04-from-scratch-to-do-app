import React from 'react';
import { useUser } from '../context/UserContext.js';
import { signOut } from '../services/auth.js';

export default function Header() {
  const { setUser } = useUser();
  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <header>
      <h1>Hello! I am the Header</h1>
      <button onClick={handleLogout}>Sign Out</button>
    </header>
  );
}
