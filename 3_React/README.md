# [ REACT ] -- SKWLNotes-webdev

### What is React?
* React code is written in "JSX, a syntax extension of JavaScript". This allows us to manipulate and create html code with the power of essentially JavaScript commands.
* Hence, we can render a html document or a collection of html documents with React.

* React carries a "lightweight representation" of the html document, and then uses references to manipulate specific sections of the document.	

### Key Vocabulary
* ***JSX:*** a syntatic extension of JavaScript.
* ***ReactDOM API:*** React's rendering API that allows us to render content to the DOM while using only JSX, as seen here
	
	```
	{/* Generic syntax */}
	ReactDOM.render(componentToRender, targetNode);
	{/* Example of rendering an element (html variable) to the DOM */}
	ReactDOM.render(JSX, document.getElementById('root'));
	{/* Example of rendering a component (complilation of html) to the DOM */}
	ReactDOM.render(<TypesOfFood />,document.getElementById('challenge-node'));
	```
	"You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to."
* ***Component:*** essentially a method
* ***Stateless Functional Component:*** receives data, able to manipulate it, but does not continue to monitor changes after that.
* ***Arrow Function Syntax:*** JS functions use arrow syntax to define a function, as follows
	
	```
	const ChildComponent = () => {
		return (
		    <div>
		      <p>I am the child</p>
		    </div>
	  );
	};
	```
* ***React 'props' or 'properties':*** We use props to encode data into the html content. Something saved in the database or taken from somewhere on the page (either through a form or an interaction) can be sent into a functional component and passed as an argument for that function.
* ***'const' vs. 'component':***  I would use a constant when I wish to store static HTML code and even to encode data. Components are useful for data and html manipulation.

### Learning React Steps (on freeCodeCamp)
1. JSX Hello World
2. Inserting HTML using JSX
3. Comments syntax
4. Using ReactDOM.render() to render **HTML** to the DOM
5. JSX keywords for HTML vs HTML keywords (ie. class is className)
6. JSX tags for HTML vs HTML tags (ie. `<br />` instead of `<br>`)
7. Stateless Functional Component -- for manipulating HTML with functions
8. Housing components in classes, also parent and child classes
9. Nested components and Double Nested components (not official name) -- chiild, parent, grandparent essentially
10. More nested components (more complex "compositions")
11. Using ReactDOM.render() to render a **component** to the DOM
12. **Everything from above, but from scratch**
	* _create a component that extends React.Component_
	* _create a constructor that calls the parents constructor_
	* _create a render() function that returns() the html_
	* _close out the component class_
	* _use ReactDOM API to render the component to the document at a particular location referenced by id_
13. Passing information through 'props' (a.k.a. properties) when you call components
	* string arguments w/ key-value pair
	* array arguments w/ key-value pair
	* default arguments w/ key-value pair
	* number arguments w/ key-value pair
14. Define prop 'types', specifies the type of data expected in a particular props argument.

### Information Sources
* [Learn web development on freecodecamp.com](https://www.freecodecamp.org/learn/)