# React From Scratch - To Do App

## Description

Authenticated to do list application. Authenticated users submit tasks and see tasks displayed.

## Problems and Solutions

### Problem

Auth not redirecting to Task

### Solution

Change password to 6 characters

### Details

Checked Network in Dev Tools to discover an error description of "invalid login credentials." that password must be 6 characters. The one I was entering was 5. I was using a 5 character password. After changing password to 6 characters.

---

### Problem

When signing out and then in to another user account, previous user task list displays on page load. It is not updated until page refresh or task submission.

### Solution

In TasksProvider, pass user in dependency array of useEffect() to signal an update in user.
