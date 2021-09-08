A command-line reverse polish notation (RPN) calculator using node.js. Test assignment

A high-level description of your solution
-----------------
Overall concept is to parse user input. Expected input is number and four standard arithmetic operators separated by comma.
Everything else is treated as invalid input and ignored. In case there's a number we should add it to the stack.
In case it's an operator we should execute appropriate calculation. But we need at least two operands.
User has a chance to close application and to clear values and start over.


Technical choices
-----------------
Node.js is the only choice I see because I have worked with front-end only before. Third-party package used to make implementation simpler (readline) or more readable for user (chalk).
I've used `const operation = OPERATIONS[operator]` to get operation from predefined constant map.
But probably we can provide it as a parameter to `calculate` method.
Callback interface - function which accepts two numbers and return a number


Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project
-----------------
That's my 'Hello world' app written on node.js. So it's hard to predict implementation of an alternate interface (such as WebSocket, file, or TCP socket).
But probably the point of extension will be `listenToInput` method.
Invalid input is ignored. Alternatively previous data may be cleared, or app can prompt user to decide what should be done with previous input.


How to run your code, if applicable
-----------------
Prerequisites - you should have node.js installed (including npm)
Link to download page - https://nodejs.org/en/download/

To start the app
1. Open project folder in command line.
1. Run `npm install` to install dependencies.
1. Run `npm run start` script.


Link to the hosted application, if applicable
-----------------
Not applicable.
