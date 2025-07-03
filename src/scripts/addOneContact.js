import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const currentContacts = (await readContacts()) || [];
    const newContact = createFakeContact();
    currentContacts.push(newContact);
    await writeContacts(currentContacts);
    //console.log(currentContacts);
  } catch (error) {
    console.error('Помилка при додаванні контакту:', error);
  }
};
addOneContact();
