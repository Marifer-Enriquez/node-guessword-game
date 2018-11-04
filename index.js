//dependencies
var Word = require ("./word.js");
var inquirer = require ("inquirer");
//var Letter = require ("./letter.js");

//global variables
var list = ["red", "orange", "purple", "yellow", "green", "blue", "pink"];
var select = 0;
var chosenWord = "";
var gameWord = "";
var counter = 0; 

function start (){
 select = Math.floor(Math.random()*list.length);
 chosenWord = list[select];
 gameWord = new Word (chosenWord);
 gameWord.createWord();
 console.log("You have 3 chances to guess the right color")
 prompt ();
}

function prompt(){
    if(counter<8){
        console.log(gameWord.showWord());
        inquirer.prompt([
            {
                type: "input",
                name: "letterInput",
                message: "Choose a letter and press enter"
            }
        ]).then(function(data){
            checkAnswer(data);
        });
    }
    else{
        console.log("Out of guesses... play again!")
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        start ();
    }
}

function checkAnswer (data){
    if (data.letterInput.length === 1){
        var checkright = data.letterInput;
        var temp = gameWord.showWord();
        console.log(data.letterInput);
         gameWord.checkGuess(checkright);
        if (checkright === temp){
            console.log(gameWord);
            console.log("wrong, try again");
            counter ++;
            console.log ((8-counter) + " guesses remaining");
            prompt();
        
        }
        else if (!data.letterInput.length === 1){
            console.log("choose only one letter at a time");
            prompt();
        }
        else{
            right();
        }
    }
    }

function right(){
    console.log("Great, you guessed correctly");
    if (chosenWord.replace(/ /g, "") == (gameWord.showWord()).replace(/ /g,"")){
        console.log(gameWord.showWord().list);
        console.log("You win!");
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        start ();
    }
    else{
        prompt();
    }
}

start();