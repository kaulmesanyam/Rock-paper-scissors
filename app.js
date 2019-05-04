let userScore= 0;
let  compScore= 0;
const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("comp-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_div= document.querySelector(".Result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");

function getCompChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber= Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if(letter == "r") return "Rock";
	if(letter == "p") return "Paper";
	if(letter == "s") return "scissors";
}

function win(user, comp){
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const smallUserName = "user".fontsize(3).sub();
	const smallCompName = "comp".fontsize(3).sub();
	result_div.innerHTML = `${convertToWord(user)}${smallUserName} beats ${convertToWord(comp)}${smallCompName}. You win!`; 
}

function loose(user, comp){
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const smallUserName = "user".fontsize(3).sub();
	const smallCompName = "comp".fontsize(3).sub();
	result_div.innerHTML = `${convertToWord(user)}${smallUserName} looses to ${convertToWord(comp)}${smallCompName}. You lost...`; 

}

function draw(user, comp){
	const smallUserName = "user".fontsize(3).sub();
	const smallCompName = "comp".fontsize(3).sub();
	result_div.innerHTML = `${convertToWord(user)}${smallUserName} equals ${convertToWord(comp)}${smallCompName}. It's a draw...`; 
}

function game(userChoice) {
	const compChoice= getCompChoice();
	 switch(userChoice + compChoice) {
	 	case "rs":
	 	case "pr":
	 	case "sp":
	 		win(userChoice, compChoice);
	 		break;
	 	case "rp":
	 	case "ps":
	 	case "sr":
	 		loose(userChoice, compChoice);
	 		break;
	 	case "rr":
	 	case "pp":
	 	case "ss":
	 		draw(userChoice, compChoice);
	 }
}


function main() {
	rock_div.addEventListener('click', function(){
		game("r");
	})

	paper_div.addEventListener('click', function(){
		game("p");
	})

	scissors_div.addEventListener('click', function(){
		game("s");
	})
}

main();