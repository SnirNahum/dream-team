import { Link, NavLink } from "react-router-dom";

export default function AppHeader(props) {
  return (
    <header className="app-header">
      <section className="container">
        <h1 className="logo">Contacts</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/charts">Charts</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </section>
    </header>
  );
}
