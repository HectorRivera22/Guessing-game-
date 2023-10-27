const submitButton = document.getElementById("submit-button")
const input = document.getElementById("guess")
const statusText = document.getElementById("status-text")
var randomNumber = Math.floor ((Math.random() * 20) + 1); // 0 - 10
console.log(randomNumber)
function checkAnswer(){
    var userGuess = input.value; 

    if(userGuess > randomNumber){
        statusText.innerText = "You are incorrect. Guess is too high!"
        statusText.style.color="red"
    }

    else if(userGuess < randomNumber){
        statusText.innerText = "You are incorrect. Guess is too low!"
        statusText.style.color="red"
    }

    else {
        statusText.innerText = "You are correct!"
        statusText.style.color="green"
    }
}

submitButton.addEventListener("click", checkAnswer)

