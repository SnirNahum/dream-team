import React, { useEffect, useState } from "react";
import { contactService } from "../services/contactService";
import { useNavigate, useParams } from "react-router-dom";

import { addContact } from "../store/actions/contact.actions";

export default function () {
  const [contact, setContact] = useState(contactService.getEmptyContact());
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadContact();
  }, []);

  async function loadContact() {
    const contactId = params.id;
    try {
      if (contactId) {
        const contact = await contactService.getById(contactId);
        setContact(contact);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  function handleChange({ target }) {
    const field = target.name;
    let value = target.value;

    switch (target.name) {
      case "text":
      case "range":
        value = +value || "";
        break;
      case "checkbox":
        value = target.checked;
        break;
      default:
        break;
    }
    setContact((prevContact) => ({
      ...prevContact,
      [field]: value,
    }));
  }

  async function onSaveContact(ev) {
    ev.preventDefault();
    try {
      await addContact(contact);
      navigate("/");
    } catch (error) {
      console.log("Error", error);
    }
  }

  const { name, email } = contact;
  return (
    <section className="contact-edit">
      <h1>{contact._id ? "Edit" : "Add"} Contact</h1>
      <form onSubmit={onSaveContact}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          value={name}
          name="name"
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          id="email"
        />
        <button>Save</button>
      </form>
    </section>
  );
}
