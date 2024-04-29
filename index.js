var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDice1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6 )+1;
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩 Player 1 Win";
}else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 win 🚩";
}else{
    document.querySelector("h1").innerHTML = "draw!";
}
