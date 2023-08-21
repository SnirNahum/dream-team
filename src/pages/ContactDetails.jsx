import React, { useEffect, useState } from "react";
import { contactService } from "../services/contactService";
import { Link, useNavigate, useParams } from "react-router-dom";

export function ContactDetails() {
  const [contact, setcontact] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadcontact();
  }, [params.id]);

  async function loadcontact() {
    const contact = await contactService.getById(params.id);
    setcontact(contact);
  }

  function goBack() {
    navigate("/");
  }

  if (!contact) return <div>Loading...</div>;
  return (
    <section className="contact-details">
      <section>
        <h3>Email: {contact.email}</h3>
      </section>
      <section>
        <h3>Name: {contact.name}</h3>
      </section>
      <section>
        <h3>id: {contact._id}</h3>
      </section>
      <section>
        <h3>Phome: {contact.phone}</h3>
      </section>
      <Link replace to={`/contact/edit/${contact._id}`}>
        Edit contact
      </Link>
      <img src={`https://robohash.org/${contact._id}`} />
      <button onClick={goBack}>Go back</button>
    </section>
  );
}
