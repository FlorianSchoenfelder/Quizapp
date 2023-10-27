function slideToHtml() {
    document.getElementById('identificationCSS').classList.add('identification');
    document.getElementById('identificationCSS').classList.remove('identificationCSS');
    document.getElementById('identificationCSS').classList.remove('identificationJAVA');
    document.getElementById('identificationCSS').classList.remove('identificationJS');
}

function slideToCss() {
    document.getElementById('identificationCSS').classList.add('identificationCSS');
    document.getElementById('identificationCSS').classList.remove('identification');
    document.getElementById('identificationCSS').classList.remove('identificationJAVA');
    document.getElementById('identificationCSS').classList.remove('identificationJS');
}

function slideToJs() {
    document.getElementById('identificationCSS').classList.add('identificationJS');
    document.getElementById('identificationCSS').classList.remove('identification');
    document.getElementById('identificationCSS').classList.remove('identificationJAVA');
    document.getElementById('identificationCSS').classList.remove('identificationCSS');
}

function slideToJava() {
    document.getElementById('identificationCSS').classList.add('identificationJAVA');
    document.getElementById('identificationCSS').classList.remove('identification');
    document.getElementById('identificationCSS').classList.remove('identificationJS');
    document.getElementById('identificationCSS').classList.remove('identificationCSS');
}

let allQuestions = {
    HTML: [
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
    ],
    CSS: [
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
    ],
    JS: [
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
    ]
}

function chooseQuiz(language) {
    currentQuestion = 0;
    counterRightAnswer = 0;
    currentQuestions = allQuestions[language];
    choosenQuiz = language;
    let text = document.getElementById('main-container');
    text.innerHTML = /*html*/`
    <div class="welcome-text">
            <span>Welcome to</span><br>
            <span>The Awesome ${language} Quiz</span>
        </div>
        <div class="welcome-question">
            <span>Ready for the Challenge?</span>
        </div>
        <div class="button">
            <button onclick="startQuiz()" type="button" class="btn btn-primary btn-lg">Start Now</button>
        </div>`;
}

function selectQuiz() {
    alert('Please chose a Quiz before start! :)')
}

