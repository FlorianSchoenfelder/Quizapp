function slideToCss() {
    document.getElementById('identificationCSS').classList.add('identificationCSS');
    document.getElementById('identificationCSS').classList.remove('identification');
    document.getElementById('identificationCSS').classList.remove('identificationJAVA');
    document.getElementById('identificationCSS').classList.remove('identificationJS');
}

function slideToHtml() {
    document.getElementById('identificationCSS').classList.add('identification');
    document.getElementById('identificationCSS').classList.remove('identificationCSS');
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