Sometimes, you will need to do multiple asynchronous calls some of which are dependent
on the result of a previous function or are independent, but the order in which they run
can be left up to the program to decide.
We can do this with the help of `async.auto`.  

## Challenge

In this problem you will need to write a program that first reads the contents
of a file. The file will contain a single URL. Using `http.get`, create a GET request to
this URL and write the response body to a new file as well as `console.log` the response body.

The path will be provided as the first command-line argument to your program.

.
