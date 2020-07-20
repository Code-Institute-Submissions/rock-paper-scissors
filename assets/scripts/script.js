let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice () {
     const choices = ['r', 'p', 's'];
     const randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];

}

function convertToWord(letter) {

    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}


 function win(userChoice, computerChoice) {

    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML= compScore;
    result_p.innerHTML = convertToWord(userChoice) + "beats" + convertToWord(computerChoice) + ". YOU WIN!"
 }

  function lose(userChoice, computerChoice) {

     compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML= compScore;
    result_p.innerHTML = convertToWord(userChoice) + "beats" + convertToWord(computerChoice) + ". YOU LOSE!"
 }

  function draw(userChoice, computerChoice) {

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML= compScore;
    result_p.innerHTML = convertToWord(userChoice) + "beats" + convertToWord(computerChoice) + ". DRAW!"
 }





function game (userChoice) {

    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {

        case "rp":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
            
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;  
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;             
            
    }
    
}



function main () {

rock.addEventListener("click", function() {
    game('r');
})

paper.addEventListener("click", function() {

   game('p');
})

scissors.addEventListener("click", function() {

    game('s');
})

}

main ()
