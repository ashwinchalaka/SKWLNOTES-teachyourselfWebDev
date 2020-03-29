# [ NodeJS ] -- SKWLNOTES-webdev

### Use Cases
1. Mainly node is used to build lightweight servers
2. Runs Javascript with competitive efficiency
3. Includes "npm" (node package manager), which is full of open source developer tools
4. Runs Javascript w/o a browser
	* Note: You cannot run DOM manipulation commands in the terminal javascript interpreter

Successful with NodeJS Server | Problematic with NodeJS Server
------------ | -------------
Chat app -- managing thousands of messages up to 2000 characters each | Mathematicians app -- managing thousands of requests and they all require complex calculations

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

1. `$ npm install nodemon` -- automatically runs a JS file as you make changes to it (great for bug detection)
	* To use after install just use the nodemon command followed by the name of the javascript file `$ nodemon test.js`
2. 

