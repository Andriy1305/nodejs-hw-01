import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Помилка під час отримання контактів:', error);
  }
};

console.log(await getAllContacts());
