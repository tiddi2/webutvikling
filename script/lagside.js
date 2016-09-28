//variabler for range bar elementer

var colorRedElement = document.getElementById("red");
var colorGreenElement = document.getElementById("green");
var colorBlueElement = document.getElementById("blue");

//variabler for verdien til range bar elementer
var colorRed;
var colorGreen;
var colorBlue;

window.onload = oppstart;
function oppstart(){
  colorRedElement = document.getElementById("red");
  colorGreenElement = document.getElementById("green");
  colorBlueElement = document.getElementById("blue");

  colorRedElement.onchange = oppdaterfarge;
  colorGreenElement.onchange = oppdaterfarge;
  colorBlueElement.onchange = oppdaterfarge;

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
//  document.getElementById("boks").style.color = (colorRed,colorGreen,colorBlue);
  document.getElementById("boks").style.backgroundColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
}

function oppdaterfarge() {
  colorRed = colorRedElement.value;
	colorGreen = colorGreenElement.value;
	colorBlue = colorBlueElement.value;
  //document.getElementById("boks").style.color = (colorRed,colorGreen,colorBlue);

  document.getElementById("boks").style.backgroundColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";

}
