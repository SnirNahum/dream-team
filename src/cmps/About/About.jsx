import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <section className="about">
      <section className="title-container">
        <h2>About us</h2>
        <p>...</p>
      </section>
      <nav>
        <Link replace to="/about/team">
          Team
        </Link>
        <Link replace to="/about/vision">
          Vision
        </Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </section>
  );
}
