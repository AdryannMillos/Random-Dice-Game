// Findind a random number from 1 to 6 for each dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomNumber2  = Math.floor(Math.random() * 6 + 1);

// setting a random image from dice1 to dice6

document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 +".png" );

document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 +".png" );


// Testing the cases, draw, player 1 wins and player 2 wins
if(randomNumber1 === randomNumber2){

  document.querySelector("h1").innerText = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Wins!";
}
else {
    document.querySelector("h1").innerText = "Player 2 Wins!";
}
