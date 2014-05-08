// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Ryan Spencer
//  2. david hman87@outlook.com


// 1. "YOU SIGNED... WHO?!"




// 2. "Here they Come!"





// 3. "TIME IS MONEY!"

function Client (name, age, quote)  { 
    this.name = name;
    this.age = age;
    this.quote = quote;

    
    this.showQuote = function(){
        console.log("Quote: " + this.quote);
    }
    
}

/*function addClient(name, age, quote){
    this.name = prompt("name?");
    this.age = prompt("age?");
    this.quote = prompt("favorite quote?");
    
    this.clientArray = []
    clientArray.push(this.name, this.age, this.quote);
    console.log(clientArray)
}*/


var actor = new Array();
actor.push(prompt("Name?"));
actor.push(prompt("Age?"));
actor.push(prompt("Favorite Quote?"));
console.log(actor.length);
var newActor = new Client( actor[0], actor[1], actor[2]);


var adamSandler = new Client( "Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristenBell = new Client( "Kristen Bell", 33, "Do you wanna build a snowman?");
var jimCarrey = new Client( "Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");
adamSandler.showQuote();

var clientArray = [
    [actor[0], actor[1], actor[2] ],
    ["Adam Sandler", 47, "That's your home! Are you too good for your home?!"],
    ["Kristen Bell", 33, "Do you wanna build a snowman?"],
    ["Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!"]
    ];
    
//clientArray[0][1];
//var clientArray = [adamSandler, kristenBell, jimCarrey]
for (var i in clientArray){
    var newActor = new Client(clientArray[i][0], clientArray[i][1], clientArray[i][2]);
    console.log("Client: " + clientArray[i][0] + "\n Age: " + clientArray[i][1] + "\n Quote: " + clientArray[i][2]);
}


/* var adamSandler = new Client( "Adam Sandler", 47, "That's your home! Are you too good for your home?!");
adamSandler.showQuote();
var kristenBell = new Client( "Kristen Bell", 33, "Do you wanna build a snowman?");
var jimCarrey = new Client( "Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

var clients = [adamSandler, kristenBell, jimCarrey] */


/*for ( var i in client)
{ 
    console.log("Client: " + client[i].name + "\n Age: " + client[i].age + "\n Quote: " + client[i].quote);
}


/* 
1. create array
2. prompt for name
3. store into array.
4. prompt for age, 
5. store into array.
6. repeat for quote.
7. call client function. */


var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"




// ** BONUS **


//  Your Reflection:
/*
David and I were both struggling with JS.  We both had a bit of programming experience from books/online tutorials.  I think we had good ideas on how to attack the problem but struggled more with syntax.

As we got into the code a bit deeper, we started to confuse some things.  I think commenting code and better problem definition would have helped.  

I think that David and I are both strong individuals and we both struggled with how much we should push our opinions.  I think we both need to learn how to Drive/Navigate better.  That said I would much rather pair with someone who has ideas than someone that doesn't talk.  I am actually planning to do a peer pairing session with him.





