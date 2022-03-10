//Lexial Scope: means compile time scope
//at the time that you wrote the code and that code got compiled 
//the decisions for how the scoping were goint to occur were made in 
//in stone at that point.
//there were no more decisions about scope that were to be made beyond that
//lexial phase. so the compiler decides what your scope is and we already saw that
//we saw that implicitly when we walked through our code and walked into a function
//because there was a function there that created a new unit of scope and
//and any declarations inside of it were attached to that new nested scope.
/*
On the left hand side we see lexical scope and i want you to think of it like
a building. It's like the current scope is the first floor of the building
I'm looking for something on the first floor!!

I either find it or I don't!!

If i do not find it ther! what do i do?! I go up one level of my scoping
I go out one level of my scoping and it's kinda like taking the stairs
and in the elevator up to the second floor of my building and looking fot it there.
and go into the third, fourth, fifth, and eventually i get to the top
the toop floor of the building which represents the global scope. 
and i either find it or i don't!! bu there's no more "FLOORS" to go to

*/ 
//example:

++++
function foo(){
  ****
  var bar = "bar"
  ---
  function baz(){
    console.log(bar)
  }
  ---
  baz();
  ******
}
foo();
+++
//you choosed to put baz inside of foo which means you chose to nest
//the scope of baz inside of the scope foo.
//these decisions we call it compile time decisions for how the scope works.
/*

when he process through those nested scope, he know exactly
what the scopes looks like because it can't change.

It's a runtime decision. and your code  is not going to change itself at runtime

he does not actualy have to go frm scope to another one because it knows

at compile time where everything is and can cache all of these refernces 
so from an optimization perspective, he know categorically where bar is already because it knows exactly
where bar is already

*/

////////////////////////////////////////////////////////////////////////////////////////////
//closure:::::

/*
Kyle simpson: I think closure is one of the most important
  ideas ever invented in computer science.

  --- it's actually come to us from lambda calculus.:https://en.wikipedia.org/wiki/Lambda_calculus


  ///imp

  closure is when a function is able to remember it's lexical scope 
  even when it's called outside of it's lexical scope.

  /the second part of deffinittion is important because without it we do not have closure.

  It's this function that is able to hold on to a refernce to that scope
  and wherever you pass the function it contiues to have access to the scope

*/

//in this fun wait a sec will be executed after a 1 sec which meeans  the ask one has already finished
//and the variable question should have gone away
function ask(question){
  setTimeout(function waitASec(){
    console.log(question)
  },100)
}
//it's best to assume that closure is a scope-based operation.



/*  
in closure you do not close over a value!!!. 

YOU CLOSE OVER A VARIABLE!!!, which means you have a linkage to that variable

which means at the time you access it, you are seeing whatever value 
that variable has at that moment not it had before.

*/

//EXAMPLE:

var teacher = "Mr. Rogers";

var myTeacher = function(){
  console.log(teacher)
}
teacher = "Suzy"

myTeacher(); //????? 


///Closures:loop

for (var i = 0; i <=3; i++) {
setTimeout(function(){
  console.log(`i: ${i}`)
},i*1000)
}



//how to solve it?/

for (var i = 0; i <=3; i++) {
  let j = i;
  setTimeout(function(){
    console.log(`i: ${j}`)
  },j*1000)
   }

//it gonna create a whole new j in that whole new iteration of the loop.

// they decided in es6 to use let instead of var and that will make a new 'I' in every iteration





//A closure is a pairing of:

//    1-A function and
//    2-A reference to that function's outer scope (lexical environment)
//A lexical environment is part of every execution context (stack frame) and is a map between identifiers (i.e. local variable names) and values.

//Every function in JavaScript maintains a reference to its outer lexical environment. This reference is used to configure the execution context created when a function is invoked. 
//This reference enables code inside the function to "see" variables declared outside the function, 
//regardless of when and where the function is called.

//If a function was called by a function, which in turn was called by another function, 
//then a chain of references to outer lexical environments is created. This chain is called the scope chain.

//In the following code, inner forms a closure with the lexical environment of the execution context 
//created when foo is invoked, closing over variable secret:


function foo() {
    const secret = Math.trunc(Math.random() * 100)
    return function inner() {
      console.log(`The secret number is ${secret}.`)
    }
  }
  const f = foo() // `secret` is not directly accessible from outside `foo`
  f() // The only way to retrieve `secret`, is to invoke `f`

/* 
  In other words: in JavaScript, functions carry a reference to a private "box of state",
   to which only they (and any other functions declared within the same lexical environment) have access. 
   This box of the state is invisible to the caller of the function, delivering an excellent mechanism for data-hiding and encapsulation.

And remember: functions in JavaScript can be passed around like variables (first-class functions),
 meaning these pairings of functionality and state can be passed around your program: similar to how you might pass an instance of a class around in C++.

If JavaScript did not have closures, then more states would have to be passed between functions explicitly, 
making parameter lists longer and code noisier.

So, if you want a function to always have access to a private piece of state, you can use a closure.

...and frequently we do want to associate the state with a function. For example, in Java or C++,
 when you add a private instance variable and a method to a class, you are associating the state with functionality.

In C and most other common languages, after a function returns, all the local variables are no longer accessible because the stack-frame is destroyed. In JavaScript, if you declare a function within another function, then the local variables of the outer function can remain accessible after returning from it. In this way, in the code above, secret remains available to the function object inner, after it has been returned from foo.4
*/  

//Uses of Closures
/* 
Closures are useful whenever you need a private state associated
 with a function. This is a very common scenario - and
  remember: JavaScript did not have a class syntax until 2015, and it still does not have a private field syntax. Closures meet this need.
  */


 