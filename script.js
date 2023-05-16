import { translate } from './translate.js';

function translateText() {
  const inputText1 = document.getElementById("inputText1").value;
  const language1 = document.getElementById("language1").value;
  const language2 = document.getElementById("language2").value;

  const translatedText = translate(language2, inputText1);

  document.getElementById("inputText2").value = translatedText;
}

document.getElementById("translateButton").addEventListener("click", translateText);
