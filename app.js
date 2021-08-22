var inputEmoji = document.querySelector("input");
console.log(inputEmoji);
var outputText = document.getElementById("translationOutput");
const emojiDictionary = {
    "😀": "Happy or Smiling",
    "😉": "Winking",
    "🤩": "Star struck or super excited",
    "😬": "Grimacing",
    "😓": "Sad sweat face",
    "😳": "Blushing",
  };
function translation (e) {
    var temp1 = e.target.value;
        if (emojiDictionary[temp1]=== undefined) {
            temp1="This does not exist in out database;"
            } else {
                temp1= emojiDictionary[temp1];
                }
    outputText.value = temp1;
}
inputEmoji.addEventListener('change', translation);

