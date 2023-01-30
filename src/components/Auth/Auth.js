import { NavLink } from 'react-router-dom';

export default function Auth() {
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
      <form>
        {/* email fieldset */}
        <fieldset>
          <label>Email:</label>
          <input type="email"></input>
        </fieldset>
        {/* password fieldset */}
        <fieldset>
          <label>Email:</label>
          <input type="password"></input>
        </fieldset>
        {/* button */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
