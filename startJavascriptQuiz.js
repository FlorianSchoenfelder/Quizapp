let Javascriptquestions = [
    {
        "question": "What is the purpose of the JavaScript for loop?",
        "answer1": "To declare a variable.",
        "answer2": "To define a function.",
        "answer3": "To iterate over a set of values repeatedly.",
        "answer4": "To display a pop-up message.",
        "rightanswer": 3
    },
    {
        "question": "Which keyword is used to declare a variable in JavaScript?",
        "answer1": "print",
        "answer2": "define",
        "answer3": "let",
        "answer4": "output",
        "rightanswer": 3
    },
    {
        "question": "Which JavaScript method is used to add elements to the end of an array?",
        "answer1": "push()",
        "answer2": "concat()",
        "answer3": "join()",
        "answer4": "pop()",
        "rightanswer": 1
    },
    {
        "question": "How do we create a function in JS?",
        "answer1": "function (myfunction) {}",
        "answer2": "function myfunction ()",
        "answer3": "function myfunction {}",
        "answer4": "function myfunction() {}",
        "rightanswer": 4
    },
    {
        "question": "What JS property do we use to change the innerHTML of an element?",
        "answer1": ".classList",
        "answer2": ".style",
        "answer3": ".innerHTML",
        "answer4": ".focus",
        "rightanswer": 3
    }
];

function startJavascriptQuiz() {
    if (currentQuestion >= Javascriptquestions.length) {
        //Init endscreen
        loadEndscreen();
    } else {
        let question = Javascriptquestions[currentQuestion];
        document.getElementById('main-container').innerHTML = startJavascriptQuizText(question);
        document.getElementById('currentquestion').innerHTML = currentQuestion + 1;
        document.getElementById('allquestion').innerHTML = Javascriptquestions.length;

        let percent = currentQuestion / Javascriptquestions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;


    }
}

function startJavascriptQuizText(question) {
    return /*html*/`
    <div class="questionContainer">
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" id="progress-bar" style="width: 0%">0%</div>
              </div>
            <div class="question" id="question">
                <h3>${question['question']}</h3>
            </div>
            <div onclick="answer('answer_1')" class="card mb-3 w-75">
                <div class="card-body" id="answer_1">
                    <div class="answer">A</div>
                    ${question['answer1']}
                </div>
            </div>
            <div onclick="answer('answer_2')" class="card mb-3 w-75">
                <div class="card-body" id="answer_2">
                    <div class="answer">B</div>
                    ${question['answer2']}
                </div>
            </div>
            <div onclick="answer('answer_3')" class="card mb-3 w-75">
                <div class="card-body" id="answer_3">
                    <div class="answer">C</div>
                    ${question['answer3']}
                </div>
            </div>
            <div onclick="answer('answer_4')" class="card mb-3 w-75">
                <div class="card-body" id="answer_4">
                    <div class="answer">D</div>
                    ${question['answer4']}
                </div>
            </div>
            <div class="previousAndNextBtn">
                <span>
                    <b id="currentquestion"></b> von
                    <b id="allquestion"></b> Fragen
                </span>
                <button onclick="nextQuestion()" class="nextButton" id="nextButton" disabled></button>
            </div>
        </div>
`;
}

function answer(selcetedAnswer) {
    let question = Javascriptquestions[currentQuestion];
    let selcetedAnswerAsNumber = selcetedAnswer.slice(-1);
    let rightanswerID = `answer_${question['rightanswer']}`;

    if (selcetedAnswerAsNumber == question['rightanswer']) {
        document.getElementById(selcetedAnswer).parentNode.classList.add('bg-success');
        AudioSuccess.play();
        counterRightAnswer++;
    } else {
        document.getElementById(selcetedAnswer).parentNode.classList.add('bg-danger');
        document.getElementById(rightanswerID).parentNode.classList.add('bg-success');
        AudioFail.play();
    }
    document.getElementById('nextButton').disabled = false;

    let percent = (currentQuestion + 1) / Javascriptquestions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function nextQuestion() {
    currentQuestion++;
    startJavascriptQuiz();
}

function loadEndscreen() {
    document.getElementById('main-container').innerHTML = /*html*/`
        <div class="end-container">
            <div class="progress" role="progressbar">
                <div class="progress-bar" id="progress-bar" style="width: 100%">100%</div>
              </div>
            <div class="endText">
                <img src="./img/brain result.png" alt="">
                <span>
                    <b>Complete</b> <br>
                    <b>Javascript Quiz</b>
                </span>                
            </div>
            <div class="result">Your Score ${counterRightAnswer}/${Javascriptquestions.length}</div>
            <div class="replay">
                <button onclick="restartQuiz()" class="btn btn-primary">Replay</button>
            </div>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    counterRightAnswer = 0;
    chooseQuiz('JavaScript', 3);
}