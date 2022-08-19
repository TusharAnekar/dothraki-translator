const textareaInput = document.querySelector ("#textarea-input");
const translateButton = document.querySelector ("#translate-button");
const output = document.querySelector ("#output");

var serverURL = ""

translateButton.addEventListener ("click", () => {
    console.log (textareaInput.value);
})