# todo-app
To practice you skills

Let's create a simple to-do list application that allows the user to add, remove, and mark tasks as complete.

Step 1: Create a new file called TodoList.js and import React and the useState() hook.

Step 2: Create our functional component TodoList and define our state using the useState() hook. We'll initialize our state with an empty array for the tasks.

Step 3: Define the addTask function to add a new task to the list of tasks. We'll use the setTasks() function to update our tasks state by adding the new task to the end of the array, and reset the newTask state to an empty string.

Step 4: Define the removeTask function to remove a task from the list of tasks. We'll use the setTasks() function to update our tasks state by removing the task at the specified index.

Step 5: Define the markTaskComplete function to mark a task as complete in the list of tasks. We'll use the setTasks() function to update our tasks state by replacing the task at the specified index with a new task that has a strikethrough.

Step 6: Add a checkbox to each task to allow the user to mark it as complete. We'll add a new property to each task in our tasks state to keep track of whether it's complete or not, and toggle that property when the checkbox is clicked.

To use this component, you can import it into your main App.js file and render it.