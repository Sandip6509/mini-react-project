# Todo-List-App

In this project, you will build a simple
todo list application using React.
Users will be able to add new tasks,
mark tasks as completed, and delete tasks from the list.

Step 1: Set up the project

1. Create a new React project using 
   Create React App or your preferred method.
2. Open the project in your code editor.

Step 2: Create the initial component structure

1. Create a new folder called "components"
   inside the src directory.
2. Inside the components folder, create three files:
   TodoList.js, TodoItem.js, and TodoForm.js.
3. In each file, create a functional component with
   a basic structure (e.g., function TodoList() {}).

Step 3: Build the TodoList component

1. In the TodoList.js file, import React
   and export the TodoList component.
2. Inside the TodoList component, 
   set up the initial state using the 
   useState hook. The state should be an array of tasks.
3. Render a list element (<ul>) and map through
   the tasks array to create a list item (<li>) for each task.

Step 4: Build the TodoItem component

1. In the TodoItem.js file, import
   React and export the TodoItem component.
2. Inside the TodoItem component,
   receive the task as a prop.
3. Render the task name inside
   a paragraph (<p>) element.
4. Add a checkbox input (<input type="checkbox">)
   to mark the task as completed.

Step 5: Integrate TodoItem component into TodoList component

1. Import the TodoItem component into the TodoList.js file.
2. Inside the map function in TodoList, create a
   TodoItem component for each task, passing the task as a prop.
3. Display the TodoItem components inside the <ul> element.

Step 6: Add form to add new tasks

1. In the TodoForm.js file, import React
   and export the TodoForm component.
2. Inside the TodoForm component,
   set up a new state using the useState 
   hook to track the user input for new tasks.
3. Render a form element (<form>) with an
   input field (<input>) and a submit button (<button>).

Step 7: Handle form submission and update TodoList state

1. Import the TodoForm component into the TodoList.js file.
2. Add a new state to the TodoList component to track the list of tasks.
3. Create a function to handle the form submission
   and update the tasks state accordingly.
4. Pass the form submission function as a prop to the TodoForm component.
5. Inside the TodoForm component, add an event listener
to the form submission and call the prop function with the user input.

Step 8: Implement task completion and deletion

1. Add a new property to the tasks array in 
   TodoList state to track the completion status of each task.
2. Inside the TodoItem component, add an event listener
   to the checkbox input and update the completion
   status in the TodoList state accordingly.
3. Add a delete button to each TodoItem component
   and implement a function to remove tasks from the TodoList state.

Step 9: Style the components (optional)

1. Use Tailwind css library of your choice to 
   style the TodoList, TodoItem, and TodoForm components.
2. Customize the design to make the
   todo list visually appealing and user-friendly.