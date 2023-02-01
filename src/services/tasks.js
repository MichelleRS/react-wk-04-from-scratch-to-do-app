import { checkError, client } from './client.js';

export async function getTasksList() {
  const response = await client.from('todo_list').select('*');
  return checkError(response);
}
