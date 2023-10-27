let choosenQuiz = [];
let currentQuestions = [];
let currentQuestion = 0;
let counterRightAnswer = 0;
let AudioSuccess = new Audio('audio/success.mp3');
let AudioFail = new Audio('audio/fail.mp3');

function startQuiz() {
    if (choosenQuiz === 'Java') {
        alert('This Quiz is comming soon!')
    }else{
        if (currentQuestion >= currentQuestions.length) {
        //Init endscreen
        loadEndscreen();
    } else {
        updateNextQuestion();
        updateProgressBar();
    }
    }
}

function updateNextQuestion() {
    let question = currentQuestions[currentQuestion];
    document.getElementById('main-container').innerHTML = startQuizText(question);
    document.getElementById('currentquestion').innerHTML = currentQuestion + 1;
    document.getElementById('allquestion').innerHTML = currentQuestions.length;
}

function updateProgressBar() {
    let percent = currentQuestion / currentQuestions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function startQuizText(question) {
    return /*html*/`
    <div class="questionContainer">
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" id="progress-bar" style="width: 0%">0%</div>
              </div>
            <div class="question" id="question">
                <h3>${question['question']}</h3>
            </div>
            <div onclick="answer('answer_1')" class="card mb-3 w-75 ">
                <div class="card-body mobile-response" id="answer_1">
                    <div class="answer">A</div>
                    ${question['answer1']}
                </div>
            </div>
            <div onclick="answer('answer_2')" class="card mb-3 w-75">
                <div class="card-body mobile-response" id="answer_2">
                    <div class="answer">B</div>
                    ${question['answer2']}
                </div>
            </div>
            <div onclick="answer('answer_3')" class="card mb-3 w-75">
                <div class="card-body mobile-response" id="answer_3">
                    <div class="answer">C</div>
                    ${question['answer3']}
                </div>
            </div>
            <div onclick="answer('answer_4')" class="card mb-3 w-75">
                <div class="card-body mobile-response" id="answer_4">
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
        </div>`;
}

function answer(selcetedAnswer) {
    let question = currentQuestions[currentQuestion];
    let selcetedAnswerAsNumber = selcetedAnswer.slice(-1);
    let rightanswerID = `answer_${question['rightanswer']}`;

    if (selcetedAnswerAsNumber == question['rightanswer']) {
        updateRightQuestion(selcetedAnswer);
    } else {
        updateFalseQuestion(selcetedAnswer, rightanswerID);
    }
    document.getElementById('nextButton').disabled = false;

    let percent = (currentQuestion + 1) / currentQuestions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateRightQuestion(selcetedAnswer) {
    document.getElementById(selcetedAnswer).parentNode.classList.add('bg-success');
    AudioSuccess.play();
    counterRightAnswer++;
    document.getElementById('answer_1').parentNode.classList.add('disable-button');
    document.getElementById('answer_2').parentNode.classList.add('disable-button');
    document.getElementById('answer_3').parentNode.classList.add('disable-button');
    document.getElementById('answer_4').parentNode.classList.add('disable-button');
}

function updateFalseQuestion(selcetedAnswer, rightanswerID) {
    document.getElementById(selcetedAnswer).parentNode.classList.add('bg-danger');
    document.getElementById(rightanswerID).parentNode.classList.add('bg-success');
    AudioFail.play();
    document.getElementById('answer_1').parentNode.classList.add('disable-button');
    document.getElementById('answer_2').parentNode.classList.add('disable-button');
    document.getElementById('answer_3').parentNode.classList.add('disable-button');
    document.getElementById('answer_4').parentNode.classList.add('disable-button');
}

function nextQuestion() {
    currentQuestion++;
    startQuiz();
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
                    <b>HTML Quiz</b>
                </span>                
            </div>
            <div class="result">Your Score ${counterRightAnswer}/${currentQuestions.length}</div>
            <div class="replay">
                <button onclick="restartQuiz()" class="btn btn-primary">Replay</button>
            </div>
        </div>`;
}

function restartQuiz() {
    currentQuestion = 0;
    counterRightAnswer = 0;
    chooseQuiz(choosenQuiz);
}