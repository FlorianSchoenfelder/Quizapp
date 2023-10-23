let CSSquestions = [
    {
        "question": "What can we do with CSS?",
        "answer1": "Give Code a Function",
        "answer2": "Make the Website responsive",
        "answer3": "Styling HTML Elements",
        "answer4": "Nothing",
        "rightanswer": 3
    },
    {
        "question": "What exactly means CSS?",
        "answer1": "Convert Single Styling",
        "answer2": "Cascading Style Sheet",
        "answer3": "Code Super Simple",
        "answer4": "Cheat simplify signature",
        "rightanswer": 2
    },
    {
        "question": "How can i transform an html element bold?",
        "answer1": "text-style",
        "answer2": "font-weight",
        "answer3": "text-transform",
        "answer4": "font-style",
        "rightanswer": 2
    },
    {
        "question": "Which tag do we use to get space between the Element and border?",
        "answer1": "padding",
        "answer2": "margin",
        "answer3": "border",
        "answer4": "width",
        "rightanswer": 1
    },
    {
        "question": "What CSS property is used to adjust the font size of a text element in HTML?",
        "answer1": "text-style",
        "answer2": "font-family",
        "answer3": "font-size",
        "answer4": "text.color",
        "rightanswer": 3
    },
    {
        "question": "What CSS property is used to give the element a background color?",
        "answer1": "background-color",
        "answer2": "color",
        "answer3": "style",
        "answer4": "text.color",
        "rightanswer": 1
    }
];

function startCSSQuiz() {
    if (currentQuestion >= CSSquestions.length) {
        //Init endscreen
        loadEndscreen();
    } else {
        let question = CSSquestions[currentQuestion];
        document.getElementById('main-container').innerHTML = startCSSQuizText(question);
        document.getElementById('currentquestion').innerHTML = currentQuestion + 1;
        document.getElementById('allquestion').innerHTML = CSSquestions.length;

        let percent = currentQuestion / CSSquestions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;

        
    }
}

function startCSSQuizText(question) {
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
    let question = CSSquestions[currentQuestion];
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

    let percent = (currentQuestion + 1) / CSSquestions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function nextQuestion() {
    currentQuestion++;
    startCSSQuiz();
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
                    <b>CSS Quiz</b>
                </span>                
            </div>
            <div class="result">Your Score ${counterRightAnswer}/${CSSquestions.length}</div>
            <div class="replay">
                <button onclick="restartQuiz()" class="btn btn-primary">Replay</button>
            </div>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    counterRightAnswer = 0;
    chooseQuiz('CSS', 2);
}