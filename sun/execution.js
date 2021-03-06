/*  
 We have all our plan set up. There's no more declaration code, there is still executable code. So even though line one looks like one statement, it's actually two separate things. There's the var teacher part. That's what the compiler handles. And then there's the teacher = "Kyle" part, that's what the execution engine's gonna handle.


Now, remember a little bit ago, I said that there's only two roles that a variable can play. It can either be the target of an assignment, and you can see on line one, the teacher is in that role, it is receiving an assignment, it's the target. The only other role that it can play is in the source position.


It's going to give up its value. You're going to retrieve the value from it. That's like what we see on line ten, question, is in that position. So, old school terminology for this is, and this isn't what people normally, if you do a Google search on Wikipedia, they won't use these terms.


But I learned computer science more than two decades ago. So here's my old school terminology. We used to refer to this as a left hand side, an LHS and a RHS, a right hand side. As in left and right hand of an equals. Nowadays, you might call it an L value, an R value.


Maybe just for simple purposes, let's call them source and target. Here on line one, teacher's in a target position. On line ten, question, is in a source position. You follow that? That's a piece of information that the compiler picked up. Whenever it created that whole abstract tree and all that, it knew that each identifier, each marble, not only what color it was, but what position it was in.


And that's critical, and we'll see in a bit why that's so critical. It's critical to know that we're dealing with something that's receiving a value, it's a target, or we're gonna retrieve it's value, okay? So let's then execute this code the way the JavaScript engine would, with all that execution plan and scope stuff set up.

Each time we enter a scope, all of the plans for the buckets and the marbles will have been created, and so now we're ready to go ahead and execute. We have two people talking, again. We still have the scope manager, cuz he's gotta hand out the marbles. But we also now have a different person talking in the conversation.


And that's the virtual machine, it's the JavaScript engine that's executing code. So that conversation on line one, remember, there's no var there, it's gonna go like this. I'll play the part of the virtual machine or the JavaScript engine. Hey, scope manager, JavaScript engine here. I have a target reference for a variable called teacher.


You see it's a target reference, it's receiving an assignment. Have you ever heard of this marble called teacher? We're talking to the red bucket, remember. And it can only answer yes or no. So in this case, what's it gonna answer?

 Yes, why? Because at compile time we formally declared it, okay?


Had we not formally declared it, things are different. But because at compile time we formally declared something called teacher, now we know, yes, here's your red marble. So it's fundamentally a lookup. We're saying, hey, red bucket, do you have a marble called teacher? If so, please give it to me, okay?


And here we get the red marble, here's your marble, okay? And what are we gonna do with that marble? Well, we're gonna assign a value to it. That marble represents an area in memory that needs to get assigned to, essentially. So, we're gonna take the value from the right hand side, in this case, the string Kyle, and assign it to that location represented by the red marble teacher.

Line three through six, and line eight through eleven, those were declarations, they're not there anymore, in a sense. They've been compiled away. So, execution would move to line 13. Let's talk about how line 13 executes. Don't skip just to how the function itself, how it runs inside. We first have to ask how the line 13 itself executes.


Cuz JavaScript has gotta figure out that and execute it. So is the other class identifier, the thing that we see there at the function call, is it in a target position or is it in a source position?




line 13. Is otherClass in a target position or in a source position?
Source.

 it's in a source position. We're not assigning something to otherClass. So if we're not assigning to it, what must we be doing? Pulling a value out.


We wanna know what is currently in the identifier otherClass. Because, in just a moment, we're about to turn the executor. So we need to go get it, so what are we gonna do? We're gonna do the same thing as before. We're gonna say, hey global scope, hey red marble, if you will.


I've got a source reference for a marble called otherClass. Have you ever heard of that marble? And what's the answer gonna be? Yes, that's a good thing, cuz we need a marble, if we're asking for it, we're gonna need it. So he gives us the marble, and what do we do?


We pull the value out from that location and memory conceptual, you pull the value out, what is that value at this moment?
 It's the function that otherClass was declared to point at, right? At compile time, otherClass, the identifier, was associated with that function. That value is there, or that reference to that value is there.


So that's a good thing, because then, on line 13, those parentheses that we see there on line 13, they execute the thing that we just pulled out of that variable. If we pulled out of that variable something that wasn't a function, like, null, or undefined, what do you think would happen?



 Everything would burn.
  Everything would burn. That's right. The whole program crashes down, specifically what would happen is an error called a TypeError, because we would have a value like null, or undefined, but that is not a value that is legal to execute as a function.

So we're doing something illegal with that type, that's call the TypeError, a run time error, where we're doing something with a value that's not allowed for that type. Thankfully, in this case, we got a function, so we can execute it, which means execution moves to what line?



Line four, line four does not have a var on it anymore but it does have, what kind of operation?
Has a marble.
 It has an assignment, so it's got what kind of reference to a marble in it?
A receiving one.
Target.
 A target, exactly, a receiving one, a target.


So that conversation is gonna continue exactly like it did on line one. Hey, scope of otherClass, hey, blue bucket, I have a traget reference for a marble called teacher, ever heard of it? And the answer is?
 Yes.
 Here's your marble. So now we have a location in memory, that's a different place than the one from line one.


It's a different location in memory, cuz it's a different scope. We have this marble, and then we take the value Suzy, and we assign into it, then line four is executed. Everybody good so far? Now, what's gonna happen with line five? We're gonna gloss over a bit of this detail, but Is there a reference to identifier on line five?


 Not one that we created, but there is an identifier on the list, right? There is a marble here in a conceptual sense, which is call console, that's got to exist somewhere. The JavaScript engine has that available to us as sort of like an auto global. Not something we created, but it's available nonetheless.


So the same process, look at what happened. We would basically say, hey scope of otherClass, have you ever heard of a marble called console? Cuz that's in the source position. Now, has otherClass ever defined a marble called console? So what's going to happen then, and this is the key to understanding lexical scope, is that if we cannot find a variable that is referenced within the scope, that was declared within the scope, what do we do next?


We go up one level, in this case to the global scope, and we would say, hey, global scope, have you ever heard of an identifier called console? And even though we didn't formally declare it, it's an auto global, it's already there, there's already a red marble called console.


So what is global scope gonna do? Here's your red marble, and we can look on that marble. It's an object, it has a method call logged, and so on, and so we can invoke it. Everything with me on that, okay? When you reference a variable in a source position, you have to first look it up, and when you reference a variable in a target position, you have to first look it up.

That's the key takeaway here, is that there is a look up process involved. So far our look ups have always found the thing that we were looking for. After a while, we'll talk about what happens when we don't find it. But right now we're all in the good path.

We're finding everything that we're looking for



*/
"use"
----------------------


function otherClass(){
    teacher = "Suzy";
    topic = "React";
   console.log("Welcome")
}




otherClass()

teacher;                                    //? 
topic;                                      //??












----
//strict mood
"use strict"
var teacher=  "Kyle"

function otherClass(){
    teacher = "Suzy";
    topic = "React";
    console.log("Welcome")
}
otherClass()

teacher;                                    //? 
topic;                                      //??










//////
undefined vs undeclared

undefined means: // a variable exist but at the moment it has no value

undeclared means: //never formally declared in any scope that we have access to 