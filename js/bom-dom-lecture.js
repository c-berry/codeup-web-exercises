// var count = 0;
// hey = function() {
//     console.log("hey " + count);
//     count = count + 1;
// }

// var hey = function() {
//     var count = 0;

// var count = 0;
// var makeItStop;
//     function hey() {
//         if (count <= 5) {
//             console.log("hey " + count);
//             count++;
//         } else {
//             clearInterval(makeItStop);
//         }
//     }
//
// setInterval(hey, 1000);

// var count = 0;
// var makeItStop;
// function hey() {
//     if (count <= 5) {
//         console.log("hey " + count);
//         count ++;
//     } else {
//         clearInterval(makeItStop);
//     }
// }
// setInterval(hey, 1000);
//
// setTimeout(wakeUpUser, 5000);
//
// function wakeUpUser(){
//     alert("WAKE UP!");
// }

var like = document.getElementById("like");
var dontLike = document.getElementById("dont like");
var marvel = document.getElementById("marvel");
var dc = document.getElementById("dc");

dc.innerText = dc.innerText + "Animated Universe";
dc.innerText += " rocks!";
marvel.setAttribute("class", "hotpink");
dc.setAttribute("class", "hotpink");
// var showMe = accessTheDOM.innerText;
// alert(showMe);

var hotPinks = document.getElementsByClassName("hotpink");
// hotPinks[0].style.color = "hotpink";
for (var i = 0; i < hotPinks.length; i++) {
    hotPinks[i].style.color = "hotpink";
}

//TAKES USER INPUT COLOR AND APPLIES TO P ELEMENTS
// var submitButton = document.querySelector("#colorSubmission");
var submitButton = document.getElementById("colorSubmission");
submitButton.onclick = function () {
    var colorInput = document.getElementById("colorPreference");
    var userInput = colorInput.value;
    // alert(userInput);
    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = userInput;
    }
}

var theHulk = document.getElementById("hulk");
var hulkState = theHulk.getAttribute("data-state");
theHulk.innerText += " is in " + hulkState + " state";

var hulkStrength = theHulk.getAttribute("data-strength");
// var hulkStrength = theHulk.dataset.strength;
theHulk.innerText += ". His strength is " + hulkStrength + ".";

var hulkIntelligence = theHulk.getAttribute("data-intelligence");
theHulk.innerText += " His intelligence is " + hulkIntelligence;

var transformButton = document.getElementById("transformHulk");
transformButton.onclick = function () {
    var hulk = document.getElementById("hulk");
    var hulkState = hulk.dataset.state;
    if (hulkState === "hulk"){
        hulk.dataset.state = "Bruce Banner";
    } else {
        hulk.dataset.state = "hulk";
    }
    hulk.innerText = "The Hulk is in " + hulk.dataset.state + " state";
}


