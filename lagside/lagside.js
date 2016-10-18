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
var fargeElement;
var fargeId;
var skalSetteFarge = false;

// For å resete skyggen
document.getElementById("btnSkyggeReset").onclick = resetSkygge;
// for å oppdatere størrelsene på skyggen
document.getElementById("skyggeBredde").onmousemove = hentStorrelse;
document.getElementById("skyggeHoyde").onmousemove = hentStorrelse;
document.getElementById("hvorIgjennomsiktig").onmousemove = hentStorrelse;
document.getElementById("spread").onmousemove = hentStorrelse;
				
// elementer til skygge
document.getElementById("skyggeBredde").min=-50;
document.getElementById("skyggeHoyde").min=-50;
document.getElementById("spread").min = 0;
document.getElementById("hvorIgjennomsiktig").min=0;
				
document.getElementById("skyggeBredde").max= 50;
document.getElementById("skyggeHoyde").max =50;
document.getElementById("spread").max = 50;
document.getElementById("hvorIgjennomsiktig").max=100;
				
document.getElementById("skyggeBredde").value= 0;
document.getElementById("skyggeHoyde").value =0;
document.getElementById("spread").value = 0;
document.getElementById("hvorIgjennomsiktig").value=0;

//Border elemeneter
var borderStyleSelektorElement = document.getElementById("borderStyleSelektor");
var borderVisualiser = document.getElementById("borderVisualiser");
var borderTykkelse = document.getElementById("borderTykkelse");
var shadowWidth = document.getElementById("skyggeBredde");
var shadowHeight = document.getElementById("skyggeHoyde");
var shadowBlur = document.getElementById("hvorIgjennomsiktig");	
var shadowSpread = document.getElementById("spread");
var velgBorderElement;


//brukerstyrte funksjoner
colorVisualiser.click = settFarge;
colorRedElement.oninput = oppdaterfarge;
colorGreenElement.oninput = oppdaterfarge;
colorBlueElement.oninput = oppdaterfarge;
colorAlphaElement.oninput = oppdaterfarge;

// Elementer som brukes til textedit
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

// Elementer som brukes til endring av border, skygge og farge
borderTykkelse.oninput = oppdaterBorder
borderStyleSelektorElement.onchange = oppdaterBorder
borderStyleSelektorElement.onchange = oppdaterBorder2
document.getElementById("border1").onclick = onclickFunksjoner;
document.getElementById("border2").onclick = onclickFunksjoner;
document.getElementById("border3").onclick = onclickFunksjoner;
document.getElementById("border4").onclick = onclickFunksjoner;
/*
document.getElementById("border5").onclick = onclickFunksjoner;
document.getElementById("lagNav").onclick = onclickFunksjoner;
*/



settVerdier(borderTykkelse,0,10,2)
settVerdier(colorRedElement,0,255,255)
settVerdier(colorGreenElement,0,255,0)
settVerdier(colorBlueElement,0,255,255)
settVerdier(colorAlphaElement,0,100,100)




oppdaterfarge()
oppdaterBorder()

// samlings funksjon for onclick funksjonene
function onclickFunksjoner(){
	fargeId = this.id;
	fargeElement = document.getElementById(fargeId);
	velgBorderElement = this.id;
	
	
	DefinerFargeBoks();
	giBorder();
}


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
// Fikk ikke parametere til å fungere her, beklager for kopiering av samme funskjon.

// Her oppdateres fargen i eksempel boksen
function oppdaterfarge() {
	
    colorRed = colorRedElement.value;
    colorGreen = colorGreenElement.value;
    colorBlue = colorBlueElement.value;
	colorAlpha = colorAlphaElement.value/100;
    fargeFraFargevelger = "rgba(" + colorRed + "," + colorGreen + "," + colorBlue + "," + colorAlpha +")"

    colorVisualiser.style.backgroundColor = fargeFraFargevelger;
}

// Her oppdateres fargen på det elementet du valgte i nettsiden.
function oppdaterfarge2() {
	
    colorRed = colorRedElement.value;
    colorGreen = colorGreenElement.value;
    colorBlue = colorBlueElement.value;
	colorAlpha = colorAlphaElement.value/100;
    fargeFraFargevelger = "rgba(" + colorRed + "," + colorGreen + "," + colorBlue + "," + colorAlpha +")"

    fargeElement.style.backgroundColor = fargeFraFargevelger;
}

// lagrer ID'n til det elementet som klikkes på, slik at vi kan bruke det senere når vi skal sette fargen.
function DefinerFargeBoks(){
	oppdaterfarge();
	oppdaterfarge2();
	
}


// Borderfunksjoner

// her oppdateres borderen i eksempelboksen
function oppdaterBorder() {
	borderVisualiser.style.border = borderStyleSelektorElement.options[borderStyleSelektorElement.selectedIndex].text
	borderVisualiser.style.borderWidth  = borderTykkelse.value + "px"
}

// her oppdateres borderen i et utvalgt element på nettsiden
function oppdaterBorder2() {
	document.getElementById(velgBorderElement).style.border = borderStyleSelektorElement.options[borderStyleSelektorElement.selectedIndex].text
	document.getElementById(velgBorderElement).style.borderWidth  = borderTykkelse.value + "px"
}


function giBorder(evt){
	
	
	oppdaterBorder();
	oppdaterBorder2()
	hentStorrelse();
	hentStorrelse2();
	

}


// Endring av skyggen
// Samme problem her som tidligere, måtte dessverre kopiere kode.

// her oppdateres skyggen i eksempelboksen
function hentStorrelse(){
shadowWidth = document.getElementById("skyggeBredde");
shadowHeight = document.getElementById("skyggeHoyde");
shadowBlur = document.getElementById("hvorIgjennomsiktig");
shadowSpread = document.getElementById("spread");
				
	if (shadowWidth.value!=="" && shadowHeight.value!=="" && shadowBlur.value!=="") {
	document.getElementById("borderVisualiser").style.boxShadow= shadowWidth.value+"px " + shadowHeight.value+"px " + shadowBlur.value +"px " + shadowSpread.value +"px " + "#888888";
					
	} 
console.log(shadowWidth.value+","+ shadowHeight.value+","+ shadowBlur.value);
}

// her oppdateres borderen i det utvalgte elementet i nettleseren.
function hentStorrelse2(){
shadowWidth = document.getElementById("skyggeBredde");
shadowHeight = document.getElementById("skyggeHoyde");
shadowBlur = document.getElementById("hvorIgjennomsiktig");
shadowSpread = document.getElementById("spread");
				
	if (shadowWidth.value!=="" && shadowHeight.value!=="" && shadowBlur.value!=="") {
	document.getElementById(velgBorderElement).style.boxShadow= shadowWidth.value+"px " + shadowHeight.value+"px " + shadowBlur.value +"px " + shadowSpread.value +"px " + "#888888";
					
	} 
console.log(shadowWidth.value+","+ shadowHeight.value+","+ shadowBlur.value);
}


// resetter skyggen
function resetSkygge() {
document.getElementById("skyggeBredde").value= 0;
document.getElementById("skyggeHoyde").value =0;
document.getElementById("spread").value = 0;
document.getElementById("hvorIgjennomsiktig").value=0;
hentStorrelse();
hentStorrelse2();
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
