const textareaInput = document.querySelector ("#textarea-input");
const translateButton = document.querySelector ("#translate-button");
const output = document.querySelector ("#output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

translateButton.addEventListener ("click", clickHandler);

function getTranslationURL (text) {
    return serverURL + "?" + "text="+text;
}

function errorHandler (error) {
    console.log ("Error occuered ",error);
}

function clickHandler () {
    fetch (getTranslationURL (textareaInput.value))
    .then (Response => Response.json ())
    .then (json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch (errorHandler);
}