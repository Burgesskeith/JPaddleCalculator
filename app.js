
function calcLength() {
    let bestLength = "";
    let torsoLength = document.getElementById("torso").value;
    console.lo
    if (torsoLength === "undefined") {
        document.getElementById("torso").innerHTML = "73";
    }

        if (torsoLength >= 55 && torsoLength < 61) {
            bestLength = "180cm";
            document.getElementById("result").innerHTML = bestLength;
          } else if (torsoLength >= 61 && torsoLength < 66) {
            bestLength = "180cm - 200cm";
            document.getElementById("result").innerHTML = bestLength;
          } else if (torsoLength >= 61 && torsoLength < 66) {
            bestLength = "190cm - 200cm";
            document.getElementById("result").innerHTML = bestLength;
          } else if (torsoLength >= 66 && torsoLength < 71) {
            bestLength = "200cm - 220cm";
            document.getElementById("result").innerHTML = bestLength;
          } else if (torsoLength >= 71 && torsoLength < 76) {
            bestLength = "210cm - 230cm";
            document.getElementById("result").innerHTML = bestLength;
          } else if (torsoLength >= 76 && torsoLength < 81) {
            bestLength = "220cm - 240cm";
            document.getElementById("result").innerHTML = bestLength;
          } else if (torsoLength >= 81 && torsoLength < 86) {
            bestLength = "230cm - 250cm";
            document.getElementById("result").innerHTML = bestLength;
          } else if (torsoLength >= 86 && torsoLength < 93) {
            bestLength = "240cm - 250cm";
            document.getElementById("result").innerHTML = bestLength;
          } else {
            document.getElementById("result").innerHTML = "Enter 55cm to 92cm";
          }
} 

