var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImages = "dice" + randomNumber + ".png";
var randomImagesSource = randomImages;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImagesSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
