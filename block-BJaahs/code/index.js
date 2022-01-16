// Without Object

let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amman', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;
function isAnswerCorrect(index){
    return index === correctAnswerIndex;
}
function getCorrectAnswer(){
    return options[correctAnswerIndex];
}

// Test 

isAnswerCorrect(1) // true
getCorrectAnswer() // 'Amman'


// Organize using object

let question = {
    title : 'Where is the capital of Jordan',
    options : ['Tashkent', 'Amman', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex : 1,
    isAnswerCorrect : function(index){
        return index === question.correctAnswerIndex;
    },
    getCorrectAnswer : function(){
        return question.options[correctAnswerIndex];
    }
};

// Test

question.title // 'Where is the capital of Jordan'
let checkAnswer = question.isAnswerCorrect;
checkAnswer(1) // true
let correctAnswer = question.getCorrectAnswer;
correctAnswer() // 'Amman'


// Use a function to create object 

function createQuestion(title,options,correctAnswerIndex){
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function(index){
        return index === correctAnswerIndex;
    };
    question.getCorrectAnswer = function(){
        return options[correctAnswerIndex];
    };
    return question;
}

// Test

let question = createQuestion('Where is the capital of Jordan',['Tashkent', 'Amman', 'Kuwait City', 'Nairobi'],1)
question.isAnswerCorrect(1) // true
question.getCorrectAnswer() // 'Amman'

