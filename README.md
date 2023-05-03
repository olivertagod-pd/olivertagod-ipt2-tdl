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

This application uses React hooks, specifically the `useState` hook, to manage the state of the task list, the new task input, and the search query input. 

The `handleAddTask` function adds a new task to the task list when the form is submitted. If the new task input is not empty, it creates a new task object with the task text, completion status, and a timestamp. Then it updates the task list state and clears the new task input.

The `handleDeleteTask` function deletes a task from the task list when its delete button is clicked. It uses the task's timestamp to find its index in the task list, creates a new copy of the task list without the deleted task, and updates the task list state.

The `handleEditTask` function updates a task's text when its edit button is clicked. It uses the task's timestamp to find its index in the task list, updates its text property with the new text, and updates the task list state.

The `handleCompleteTask` function toggles a task's completion status when its checkbox is clicked. It uses the task's timestamp to find its index in the task list, updates its completed property to the opposite of its current value, and updates the task list state.

The `countIncompleteTasks` and `countCompletedTasks` functions count the number of incomplete and completed tasks in the task list, respectively.

The `handleSearch` function updates the search query state as the user types in the search input.

Finally, the `filteredTaskList` variable filters the task list to only include tasks that match the search query.

The `render` function returns the app UI with a header, a search input, a form to add new tasks, a list of existing tasks, and a task count display. The task list is generated from the filtered task list variable and includes each task's text, completion status, and edit and delete buttons.