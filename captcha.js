// Generar texto de Captcha
function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-text").textContent = captcha;
    document.getElementById("captcha-input").value = "";
    document.getElementById("captcha-error").style.display = "none";
}

// Validar Captcha
function validateCaptcha() {
    const captchaText = document.getElementById("captcha-text").textContent;
    const userInput = document.getElementById("captcha-input").value;

    if (captchaText !== userInput) {
        document.getElementById("captcha-error").textContent = "Captcha incorrecto. Inténtalo nuevamente.";
        document.getElementById("captcha-error").style.display = "block";
        return false;
    }
    return true;
}

// Generar Captcha al cargar la página
window.onload = generateCaptcha;
