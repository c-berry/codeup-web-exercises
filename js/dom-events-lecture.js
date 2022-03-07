// get access to the button in the DOM
// var button = document.querySelector("button");
// Write the event handler
// aka event listener, callback
function doThisWhenTheButtonIsClicked(){
    alert("You clicked me!");
}
function clickPinkSquare(){
    alert("You have clicked a pink square...");
}

// Finally we register the handler
// button.addEventListener('click', doThisWhenTheButtonIsClicked);

// var secondButton = document.getElementsByTagName("button")[1];
//
// secondButton.onclick = doThisWhenTheButtonIsClicked;
var allTheButtons = document.getElementsByTagName("button");
for (var i = 0; i < allTheButtons.length; i++) {
    allTheButtons[i].addEventListener('click', doThisWhenTheButtonIsClicked);
}

// var pinkSquare = document.getElementsByClassName("pink-square");
// pinkSquare[0].addEventListener("click", clickPinkSquare);
//OR:
var pinkSquare = document.querySelector(".pink-square");
pinkSquare.addEventListener("click", clickPinkSquare);

// function turnPageBlue(event) {
//     console.log(event.key);
// }

var body = document.querySelector("body");

function changePageColor(k) {
    if (k.key === "b") {
        body.style.backgroundColor = "deepskyblue";
    }
    if (k.key === "g") {
        body.style.backgroundColor = "green";
    }
    if (k.key === "y") {
        body.style.backgroundColor = "yellow";
    }
    if (k.key === "r") {
        body.style.backgroundColor = "red";
    }
}

window.addEventListener("keypress",changePageColor);

