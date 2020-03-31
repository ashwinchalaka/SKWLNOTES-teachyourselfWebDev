# [ REACT ] -- SKWLNotes-webdev

### What is React?
* React code is written in "JSX, a syntax extension of JavaScript". This allows us to manipulate and create html code with the power of essentially JavaScript commands.
* Hence, we can render a html document or a collection of html documents with React.

* React carries a "lightweight representation" of the html document, and then uses references to manipulate specific sections of the document.	

### Key Vocabulary
* ***JSX:*** a syntatic extension of JavaScript.
* ***ReactDOM:*** React's rendering API that allows us to render content to the DOM while using only JSX, as seen here
	
	```
	ReactDOM.render(JSX, document.getElementById('root'))
	```
	"You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to."
* ***component:*** essentially a method
* ***stateless functional component:*** receives data, able to manipulate it, but does not continue to monitor changes after that.
* ***arrow function syntax:*** JS functions use arrow syntax to define a function, as follows
	
	```
	const ChildComponent = () => {
		return (
		    <div>
		      <p>I am the child</p>
		    </div>
	  );
	};
	```
* 

### Learning React Steps (on freeCodeCamp)
1. JSX Hello World
2. Inserting HTML using JSX
3. Comments syntax
4. Using ReactDOM.render() to render html to the DOM
5. JSX keywords for HTML vs HTML keywords (ie. class is className)
6. JSX tags for HTML vs HTML tags (ie. `<br />` instead of `<br>`)
7. Stateless Functional Component -- for manipulating HTML with functions
8. Housing components in classes, also parent and child classes
9. Nested components

### Information Sources
* [Learn web development on freecodecamp.com](https://www.freecodecamp.org/learn/)