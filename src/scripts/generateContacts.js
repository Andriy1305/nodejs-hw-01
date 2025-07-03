import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = (await readContacts()) || [];
    //console.log(currentContacts);
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    //console.log(newContacts);
    const updatedContacts = currentContacts.concat(newContacts);
    await writeContacts(updatedContacts);
    //console.log(updatedContacts);
  } catch (error) {
    console.error('Помилка при створенні контактів:', error);
  }
};

generateContacts(5);
