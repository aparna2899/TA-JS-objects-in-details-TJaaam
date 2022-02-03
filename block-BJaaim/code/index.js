let root = document.querySelector('ul');
const titleElm = document.querySelector('#title');
const option1Elm = document.querySelector('#option1');
const option2Elm = document.querySelector('#option2');
const option3Elm = document.querySelector('#option3');
const answerElm = document.querySelector('#answer');
const btn = document.querySelector('#btn');
const div = document.querySelector('#score')

class Quiz {
    constructor(allQuestions = [], activeIndex, score = 0) {
        this.allQuestions = allQuestions;
        this.activeIndex = activeIndex;
        this.score = score;
    }
    addQuestion(title, option, correctAnswer) {
        let question = new Question(title, option, correctAnswer);
        this.allQuestions.push(question);
        this.createUI();
    }
    updateScore() {
        let ans = document.querySelector('input[name="options"]:checked').value;
        this.allQuestions.forEach(que => {
            if(que.isCorrect(ans))
            this.score = this.score + 1;
        })
        return this.score
    }
    createUI() {
        this.allQuestions.forEach(que => {
        root.innerHTML = '';
        this.activeIndex = this.allQuestions.indexOf(que);
        let h2 = document.createElement('h2');
        h2.innerHTML = `Question ${this.activeIndex + 1}`
        let li = document.createElement('li');  
        let label = document.createElement('label');
        label.innerHTML = `Que: ${titleElm.value}`;
        let option1 = document.createElement('lable');
        option1.innerHTML = `(a) ${option1Elm.value}`;
        let radio1 = document.createElement('input');
        radio1.setAttribute('type','radio');
        radio1.setAttribute('name','options')
        radio1.setAttribute('value',option1Elm.value)

        let option2 = document.createElement('lable');
        option2.innerHTML = `(b) ${option2Elm.value}`;
        let radio2 = document.createElement('input');
        radio2.setAttribute('type','radio');
        radio2.setAttribute('name','options')
        radio2.setAttribute('value',option2Elm.value)

        let option3 = document.createElement('lable');
        option3.innerHTML = `(c) ${option3Elm.value}`;
        let radio3 = document.createElement('input');
        radio3.setAttribute('type','radio');
        radio3.setAttribute('name','options')
        radio3.setAttribute('value',option3Elm.value)

        li.append(h2,label,option1,radio1,option2,radio2,option3,radio3);
        root.append(li)  
        li.addEventListener('click',function(){
            let ans = document.querySelector('input[name="options"]:checked').value;
            let result = document.createElement('span');
            result.innerHTML = `Result: ${que.isCorrect(ans)}`;
            let answer = document.createElement('span');
            answer.innerHTML = `Correct Answer: ${que.getCorrectAnswer()}`;
            li.append(result, answer);
            this.score = quiz.updateScore();
            div.innerHTML = `Score: ${this.score}`;
        })     
        })
    }
}

class Question {
    constructor(title, option, correctAnswer) {
        this.title = title;
        this.option = option;
        this.correctAnswer = correctAnswer;
    }
    isCorrect(answer) {
        return answer === this.correctAnswer;
    }
    getCorrectAnswer() {
        return this.correctAnswer;
    }
}
let quiz = new Quiz();
function handleSubmit(event) {
    event.preventDefault();
    const title = titleElm.value;
    const option = [];
    option[0] = option1Elm.value;
    option[1] = option2Elm.value;
    option[2] = option3Elm.value;
    const answer = answerElm.value;
    quiz.addQuestion(title,option,answer)
    titleElm.value = '';
    option1Elm.value = '';
    option2Elm.value = '';
    option3Elm.value = '';
    answerElm.value = '';
}

btn.addEventListener('click',handleSubmit);
