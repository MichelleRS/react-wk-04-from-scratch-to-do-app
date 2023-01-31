import { client } from './client';

export function getUser() {
  return client.auth.currentUser;
}

// get email, password, and type
export async function authUser(email, password, type) {
  let response;
  if (type === 'sign-up') {
    response = await client.auth.signUp({ email, password });
    // else sign in
  } else {
    response = await client.auth.signIn({ email, password });
  }
  // error handling for user
  if (response.error) {
    throw response.error;
  }
  return response.user;
}

// sign user out
export async function signOut() {
  await client.auth.signOut();
}
