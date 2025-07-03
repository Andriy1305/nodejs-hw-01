import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonString = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, jsonString, 'utf8');
  } catch (error) {
    console.error('Помилка:', error);
  }
};
