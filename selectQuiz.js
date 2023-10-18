function slideToHtml() {
    document.getElementById('identificationCSS').classList.add('identification');
    document.getElementById('identificationCSS').classList.remove('identificationCSS');
    document.getElementById('identificationCSS').classList.remove('identificationJAVA');
    document.getElementById('identificationCSS').classList.remove('identificationJS');

    let htmlText = document.getElementById('main-container');
    htmlText.innerHTML = renderHTMLWelcomeCard();
}

function renderHTMLWelcomeCard() {
    return /*html*/`
    <div class="welcome-text">
            <span>Welcome to</span><br>
            <span>The Awesome HTML Quiz</span>
        </div>
        <div class="welcome-question">
            <span>Ready for the Challenge?</span>
        </div>

        <div class="button">
            <button onclick="startHTMLQuiz()" type="button" class="btn btn-primary btn-lg">Start Now</button>
        </div>
`;
}

function slideToCss() {
    document.getElementById('identificationCSS').classList.add('identificationCSS');
    document.getElementById('identificationCSS').classList.remove('identification');
    document.getElementById('identificationCSS').classList.remove('identificationJAVA');
    document.getElementById('identificationCSS').classList.remove('identificationJS');

    let cssText = document.getElementById('main-container');
    cssText.innerHTML = renderCSSWelcomeCard();
}

function renderCSSWelcomeCard() {
    return /*html*/`
    <div class="welcome-text">
            <span>Welcome to</span><br>
            <span>The Awesome CSS Quiz</span>
        </div>
        <div class="welcome-question">
            <span>Ready for the Challenge?</span>
        </div>

        <div class="button">
            <button onclick="startCSSQuiz()" type="button" class="btn btn-primary btn-lg">Start Now</button>
        </div>
`;
}



function slideToJs() {
    document.getElementById('identificationCSS').classList.add('identificationJS');
    document.getElementById('identificationCSS').classList.remove('identification');
    document.getElementById('identificationCSS').classList.remove('identificationJAVA');
    document.getElementById('identificationCSS').classList.remove('identificationCSS');

    let javascriptText = document.getElementById('main-container');
    javascriptText.innerHTML = renderJavascriptWelcomeCard();
}

function renderJavascriptWelcomeCard() {
    return /*html*/`
    <div class="welcome-text">
            <span>Welcome to</span><br>
            <span>The Awesome JavaScript Quiz</span>
        </div>
        <div class="welcome-question">
            <span>Ready for the Challenge?</span>
        </div>

        <div class="button">
            <button onclick="startJavascriptQuiz()" type="button" class="btn btn-primary btn-lg">Start Now</button>
        </div>
`;
}

function slideToJava() {
    document.getElementById('identificationCSS').classList.add('identificationJAVA');
    document.getElementById('identificationCSS').classList.remove('identification');
    document.getElementById('identificationCSS').classList.remove('identificationJS');
    document.getElementById('identificationCSS').classList.remove('identificationCSS');

    let javaText = document.getElementById('main-container');
    javaText.innerHTML = renderJavaWelcomeCard();
}

function renderJavaWelcomeCard() {
    return /*html*/`
    <div class="welcome-text">
            <span>Welcome to</span><br>
            <span>The Awesome Java Quiz</span>
        </div>
        <div class="welcome-question">
            <span>Ready for the Challenge?</span>
        </div>

        <div class="button">
            <button onclick="startJavaQuiz()" type="button" class="btn btn-primary btn-lg">Start Now</button>
        </div>
`;
}

