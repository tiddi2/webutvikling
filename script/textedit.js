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
var fontHolder;
var tekstfeltElement;
window.onload = oppstart;
function oppstart(){
	colorRedElement = document.getElementById("red");
	colorGreenElement = document.getElementById("green");
    colorBlueElement = document.getElementById("blue");
    tekstfeltElement = document.getElementById("teksther")

    document.getElementById("fontVelger").onchange = velgFont
    document.getElementById("boks").onmousedown = settFarge;
	document.getElementById("giFarge").onmousedown = giFarge;

	colorRedElement.onmousemove = oppdaterfarge;
	colorGreenElement.onmousemove = oppdaterfarge;
	colorBlueElement.onmousemove = oppdaterfarge;

    function getSelectedText() {
        var text = "";
        if (typeof window.getSelection !== "undefined") {
            text = window.getSelection().toString();
        } else if (typeof document.selection !== "undefined" && document.selection.type == "Text") {
            text = document.selection.createRange().text;
        }
        return text;
    }

    function doSomethingWithSelectedText() {
        var selectedText = getSelectedText();
        if (selectedText) {
            var ordlengde = selectedText.length
            console.log(selectedText)
            var indexStart = (tekstfeltElement.innerText .search(selectedText))
            console.log(indexStart)
            var indexSlutt = indexStart + ordlengde
            var change = tekstfeltElement.innerHTML.replace(selectedText,"<span id="makeid()">" + selectedText + "</span>")
            tekstfeltElement.innerHTML = change;
            document.getElementById("test").style.fontFamily = "Impact,Charcoal,sans-serif";
        }
    }

    document.onmouseup = doSomethingWithSelectedText;
    document.onkeyup = doSomethingWithSelectedText;

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
function velgFont() {
    switch (document.getElementById("fontVelger").value) {
        case 1: fontHolder = "Impact,Charcoal,sans-serif";break;
        default:
        }
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

function makeid() {
      var text = "";
      //dette gir 380 204 032 mulige id'er
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for( var i=0; i < 5; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
  }
