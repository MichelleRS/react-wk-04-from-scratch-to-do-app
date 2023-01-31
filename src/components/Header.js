import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext.js';
import { signOut } from '../services/auth.js';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  //   use as on click sign out function
  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <header>
      <h1>To Do List</h1>

      {/* temp */}
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>

      <nav>
        {/* nav for when NOT an auth user */}

        {/* nav for when auth user */}
        {user && (
          <>
            <p>Hey there {user.email}!</p>
            {/* button handles click for sign out */}
            <button type="button" onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
