function XO(str) {
    //code here
    var stringLength = str.length;
    var xCounter = 0;
    var oCounter = 0;
    for (var i = 0; i < stringLength; i++) {
        if (str[i] === "x" || str[i] === "X") {
            xCounter++;
        }
        else if (str[i] === "o" || str[i] === "O" ) {
            oCounter++;
        }
    }
    if (xCounter === oCounter) {
        return true;
    } else {
        return false;
    }
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);