let HTMLquestions = [
    {
        "question": "Wer hat HTML erfunden",
        "answer1": "Bruno Mars",
        "answer2": "Ludwig Erhard",
        "answer3": "Tim Berners-Lee",
        "answer4": "Sido",
        "rightanswer": 3
    },
    {
        "question": "Mit welchem Tag bekommt man ein Text fettgedruckt?",
        "answer1": "<p>",
        "answer2": "<b>",
        "answer3": "<a>",
        "answer4": "<i>",
        "rightanswer": 2
    },
    {
        "question": "Mit welchem Tag füge ich eine andere Website ein?",
        "answer1": "<iframe>",
        "answer2": "<img>",
        "answer3": "<div>",
        "answer4": "<br>",
        "rightanswer": 1
    },
    {
        "question": "Wie viele größen an Überschriften gibt es?",
        "answer1": "4",
        "answer2": "5",
        "answer3": "7",
        "answer4": "6",
        "rightanswer": 4 
    },
    {
        "question": "Was bedeutet HTML genau?",
        "answer1": "HypaText Markup Language",
        "answer2": "HyperText Markup Language",
        "answer3": "HyperText Makeup Language",
        "answer4": "HyperTaxt Makeup Language",
        "rightanswer": 2
    }
]

function startQuiz(identifier) {
    if (identifier === 1) {
        startHTMLQuiz();
    }
    if (identifier === 2) {
        startCSSQuiz();
    }
    if (identifier === 3) {
        startJavascriptQuiz();
    }
    if (identifier === 4) {
        startJavaQuiz();
    }
}