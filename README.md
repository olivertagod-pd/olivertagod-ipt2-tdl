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

### State Variables

The `useState` hook is used to create three state variables:

1. `taskList` - an array that contains the tasks added by the user.
2. `newTask` - a string that represents the text entered by the user in the input field.
3. `searchQuery` - a string that represents the text entered by the user in the search field.

```javascript
const [taskList, setTaskList] = useState([]);
const [newTask, setNewTask] = useState('');
const [searchQuery, setSearchQuery] = useState('');
```

### Add Task

When the user submits the form by clicking the `Add` button, the `handleAddTask` function is called. This function checks if the `newTask` string is not empty, and if so, adds a new task object to the `taskList` array using the `setTaskList` function. The new task object contains the `text` of the task, whether it is `completed` or not (initially set to `false`), and the `added` timestamp.

```javascript
const handleAddTask = (event) => {
  event.preventDefault();
  if (newTask.trim() !== '') {
    setTaskList([...taskList, { text: newTask, completed: false, added: Date.now() }]);
    setNewTask('');
  }
};
```

### Delete Task

When the user clicks the `Delete` button next to a task, the `handleDeleteTask` function is called with the `added` timestamp of the task as the argument. This function finds the index of the task in the `taskList` array using the `findIndex` method, creates a new array without the task using the `splice` method, and updates the `taskList` state variable using the `setTaskList` function.

```javascript
const handleDeleteTask = (taskId) => {
  const index = taskList.findIndex((task) => task.added === taskId);
  if (index !== -1) {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);
  }
};
```

### Edit Task

When the user clicks the `Edit` button next to a task, the `handleEditTask` function is called with the `added` timestamp of the task and the new text as arguments. This function finds the index of the task in the `taskList` array using the `findIndex` method, updates the `text` of the task, and updates the `taskList` state variable using the `setTaskList` function.

```javascript
const handleEditTask = (taskId, newText) => {
  const index = taskList.findIndex((task) => task.added === taskId);
 ```

### Search Task

This function is used to handle the search functionality of the to-do list. It is triggered by the `onChange` event of the search input field and sets the `searchQuery` state to the value entered by the user.

The `filteredTaskList` constant uses the `filter()` method to create a new array that contains only the tasks that match the search query. The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. In this case, it checks whether the lowercase version of the `text` property of each task includes the lowercase version of the `searchQuery` state. 

The filtered list is then rendered in the to-do list by mapping through it with the `map()` method and rendering each task as a list item.


```javascript
const handleSearch = (event) => {
  setSearchQuery(event.target.value);
};

const filteredTaskList = taskList.filter((task) => 
  task.text.toLowerCase().includes(searchQuery.toLowerCase())
);
```
