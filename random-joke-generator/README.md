# Random-Joke-Generator

In this project, we will use the official
Joke API to create a random joke generator.
The application will fetch a random joke
from the API and display it on the screen.
We will use useEffect to fetch the joke 
from the API when the component mounts 
and to update the joke whenever the user clicks a button.

Step 1:
Create a new React project using npm create vite@latest.

Step 2:
Open the App.js file and remove the existing code.

Step 3:
Import the useState and useEffect hooks from the react package.

Step 4:
Create a functional component named App.

Step 5:
Inside the App component, create a state variable named joke
and initialize it to an empty string using the useState hook.

Step 6:
Create an async function named fetchJoke that fetches a 
random joke from the API and updates the joke state variable.

Step 7:
Use the useEffect hook to call the fetchJoke
function when the component mounts.

Step 8:
In the return statement of the App component,
display the joke state variable inside a paragraph element.

Step 9:
Add a button element that, when clicked,
calls the fetchJoke function again to fetch a new joke.