// Math.floor(Math.random() * (max-min + 1)+min);
// var randomno1 = Math.floor(Math.random() * (6-1 + 1)+1);

var random1 = Math.floor(Math.random() *6 ) + 1; //random no 1 -> 6

var randomdiceimg = "dice" + random1 + ".png"; //random image from dice1->dice6

var randomimagesource = "images/" + randomdiceimg; //images dice1.png to images dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);

var random2 = Math.floor(Math.random() *6) +1;
var randomimagesource2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(random1 > random2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if(random2 > random1){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}