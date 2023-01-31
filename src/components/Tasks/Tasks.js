import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

export default function Tasks() {
  const { user } = useUser;

  // send not authorized users to sign in page
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div>
      <p>Tasks Go Here</p>
    </div>
  );
}
