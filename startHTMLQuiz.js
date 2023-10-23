let HTMLquestions = [
    {
        "question": "Who invented HTML?",
        "answer1": "Bruno Mars",
        "answer2": "Ludwig Erhard",
        "answer3": "Tim Berners-Lee",
        "answer4": "Sido",
        "rightanswer": 3
    },
    {
        "question": "With which Tag can i create a container?",
        "answer1": "ul",
        "answer2": "div",
        "answer3": "img",
        "answer4": "iframe",
        "rightanswer": 2
    },
    {
        "question": "To design something, which tag attribute can i use?",
        "answer1": "class",
        "answer2": "onclick",
        "answer3": "href",
        "answer4": "src",
        "rightanswer": 1
    },
    {
        "question": "How much headline tags do we have?",
        "answer1": "4",
        "answer2": "5",
        "answer3": "7",
        "answer4": "6",
        "rightanswer": 4
    },
    {
        "question": "What exactly means HTML?",
        "answer1": "HypaText Markup Language",
        "answer2": "HyperText Markup Language",
        "answer3": "HyperText Makeup Language",
        "answer4": "HyperTaxt Makeup Language",
        "rightanswer": 2
    }
];

let currentQuestion = 0;
let counterRightAnswer = 0;
let AudioSuccess = new Audio('audio/success.mp3');
let AudioFail = new Audio('audio/fail.mp3');

function startHTMLQuiz() {
    if (currentQuestion >= HTMLquestions.length) {
        //Init endscreen
        loadEndscreen();
    } else {
        let question = HTMLquestions[currentQuestion];
        document.getElementById('main-container').innerHTML = startHTMLQuizText(question);
        document.getElementById('currentquestion').innerHTML = currentQuestion + 1;
        document.getElementById('allquestion').innerHTML = HTMLquestions.length;

        let percent = currentQuestion / HTMLquestions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;

        
    }
}

function startHTMLQuizText(question) {
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
    let question = HTMLquestions[currentQuestion];
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

    let percent = (currentQuestion + 1) / HTMLquestions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function nextQuestion() {
    currentQuestion++;
    startHTMLQuiz();
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
            <div class="result">Your Score ${counterRightAnswer}/${HTMLquestions.length}</div>
            <div class="replay">
                <button onclick="restartQuiz()" class="btn btn-primary">Replay</button>
            </div>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    counterRightAnswer = 0;
    chooseQuiz('HTML', 1);
}