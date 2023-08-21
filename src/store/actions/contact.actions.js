import { contactService } from "../../services/contactService";
import {
  REMOVE_CONTACT,
  SET_FILTER_BY,
  SET_CONTACTS,
  UPDATE_CONTACT,
} from "../reducers/contact.reducer";
import { store } from "../store";

export async function loadContacts() {
  try {
    const filterBy = store.getState().contactModule.filterBy;
    const contacts = await contactService.query(filterBy);
    const action = {
      type: SET_CONTACTS,
      contacts,
    };
    store.dispatch(action);
  } catch (error) {
    console.log("error:", error);
  }
}

export async function removeContact(contactId) {
  try {
    await contactService.remove(contactId);
    const action = {
      type: REMOVE_CONTACT,
      contactId,
    };
    store.dispatch(action);
  } catch (error) {
    console.log("error:", error);
  }
}

export async function addContact(contact) {
  try {
    await contactService.save(contact);
    const action = {
      type: UPDATE_CONTACT,
      contact,
    };
    store.dispatch(action);
  } catch (error) {
    console.log("error:", error);
  }
}

export async function setFilterBy(filterBy) {
  store.dispatch({ type: SET_FILTER_BY, filterBy });
}
