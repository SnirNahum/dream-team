import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="app-header flex">
      <h1 className="logo">Dream-team</h1>
      <nav className="app-header-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/planner">Planner</NavLink>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/fixtures">Fixtures</NavLink>
        <NavLink to="/predictions">Predictions</NavLink>
      </nav>
      <section className="flex align-center">
        <NavLink to="/login">Login</NavLink>
      </section>
    </header>
  );
}
