
var RandomNumber1 = Math.floor(Math.random() * 6) + 1;

//var RandomDiceimg = "dice" + RandomNumber1 + ".png";

var RandomImgScr = "images/dice"+ RandomNumber1 + ".png"; //RandomDiceimg;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", RandomImgScr);

//Change the image source for player 2

var RandomNumber2 = Math.floor(Math.random() * 6) + 1;

var RandomDiceimg2 = "dice" + RandomNumber2 + ".png";

//var RandomImgScr = "images/dice"+ RandomNumber1 + ".png";

var RandomImgScr2 = "images/dice"+ RandomNumber2 + ".png";

//var RandomImgScr2 = "images/" + RandomDiceimg2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", RandomImgScr2);

//Update the Game's Results
if(RandomNumber1 > RandomNumber2){
    document.querySelector("h1").innerHTML="🏆Player 1 wins!";
}
else if(RandomNumber1 < RandomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!🏆";
}
else{
    document.querySelector("h1").innerHTML="Draw! 🤝";
}
