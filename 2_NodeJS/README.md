# [ NodeJS ] -- SKWLNOTES-webdev

### Use Cases
* "Good for: making servers capable of handling lots of connections and moving data quickly" (Coding Dojo)
* Mainly node is used to build lightweight servers
* Runs Javascript with competitive efficiency on the computer (as opposed to the browser)
	* Why do we care?
		* Suppose we build a "static" website. That means a website the uses only HTML, CSS, and basic Javascript. For a static website, we only need the browser to interpret the HTML, CSS, and Javascript. It is as if you click on a file on your desktop and it automatically opens in an application. So a static website will opened by a browser application and only then is the code processed. Then later came the server, which was originally built using C++ or Java (a language that we run on the computer, and the language we use to create the browser). NodeJS came later because they wanted to use JavaScript instead of C++ or Java to write the code for the server. But until then, JavaScript only works on the browser, so they needed to create a way for computers to understand JavaScript. So now when we finish creating our HTML, CSS, and basic JavaScript we also create a server to manage many users coming to the website and entering information. That entire project is stored on the cloud. So some computer in a random warehouse which stores our whole application needs to know how to interpret the server code, because that computer does not have or use a browser. But we install NodeJS in this computer and now it understands the server code and sends all the other files and code to whoever accesses the website through the browser on their computer. I hope this did not confuse you more.
* Includes "npm" (node package manager), which is full of open source developer tools
* Runs Javascript w/o a browser
	* Note: You cannot run DOM manipulation commands in the terminal javascript interpreter

Successful with NodeJS Server | Problematic with NodeJS Server
------------ | -------------
Chat app -- managing thousands of messages up to 2000 characters each | Mathematician's app -- managing thousands of requests and they all require complex calculations

### Installation
[Link to NodeJS homepage](https://nodejs.org/en/)

After downloading files, open terminal to confirm a correct install ...

```
<!--In order to open up the javascript interpreter, enter-->
$ node

<!--Test the interpreter by typing in javascript code-->
> console.log("Hello World!");

<!--To exit the interpreter, enter-->
> .exit

```
If the above commands did not work ...

```
<!-- (for MacOS users) -->
$ sudo chown -R $(whoami) /usr/local/

```

### Helpful NPM installs

* `$ npm install nodemon` -- automatically runs a JS file as you make changes to it (great for bug detection)
	* To use after install just use the nodemon command followed by the name of the javascript file `$ nodemon test.js`

### Relevant articles

* [6 Main Reasons Why Node.js Has Become a Standard for Enterprise-Level Organizations](https://www.monterail.com/blog/nodejs-development-enterprises)