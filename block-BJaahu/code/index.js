// Prototypal pattern of object creation 

let questionMethods = {
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
};

function createQuestion(title,options,correctAnswerIndex){
    let question = Object.create(questionMethods);
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    return question;
}


// Test

let firstQuestion =  createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
console.group('First Question')
console.log(firstQuestion.title) // Where is the capital of Jordan
console.log(firstQuestion.isAnswerCorrect(0)) // false
console.log(firstQuestion.correctAnswerIndex) // 1
console.log(firstQuestion.getCorrectAnswer()) // Amaan
console.groupEnd()

let secondQuestion = createQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

console.group('Second Question')
console.log(secondQuestion.title) // Where is the capital of Jamaica
console.log(secondQuestion.isAnswerCorrect(0)) // false
console.log(secondQuestion.correctAnswerIndex) // 2
console.log(secondQuestion.getCorrectAnswer()) // Kingston
console.groupEnd()


// Pseudoclassical Pattern

function CreateQuestion(title,options,correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}

CreateQuestion.prototype = {
   isAnswerCorrect: function(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function(){
        return this.options[this.correctAnswerIndex];
    }
};


// Test

let firstQuestion = new CreateQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
console.group('First Question')
console.log(firstQuestion.title) // Where is the capital of Jordan
console.log(firstQuestion.isAnswerCorrect(0)) // false
console.log(firstQuestion.correctAnswerIndex) // 1
console.log(firstQuestion.getCorrectAnswer()) // Amaan
console.groupEnd()

console.group('Second Question')
let secondQuestion = new CreateQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );
console.log(secondQuestion.title) // Where is the capital of Jamaica
console.log(secondQuestion.isAnswerCorrect(0)) // false
console.log(secondQuestion.correctAnswerIndex) // 2
console.log(secondQuestion.getCorrectAnswer()) // Kingston
console.groupEnd()

// Using class

class Question {
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}

// Test 

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );

console.group('First Question')
console.log(firstQuestion.title) // Where is the capital of Jordan
console.log(firstQuestion.isAnswerCorrect(0)) // false
console.log(firstQuestion.correctAnswerIndex) // 1
console.log(firstQuestion.getCorrectAnswer()) // Amaan
console.groupEnd()

let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

console.group('Second Question')
console.log(secondQuestion.title) // Where is the capital of Jamaica
console.log(secondQuestion.isAnswerCorrect(0)) // false
console.log(secondQuestion.correctAnswerIndex) // 2
console.log(secondQuestion.getCorrectAnswer()) // Kingston
console.groupEnd()