# TodoItem-useMemo

In this guided project, you'll create a
simple Todo list application using React
and the useMemo hook. The useMemo hook
allows you to memoize the result of a
function, preventing unnecessary re-evaluations.
This can be particularly useful when dealing
with computationally expensive operations
or when optimizing the rendering
performance of your React components.

Step 1: Project Setup

-  Set up a new React project using 
your preferred method (e.g., npm create vite@latest).
-  Create a new component called TodoList
to serve as the main component for our application

Step 2: TodoItem Component

- Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
- Add the paths to all of your template files in your tailwind.config.js file.
- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

Step 3: TodoItem Component

-  Create a new component called TodoItem
to represent an individual todo item.
-  Define the required props for the TodoItem
component, such as id, title, completed, etc.
-  Render the todo item's title and a 
checkbox indicating its completion status.
-  Add event handlers to handle checkbox clicks
and update the completion status accordingly.

Step 4: TodoList Component

-  Import the TodoItem component into
the TodoList component.
-  Set up the state for the todo list using
the useState hook. The state should
be an array of todo items.
-  Create a function to add new todo items
to the list and update the state accordingly.
-  Render the list of todo items by mapping
over the state array and rendering a
TodoItem component for each item.
-  Pass the necessary props to each TodoItem
component, such as id, title, completed, etc.

Step 5: Performance Optimization with useMemo

-  Identify the expensive computation within
your TodoList component. For example,
it could be a filtering operation based 
on the completion status of the todos.
-  Extract the expensive computation into a
separate function within the TodoList component.
-  Wrap the expensive computation function using
the useMemo hook, providing an array of
dependencies. In this case, the dependency
could be the todos state.
-  Update the component code to use the memoized
value from the useMemo hook instead
of re-computing the value every time
the component renders.

Step 6: Styling and Additional Features

-  Add some basic CSS styles to make
your Todo list visually appealing.
-  Implement additional features, such as
marking a todo item as completed,
deleting a todo item, editing a todo item, etc.

Step 7: Testing and Refactoring

Test your Todo list application by adding, 
completing, and deleting todo items.
Refactor your code if necessary to improve
readability, organization, or performance.