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

function startQuiz(x) {
    let text = document.getElementById('main-container');
    text.innerHTML = /*html*/`
    <div class="welcome-text">
            <span>Welcome to</span><br>
            <span>The Awesome ${x} Quiz</span>
        </div>
        <div class="welcome-question">
            <span>Ready for the Challenge?</span>
        </div>

        <div class="button">
            <button onclick="startJavaQuiz()" type="button" class="btn btn-primary btn-lg">Start Now</button>
        </div>
`;
}

