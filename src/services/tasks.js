import { checkError, client } from './client.js';

export async function getTasksList() {
  const response = await client.from('todo_list').select('*');
  return checkError(response);
}

export async function createTask(task) {
  const response = await client.from('todo_list').insert({ task }).single();
  return checkError(response);
}
