let x = 10;
/*let is a JavaScript keyword that is used to declare a block-scoped variable.

In JavaScript, variables declared with the var keyword are
function-scoped, which means that they are accessible within
the function in which they are declared, as well as any
functions that are nested within that function.

On the other hand, variables declared with the let keyword
are block-scoped, which means that they are only accessible
within the block in which they are declared. A block is a
piece of code that is enclosed within curly braces, such as
the body of an if statement or a for loop.*/
if (x > 15) {
  console.log("x is greater than 15");
} else if (x > 10) {
  console.log("x is greater than 10 but less than or equal to 15");
} else {
  console.log("x is less than or equal to 10");
}
