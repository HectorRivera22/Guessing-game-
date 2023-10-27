const submitButton = document.getElementById("submit-button")
const input = document.getElementById("guess")
const statusText = document.getElementById("status-text")

var randomNumber = Math.floor ((Math.random() * 10) + 1);

function checkAnswer(){
    var userGuess = input.value; 

    if(userGuess > randomNumber){
        statusText.innerText = "You are incorrect. Guess is too high!"
    }
}

submitButton.addEventListener("click", checkAnswer)