import { checkError, client } from './client.js';

// get user task list from Supabase
export async function getTasksList() {
  const response = await client.from('todo_list').select('*');
  return checkError(response);
}

// insert user task input to Supabase
export async function createTask(task) {
  const response = await client.from('todo_list').insert({ task }).single();
  return checkError(response);
}
