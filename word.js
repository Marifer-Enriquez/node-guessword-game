var Letter = require("./letter.js");


function Word (wordArray) {
    this.wordArray = wordArray;
    this.testWord =[];
    this.createWord = function (){
        for (var i = 0; i < wordArray.length; i ++){
            var word = new Letter (wordArray[i]);
            this.testWord.push(word);
        }
    }
    this.showWord = function(){
        var displayWord = [];
        for (var i = 0; i <this.testWord[i]; i++){
            display.push(this.testWord[i].display());
        }
        return displayWord.join(" ");
    }
    this.checkGuess = function (uGuess) {
        for (var i =0; i < this.testWord.length; i++){
            this.testWord[i].check(uGuess);
        }
    }

}

module.exports = Word;