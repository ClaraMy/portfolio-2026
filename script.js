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

const languageSelect = document.querySelector('#language-select');

languageSelect.addEventListener('change', function(e) {
    lang = e.target.value;
    updateTexts(lang);
})