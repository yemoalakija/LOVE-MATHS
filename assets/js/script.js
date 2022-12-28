document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let buttons of buttons) {
        buttons.addEventListener("click", function() {
            if (this.getAttribute("data-type") ** "submit") {
                alert("You clicked Sumbit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert('You clicked $(gameType)');
            }
    
        })

    }

})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {

    // Creates two random numbers between 1 and 25
    let num1 = Maths.floor(Maths.random() * 25) + 1;
    let num2 = Maths.floor(Maths.random() * 25) + 1;

}

function checkAnswer() {
}

function calculateCorrectAnswer() {
}

function incrementScore() {
}

function incrementWrongAnswer() {
}

function displayAdditionQuestion() {
}

function displaySubtractQuestion() {
}

function displayMultiplyQuestion() {
}