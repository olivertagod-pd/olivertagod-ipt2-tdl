# To-Do List React App

This is a simple To-Do list React app that allows users to add, edit, delete, and mark tasks as complete or incomplete. The app also includes a search function that allows users to search for specific tasks.

## Installation

To use this app, you will need Node.js and npm installed on your machine. Once you have those installed, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/olivertagod-pd/olivertagod-ipt2-tdl.git`
2. `cd` into the repository folder and run `npm install`
3. Run `npm start` to start the app in development mode

## How to Use

1. To add a new task, type the task into the input field and click the "Add" button or press Enter.
2. To edit an existing task, click the "Edit" button next to the task and enter the new text in the prompt.
3. To delete a task, click the "Delete" button next to the task.
4. To mark a task as complete or incomplete, click the checkbox next to the task.
5. To search for a specific task, type the search query into the search field.

## Code Explanation

The code uses React hooks to manage state. It defines four state variables:

- `taskList`: an array of task objects
- `newTask`: a string representing the text of the new task being added
- `searchQuery`: a string representing the user's search query
- `filteredTaskList`: an array of task objects that match the user's search query

The code defines several event handlers that modify the state based on user actions:

- `handleAddTask`: adds a new task to the `taskList` array
- `handleDeleteTask`: removes a task from the `taskList` array
- `handleEditTask`: updates the text of a task in the `taskList` array
- `handleCompleteTask`: toggles the `completed` property of a task in the `taskList` array
- `handleSearch`: updates the `searchQuery` state based on the user's search input

The code renders a form with an input field and a "Add" button, a list of tasks, and a task count summary. The list of tasks is generated dynamically based on the `filteredTaskList` state variable. The code uses CSS to style the app and provide visual feedback when a task is completed.

## Issues

There are no syntax or logical errors in this program. However, there are a few potential issues that could be improved:

1. There is no persistent storage for the task list. This means that if the user refreshes the page, all the tasks will be lost. A possible solution is to use browser storage APIs such as localStorage or IndexedDB to store the tasks.

2. The current implementation of the search function only matches exact string matches. This can be improved by using more advanced search techniques, such as fuzzy search or regular expressions.

3. The current implementation of the task list uses an array, which can be inefficient for large numbers of tasks. A more efficient solution would be to use a data structure optimized for rapid searching and filtering, such as a hash table or a binary search tree.
