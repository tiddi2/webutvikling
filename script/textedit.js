//variabler for range bar elementer
var colorRedElement = document.getElementById("red");
var colorGreenElement = document.getElementById("green");
var colorBlueElement = document.getElementById("blue");

//variabler for verdien til range bar elementer
var colorRed;
var colorGreen;
var colorBlue;
var fargeFraFargevelger;
var skalSetteFarge = false;
var fontHolder = "Times New Roman, Times, serif";
var tekstfeltElement;
var tekstSomSkalEndres;
window.onload = oppstart;
function oppstart(){
	colorRedElement = document.getElementById("red");
	colorGreenElement = document.getElementById("green");
    colorBlueElement = document.getElementById("blue");
    tekstfeltElement = document.getElementById("teksther")

    document.getElementById("fontVelger").onchange = velgFont
	document.getElementById("fontSize").onchange = velgFontStorrelse;
    document.getElementById("boks").onmousedown = settFarge;
	document.getElementById("giFarge").onmousedown = giFarge;

	document.getElementById("BreddeObjekt").onmousemove = oppdaterWebsideBredde;
	document.getElementById("tittelFelt").onclick = tekstfeltSomSkalEndres
	document.getElementById("teksther").onclick = tekstfeltSomSkalEndres
	colorRedElement.onmousemove = oppdaterfarge;
	colorGreenElement.onmousemove = oppdaterfarge;
	colorBlueElement.onmousemove = oppdaterfarge;
/*
    // hentet fra http://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text
    function getSelectedText() {
        var text = "";
        if (typeof window.getSelection !== "undefined") {
            text = window.getSelection().toString();
        }
        else if (typeof document.selection !== "undefined" && document.selection.type == "Text") {
            text = document.selection.createRange().text;
        }
        return text;
    }
    //slutt hentet fra http://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text

    function doSomethingWithSelectedText() {
		console.log(selectedText.fontsize(100))
        var selectedText = getSelectedText();
        randomID = makeid()
        if (selectedText) {
			tekstfeltElement.innerHTML.match(/<span id=/g)
			oneStepBack = tekstfeltElement.innerHTML;
			change = tekstfeltElement.innerHTML.replace(selectedText,"<span id=" + randomID + ">" + selectedText + "</span>")
		}
    }

    document.onmouseup = doSomethingWithSelectedText;
    document.onkeyup = doSomethingWithSelectedText;
*/

	document.getElementById("BreddeObjekt").max = 65;
	document.getElementById("BreddeObjekt").min = 40;
	document.getElementById("BreddeObjekt").value = 50;

	colorRedElement.max = 255;
	colorGreenElement.max = 255;
	colorBlueElement.max = 255;

	colorRedElement.min = 0;
	colorGreenElement.min = 0;
	colorBlueElement.min = 0;
	colorRedElement.value = 255;
	colorGreenElement.value = 0;
	colorBlueElement.value = 255;
	colorRed = colorRedElement.value;
	colorGreen = colorGreenElement.value;
	colorBlue = colorBlueElement.value;
	fargeFraFargevelger = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
	document.getElementById("boks").style.backgroundColor = fargeFraFargevelger;
}

function tekstfeltSomSkalEndres(event) {
	tekstSomSkalEndres = this

}
function oppdaterWebsideBredde() {
	document.getElementById("wrapper").style.width = document.getElementById("BreddeObjekt").value + "%";
}
function velgFont() {
    switch (document.getElementById("fontVelger").value) {
        case "1": fontHolder = "Times New Roman, Times, serif";break;
		case "2": fontHolder = "Georgia";break;
		case "3": fontHolder = "Arial";break;
		case "4": fontHolder = "Impact,Charcoal,sans-serif";break;
        }
		tekstSomSkalEndres.style.fontFamily = fontHolder;
}
function velgFontStorrelse() {
	document.getElementById("teksther").style.fontSize = parseInt(document.getElementById("fontSize").value) + "px";
	document.getElementById("utskrift").innerHTML = document.getElementById("wrapper").toSource()

}
function oppdaterfarge() {
	colorRed = colorRedElement.value;
	colorGreen = colorGreenElement.value;
	colorBlue = colorBlueElement.value;
	fargeFraFargevelger = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")"
	document.getElementById("boks").style.backgroundColor = fargeFraFargevelger;
}

function settFarge() {
	skalSetteFarge = true
}
function giFarge(event) {
	if(skalSetteFarge === true){
	this.style.backgroundColor = fargeFraFargevelger;
	skalSetteFarge = false;
	}
}
/*
function makeid() {
      var text = "";
      //dette gir 380 204 032 mulige id'er
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for( var i=0; i < 5; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
  }
*/
