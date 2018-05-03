require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

var answer = question.ask("What does your wifes knees look like? ");
console.log(answer);

talk.intro();
talk.hello("Cara");

goodbye();