import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import TasksForm from './TasksForm.js';
import TasksList from './TasksList.js';

export default function Tasks() {
  const { user } = useUser();

  // if user is unauthorized, redirect to auth/
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  //   display tasks for authorized users
  return (
    <div>
      <h1>Tasks</h1>
      <TasksForm />
      <TasksList />
    </div>
  );
}
