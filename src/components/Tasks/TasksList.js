import React, { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext.js';

export default function TasksList() {
  const { tasks } = useContext(TasksContext);
  return (
    <div>
      <h2>Tasks List</h2>
      <>
        {tasks.map((task) => (
          <ul key={task.id}>
            <li>{task.task}</li>
          </ul>
        ))}
      </>
    </div>
  );
}
