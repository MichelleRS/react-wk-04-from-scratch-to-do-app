import React from 'react';

export default function TasksForm() {
  // TODO add state

  // TODO function for handling button click

  return (
    <>
      <form>
        {/* task input */}
        <label>Task:</label>
        <input type="text" minLength={2}></input>
        {/* submit input button */}
        <button type="submit">Submit Task</button>
      </form>
    </>
  );
}
