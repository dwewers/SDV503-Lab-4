# SDV503-Lab-4
In this lesson we covered functions, these are JS statements that are used to perform certain tasks or calculate a value. In order to do this, we need to first call it from somewhere within the scope that we want to call it from. The way we do this looks like this:

function -insert name here-(){

an example of this would be:

function calcTime()

Below is some examples of functions that we did

function sub(x, y){ // The name of the function is sub. And the parameters are x and y
    return x - y
}
sub(10, 5) // This is the arguement. We are setting x to 10, and y to 5

Here are some more examples:

function foo(x, y, z, ...args){
    return console.log (x, y, z, args)
}
foo(1, 2, 3, 4, 5, 6, 7)

function asd(...args){
    console.log(args[5])
}
var arr = [1, 2, 3, 4, 5, 6, 7]
asd(...arr)


function apple(a , s , d , f , ...args){
   return console.log(a , s , d , f , ...args)
}
apple(1, 2, 3, 4, 5, 6, 7, 8, 9)



I didnt really have any trouble with this lesson as it was recapping on things that I did in the FreeCodeCamp. I think it was important that we learned this, as functions are used quite often when writing code. They can also be very useful, as we can declare them as a parameter, and use them again further on in the code.

length property of a function:

The length property of a function indicates how many arguments the function expects.
