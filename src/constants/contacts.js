import path from 'path';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
//console.log(fileName);

const dirName = path.dirname(fileName);
//console.log(dirName);

export const PATH_DB = path.join(dirName, '..', 'db', 'db.json');
//console.log(PATH_DB);
