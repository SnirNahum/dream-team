import React, { useEffect, useState } from "react";
import { ContactList } from "../cmps/ContactList";
import { ContactFilter } from "../cmps/ContactFilter";
import { Link } from "react-router-dom";
import {
  loadContacts,
  removeContact,
  setFilterBy,
} from "../store/actions/contact.actions";
import { useSelector } from "react-redux";

export function ContactIndex() {
  const contacts = useSelector((state) => state.contactModule.contacts);
  const filterBy = useSelector((state) => state.contactModule.filterBy);

  useEffect(() => {
    loadContacts();
  }, []);

  function onChangeFilter(filterBy) {
    setFilterBy(filterBy);
    loadContacts();
  }

  async function onRemoveContact(contactId) {
    try {
      await removeContact(contactId);
    } catch (error) {
      console.log("error:", error);
    }
  }

  if (!contacts) return <div>Loading...</div>;
  return (
    <section className="contact-index">
      <ContactFilter onChangeFilter={onChangeFilter} filterBy={filterBy} />
      <Link to="/contact/edit">Add</Link>
      <ContactList onRemoveContact={onRemoveContact} contacts={contacts} />
    </section>
  );
}
