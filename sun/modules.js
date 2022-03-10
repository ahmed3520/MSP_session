/*

 Now, we finally get to talk about the module pattern. We've built ourselves up through a solid understanding of lexical scope. Lexical scope gives us an understanding of how closure works, and closure then is a necessary component to understand the module pattern. Before we look at what the module pattern is, we need to look at what the module pattern is not.


This is an extremely common pattern, a common pattern where you have a set of behavior-like functions and a set of data that those functions operate on. And you wanna collect them together into some logical unit, the simplest way is to just make an object and put your data and your functions directly on the object.


I would say that this has a name, unofficially, but this had a name as a pattern, this is the namespace pattern. Taking a set of functions and data and putting them inside of an object, putting them as properties instead of variables, it is effectively collecting them into a namespace.


Not really a syntactic feature of the language, but it's an idiom that we make namespaces with objects. And for years, this was an extremely common pattern. This is how people collected functionality together. This was sort of the primitive data structure, if you will. Nothing wrong with this particular pattern.


I've used it on many occasions. You've probably seen it in your own code. But i would tell you it is definitely, 100%, positively not a module. And the reason it's not a module is that the module pattern requires the concept of encapsulation. Encapsulation is a fancy sounding CS word.


All it really means is the idea of hiding data and behavior. All it really means is, not only have I collected it together, which is what the namespace creates, but I need some notion of hiding, some idea for information hiding, or some control over visibility. A module, the idea of a module, is that there are things that are public, that's your public API, and there are things that are private, that's things that nobody on the outside can touch.


There's an idea of visibility, even if the only visibility notion is either public or private, that is still an incantation of the idea of encapsulation. So if you wanna have a module, you gotta have encapsulation, you gotta have data hiding. And here, we can clearly see that the properties and functions that exist are public, therefore it's not a module.

So we can take this same idea and layer on the idea, or layer on the technique of encapsulation of information hiding, and we all of the sudden make it a module. So let's look at what that looks like. The classic module pattern, sometimes referred to as the revealing module pattern, it encapsulates data and it does so with closure.

That's key. So you can't have a module, if you don't have closure. It's just not possible, okay? Even the F6 modules, which we will talk about in a little bit, conceptually, we need to think about them as closure. The module pattern, first sort of codified as the classic or the revealing module pattern.

It was codified by Doug Crawford-ish in 2001, and this is kinda what it looks like. It has two components to it. Number one, we have an outer enclosing function. In this case, it's an IIFE, everybody see the IIFE there? It's an IIFE, and when we run a module as an IIFE, that's kind of like saying it's a singleton.

Since we know IIFEs run once and then they're done, this is sort of like a singleton. It runs once, and then it's done, except done only in the air quote sense, because the closure is gonna prevent that scope from going away. The second component then, is that we have an inner function, in this case ask on line 7, that is closed over those variables, in this case, it is closed over the teacher variable.

Since it's closed over the teacher variable, the workshop object on the outside, which has now reference to that function, is preserving that inner scope through closure. Ask is closed over teacher, and when we say workshop.ask on the outside, that's scope didn't get garbage collected and go away, that scope is still there, that state is still there, and that's how we effect or create the module pattern, the idiom of module pattern in JavaScript.

We keep our private state private, and we expose things on an object, like what I'm doing here with the public API object. Is I'm exposing only the ask function. But I could have hundreds of other functions that were private, that could not be accessed from the outside. And yet the closure functions can access them all day long, if they want to, because of closure.

So I can say workshop.ask, but I can't say workshop.teacher. Teacher is hidden. Roll that.
 That's closure inaction. It's only one of hundreds of possible applications of closure. But we couldn't do the module pattern in this way. We couldn't affect this idea of information hiding of encapsulation without closure.

 What's critical to recognize here is that this usage of closure is actually closing over variables that are designed to change state over time. That's the whole purpose of a module, is to track state over time. In fact, I'd go so far as to say, if you have a thing that you call a module, and it doesn't have any state, or rather, it doesn't have any state that ever changes, it's not a module.

It's just an over-engineered namespace, okay? The purpose of a module is that you have some state that you're closed over, and you are controlling access to it by exposing a minimal public API. Remember that principle of least exposure privilege? That's in action here. We're saying keep everything hidden, except minimally expose only what's necessary on the outside.


That's the idea here. Minimally expose only what's necessary. That's the module pattern. Now, the previous slide had a module IIFE, AKA, a module singleton. But that's not the only way to make modules. We can make just regular functions that can be called multiple times. And every time a function is called, it's gonna produce a new instance of our module.

We lovingly refer to those as factory functions, okay? This is a workshop module factory function. I can call it once, like I do on line 12, but I could call it a hundred other times and have a hundred other separate instances that all have their own state. They're all separate and they don't mix with each other.

And that is the module pattern in a nutshell. The idea that I take some behavior, and data that that behavior operates on, and encapsulate it into a data structure. Hide what I don't need to show, and expose only the minimal necessary API. That's a module. And I would argue that the module pattern is certainly the most prevalent, and potentially the most important of all code organization patterns.

Probably 80, 90% of all JavaScript that's ever been written has used some mechanism like the module pattern as it's code organization pattern. That's not to say you don't have other patterns, like classes, for example, but the module pattern is extremely prevalent and important, and it's important that we understand how it works.

Now, let's all admit that this is sort of a syntactic hack, this is not really like, you wouldn't really call this first class language support for a module. You would call this an idiom, a pattern that we do using the tools in a way that accomplishes some end goal.


*/


var session ={
    teacher: 'ahmed',
    ask(question){
        console.log(this.teacher,question)
    },
}

session.ask("Is this a module?")


//Module encapsulate data and behavior (methods) together. 
//The state of (data) of a module is held by its methods via closures

//so you can not have a data if you can not have a closure

//module pattern is codified by Doug crawford