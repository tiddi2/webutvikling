//Text edit variabel
var valgtTekstFelst;

//Farge elementer
var colorRed, colorGreen, colorBlue,colorAlpha;
var colorRedElement  = document.getElementById("red");
var colorGreenElement= document.getElementById("green");
var colorBlueElement = document.getElementById("blue");
var colorAlphaElement = document.getElementById("alpha");

var colorVisualiser = document.getElementById("fargeEndrer")
var fargeFraFargevelger;
var skalSetteFarge = false;

//Border elemeneter
var borderStyleSelektorElement = document.getElementById("borderStyleSelektor")
var borderVisualiser = document.getElementById("borderVisualiser")
var borderTykkelse = document.getElementById("borderTykkelse")

//brukerstyrte funksjoner
colorVisualiser.click = settFarge;
colorRedElement.oninput = oppdaterfarge;
colorGreenElement.oninput = oppdaterfarge;
colorBlueElement.oninput = oppdaterfarge;
colorAlphaElement.oninput = oppdaterfarge;
borderTykkelse.oninput = oppdaterBorder
borderStyleSelektorElement.onchange = oppdaterBorder
document.getElementById("fontVelger").onchange = velgFont;
document.getElementById("fontSize").onchange = velgFontSize;
document.getElementById("tittelFelt").onclick = sistValgtTekstfelt;
document.getElementById("artikkel1").onclick = sistValgtTekstfelt;
document.getElementById("artikkel2").onclick = sistValgtTekstfelt;
document.getElementById("artikkel3").onclick = sistValgtTekstfelt;
document.getElementById("section1").onclick = sistValgtTekstfelt;
document.getElementById("section2").onclick = sistValgtTekstfelt;
document.getElementById("section3").onclick = sistValgtTekstfelt;
document.getElementById("sectionOverskrift1").onclick = sistValgtTekstfelt;
document.getElementById("sectionOverskrift2").onclick = sistValgtTekstfelt;
document.getElementById("sectionOverskrift3").onclick = sistValgtTekstfelt;
document.getElementById("artikkelOverskrift1").onclick = sistValgtTekstfelt;
document.getElementById("artikkelOverskrift2").onclick = sistValgtTekstfelt;
document.getElementById("artikkelOverskrift3").onclick = sistValgtTekstfelt;



settVerdier(borderTykkelse,0,10,2)
settVerdier(colorRedElement,0,255,255)
settVerdier(colorGreenElement,0,255,0)
settVerdier(colorBlueElement,0,255,255)
settVerdier(colorAlphaElement,0,100,100)

oppdaterfarge()
oppdaterBorder()

function settVerdier(element,min,max,value) {
	element.max = max;
	element.min = min;
	element.value = value;
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

function oppdaterfarge() {
    colorRed = colorRedElement.value;
    colorGreen = colorGreenElement.value;
    colorBlue = colorBlueElement.value;
	colorAlpha = colorAlphaElement.value/100;
    fargeFraFargevelger = "rgba(" + colorRed + "," + colorGreen + "," + colorBlue + "," + colorAlpha +")"

    colorVisualiser.style.backgroundColor = fargeFraFargevelger;
}

function oppdaterBorder() {
	borderVisualiser.style.border = borderStyleSelektorElement.options[borderStyleSelektorElement.selectedIndex].text
	borderVisualiser.style.borderWidth  = borderTykkelse.value + "px"
}



//Text edit funksjoner
function velgFont() {
	document.getElementById(valgtTekstFelst).style.fontFamily =document.getElementById("fontVelger").value
}
function velgFontSize () {
	document.getElementById(valgtTekstFelst).style.fontSize  = document.getElementById("fontSize").value + "px"
}

function sistValgtTekstfelt(evt) {
	valgtTekstFelst = this.id;
}
