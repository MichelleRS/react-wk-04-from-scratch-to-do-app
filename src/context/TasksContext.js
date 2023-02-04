import { createContext, useEffect, useState } from 'react';
import { getTasksList } from '../services/tasks.js';
import { useUser } from './UserContext.js';

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useUser();

  // get task list
  // pass user in dependency array to restart list based on user
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasksList();
        setTasks(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchTasks();
  }, [user]);

  return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>;
};

export { TasksContext, TasksProvider };
