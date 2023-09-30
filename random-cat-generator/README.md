# Random-Cat-Generator

In this project, you will build a 
simple web app that displays a
random cat image from an API.
You will use useEffect to fetch
data from the API and update
the state of your component. 
You will also add a button 
that generates a new random
cat image when clicked.



Step 1
First, create a new React
project using Create React App.
You can do this by running
npm create vite@latest
my-app in your terminal.





Step 2
Open your project in your
code editor and navigate
to the App.js file.
Delete all the code in
the file.




Step 3
Import useState and
useEffect from the 
React library.
Then create a state
variable called cat
and set its initial
value to an empty string.






Step 4
In the useEffect hook,
use an async function
to fetch data from the Cat API.
Then use setCat to 
update the cat state
variable with the URL 
of a random cat image. 






Step 5
Define a new function 
called generateNewCat
that uses the same API
endpoint as before to fetch
a new random cat image
and update the state
variable cat with the
new image URL.







Step 6
Return a div that displays
the cat image. The src
attribute of the img tag 
is set to the cat state variable.
Also add a button element
that triggers the generateNewCat
function when clicked.






Step 7
Save the file and start
the development server
by running npm start in
your terminal.
You should see a random
cat image displayed in
your web browser,
along with a button
that generates a new
random cat image when clicked.






You have built a simple web app that uses useEffect to fetch data from an API and update the state of your component.
You have also added a button that generates a new random cat image when clicked.
You can now experiment with customizing your app by adding more features or styling.