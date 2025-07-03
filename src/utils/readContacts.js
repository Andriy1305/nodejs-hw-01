import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contact = JSON.parse(data);
    // console.log(data);
    //console.log(contact);
    return contact;
  } catch (error) {
    console.error('Помилка:', error);
  }
};
