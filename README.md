# To-Do List (React App)

This is a simple web application created using React that allows you to create a list of tasks that you need to complete. The app provides features for adding new tasks, editing existing tasks, and marking tasks as complete. It also allows you to search through your task list to quickly find the task you need.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Interface](#interface)
- [Code Explanation](#code-explanation)
- [Lacking](#lacking)

## Installation

To run this application on your local machine, you will need to have Node.js and NPM installed. Once you have those installed, follow these steps:

1. Clone this repository to your local machine.
   ```
   git clone https://github.com/olivertagod-pd/olivertagod-ipt2-tdl.git
   ```
2. Navigate to the project directory.
   ```
   cd my-to-do-list
   ```
3. Install the required dependencies.
   ```
   npm install
   ```
4. Start the development server.
   ```
   npm start
   ```
5. Most cases it will open the browser automatically but if not, Open a web browser and navigate to `http://localhost:3000` to view the app.

## Usage

To use the To-Do List app, simply follow these steps:

1. Type in a new task in the input box provided, and click the "Add" button to add it to your task list.
2. To edit an existing task, click the "Edit" button next to the task, and a prompt will appear where you can edit the text of the task. Click "Ok" to save your changes.
3. To mark a task as complete, click the checkbox before the task. The text of the task will be crossed out to indicate that it is complete.
4. To delete a task, click the "Delete" button next to the task.
5. To search through your task list, type in a search query in the search box at the top of the page. The list will be filtered to only show tasks that contain the search query.

## Interface

Here is the interface of this program.

Main page
![Main Page](https://user-images.githubusercontent.com/132123440/235561262-407c6097-f1ee-4f23-93fc-79ea386e50a8.PNG)
Adding a task
![Adding of Task](https://user-images.githubusercontent.com/132123440/235561266-fd08fc3f-7223-44e8-8424-113066854f18.PNG)
Marking of task as done
![Marking of task as done](https://user-images.githubusercontent.com/132123440/235561270-703ad46f-c456-4371-8887-700a21e268af.PNG)
Editing a task
![Editing a Task](https://user-images.githubusercontent.com/132123440/235561272-f1edf13c-a556-471b-9f39-d41b9a5b1623.PNG)
Task is updated after editing
![Updated Task](https://user-images.githubusercontent.com/132123440/235561274-22089be0-d71f-4084-9fcd-8d8975e22334.PNG)
Removing a 2 completed tasks
![Removing a Task - 1](https://user-images.githubusercontent.com/132123440/235561276-4de46a3f-9138-431f-bf3d-ef48ccf62948.PNG)
Removing a task
![Removing a Task - 2](https://user-images.githubusercontent.com/132123440/235561250-94f85387-6a40-46a4-88ba-0d2e8b04038c.PNG)
Responsiveness
![Responsiveness - 1](https://user-images.githubusercontent.com/132123440/235561253-80e9576b-d0c3-4d38-97b3-d0b6fc564763.PNG)
![Responsiveness - 2](https://user-images.githubusercontent.com/132123440/235561255-dc4a6f79-cabb-4693-b3ab-426c57ec14e3.PNG)

## # React To-Do List

This is a simple To-Do list web application built using React. It allows users to add tasks, edit existing tasks, delete tasks, mark tasks as completed, and search through their list of tasks. The number of completed and incomplete tasks is also displayed.

## Code Explanation

The `App` component is the main component of the application. It uses the `useState` hook to maintain the state of the application. 

- `taskList` is an array of objects, where each object represents a task. The initial value of `taskList` is an empty array.
- `newTask` is a string that represents the value of the input field where new tasks are added. The initial value of `newTask` is an empty string.
- `searchQuery` is a string that represents the value of the input field where users can search for specific tasks. The initial value of `searchQuery` is an empty string.

The `handleAddTask` function is called when the user submits a new task using the "Add" button. It first prevents the default form submission behavior, then checks if the `newTask` is not an empty string, and if so, adds a new task object to the `taskList` array using the `setTaskList` function. The new task object includes the task text, a `completed` property that is initially set to `false`, and the timestamp of when the task was added.

The `handleDeleteTask` function is called when the user clicks the "Delete" button for a specific task. It creates a copy of the `taskList` array using the spread operator, removes the task at the specified index using the `splice` method, and sets the new array as the state of `taskList`.

The `handleEditTask` function is called when the user clicks the "Edit" button for a specific task. It creates a copy of the `taskList` array using the spread operator, updates the `text` property of the task at the specified index with the new text, and sets the new array as the state of `taskList`.

The `handleCompleteTask` function is called when the user clicks the checkbox for a specific task. It creates a copy of the `taskList` array using the spread operator, toggles the `completed` property of the task at the specified index, and sets the new array as the state of `taskList`.

The `countIncompleteTasks` and `countCompletedTasks` functions are helper functions that iterate through the `taskList` array and count the number of incomplete and completed tasks, respectively.

The `handleSearch` function is called when the user types in the search input field. It sets the value of `searchQuery` to the current input value.

The `filteredTaskList` variable is a filtered version of the `taskList` array that includes only tasks whose `text` property includes the `searchQuery` string (case-insensitive).

Finally, the `App` component returns a JSX element that displays the search input field, the add task input field and button, the list of tasks (filtered by search query), and the count of incomplete and completed tasks.

## Lacking

In this program, the user doesn't have the option to arrange the task by name or date.
