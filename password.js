// Initialising the canvas
var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d");

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.outerHeight;

// Setting up the letters
var letters =
    "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ!#$%&*+0123456789";
letters = letters.split("");

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Setting up the draw function
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        var colors = ["#E0B0FF", "#64d86b", "#AA336A"];
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
    }
}

// Loop the animation
setInterval(draw, 33);

var pwLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];
var pwNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var pwSymbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

function generatePassword() {
    var letterGroup = "";
    for (var i = 0; i < 4; i++) {
        var randLetter = pwLetters[Math.floor(Math.random() * pwLetters.length)];
        letterGroup += randLetter;
    }
    var numberGroup = "";
    for (var n = 0; n < 4; n++) {
        var randNumber = pwNumbers[Math.floor(Math.random() * pwNumbers.length)];
        numberGroup += randNumber;
    }
    var symbolGroup = "";
    for (var s = 0; s < 4; s++) {
        var randSymbol = pwSymbols[Math.floor(Math.random() * pwSymbols.length)];
        symbolGroup += randSymbol;
    }
    var completePassword = symbolGroup + numberGroup + letterGroup;
    var hardPassword = completePassword
        .split("")
        .sort(function () {
            return 0.5 - Math.random();
        })
        .join("");
    $(document).on("click", "#passwordTarget", function () {
        document.getElementById("copyTarget").innerHTML = hardPassword;
    });
}
generatePassword();

function copyText(htmlElement) {
    if (!htmlElement) {
        return;
    }

    const elementText = document.getElementById("copyTarget");

    elementText.select();

    document.execCommand("copy");
    console.log(elementText.value);
}

document.querySelector("#copy-btn").onclick = function () {
    copyText(document.querySelector("#target1"));
};
