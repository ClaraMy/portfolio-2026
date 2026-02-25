let lang = "french"; // Default language

function updateTexts(lang) {
    fetch(`${lang}.json`).then(function(response) {
        response.json().then(function(data){
            Object.keys(data).forEach(function(key) {
                document.querySelector("#" + key).innerHTML = data[key];
            }
        )})
    })
}

updateTexts(lang);

const buttons = document.querySelectorAll('.lang-btn');

buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-language');
        updateTexts(selectedLang);
    });
});