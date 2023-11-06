# ToDo-useCallback

Step 1: Set up a new React project

-  Create a new directory for your project.
-  Set up a new React project using 
-  Create React App or your
preferred method.

Step 2: Create a component that
renders a list of items

-  Create a new component, such as
ItemList, which will be responsible
for rendering a list of items.
-  Define a state variable,
items, using the useState hook,
to hold the list of items.
-  Render the list of items using a
ul element and map over the items array.

Step 3: Create a form component
to add new items

-  Create another component, such as
AddItemForm, which will be responsible
for adding new items to the list.
-  Define a state variable, text,
using the useState hook, to
hold the text of the new item.
-  Render a form with an input
field and a submit button.
-  Use the onChange event to update the
text state variable as the user types.
-  Use the onSubmit event to add the new item
to the items array and clear the input field.

Step 4: Pass the add item function as a prop

-  In the parent component, such as App,
define a function, addItem, that adds
a new item to the list of items.
-  Pass the addItem function as a
prop to the AddItemForm component.
-  In the AddItemForm component, 
use the props.addItem function
to add the new item to the list.

Step 5: Optimize the addItem
function using useCallback

-  Import the useCallback hook from React.
-  Wrap the addItem function definition
in the useCallback hook, specifying the
dependencies (if any) in the dependency array.
-  Assign the result of useCallback
to a constant variable, addItem.

Step 6: Test the application

-  Render the ItemList and AddItemForm
components in the App component.
-  Verify that you can add items to
the list using the AddItemForm component.
-  Verify that the addItem function
is optimized and works correctly.