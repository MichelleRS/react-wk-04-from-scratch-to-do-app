import { useState, useContext } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  //   TODO useUser
  const { user, setUser } = useContext(UserContext);
  if (user) {
    return <Redirect to="/tasks" />;
  }

  const submitAuth = async (e) => {
    e.preventDefault();
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
      console.log('user', user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="auth-container">
      <h1>Welcome!</h1>
      <nav>
        {/* TODO, add className and activeClassName */}
        {/* sign in */}
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        {/* sign up */}
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </nav>
      <form onSubmit={submitAuth}>
        {/* email fieldset */}
        <fieldset>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </fieldset>
        {/* password fieldset */}
        <fieldset>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </fieldset>
        {/* button */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
