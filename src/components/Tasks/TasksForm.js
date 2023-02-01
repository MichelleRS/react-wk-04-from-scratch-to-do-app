import React, { useContext, useState } from 'react';
import { TasksContext } from '../../context/TasksContext.js';
import { createTask } from '../../services/tasks.js';

export default function TasksForm() {
  // TODO add state
  const [task, setTask] = useState('');
  const { setTasks } = useContext(TasksContext);

  // TODO function for handling button click
  const handleTaskInput = async () => {
    try {
      const input = await createTask(task);
      setTasks((prev) => [...prev, input]);
      setTask('');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <>
      <form>
        {/* task input */}
        <label>Task:</label>
        <input
          type="text"
          minLength={2}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        {/* submit input button */}
        <button type="submit" onClick={handleTaskInput}>
          Submit Task
        </button>
      </form>
    </>
  );
}
