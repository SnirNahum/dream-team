import React from "react";
import { Link } from "react-router-dom";

export function ContactPreview({ contact, onRemoveContact }) {
  const robotStyle = {
    backgroundImage: `url(https://robohash.org/${contact._id})`,
  };
  return (
    <article style={robotStyle} className="contact-preview">
      <Link to={`/contact/${contact._id}`} className="info">
        <h2>{contact.name}</h2>
      </Link>
      <section className="actions">
        <button onClick={() => onRemoveContact(contact._id)}>X</button>
        <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
      </section>
    </article>
  );
}
