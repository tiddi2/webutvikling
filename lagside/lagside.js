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




var bildeArray = ["http://www.dayztv.com/wp-content/uploads/2014/01/dayz-standalone-wallpaper-survivor-holdup.jpg","http://www.bion.no/filarkiv/2013/10/ScanStockPhoto_image_238095web.jpg","https://puu.sh/rEmTw/24af51dd38.png"];
var bildeTeller = 1;
var bildeBytte = 0;
var bildeURLElement, bildeElementer, btnLeggTilBilde;

bildeElement = [document.getElementById("bilde0"),document.getElementById("bilde1")]
btnLeggTilBilde = document.getElementById("btnLeggTilBilde")
bildeURLElement = document.getElementById("bildeInput");

btnLeggTilBilde.onclick = leggTilBilde;
bildeElement[0].src = bildeArray[bildeTeller-1];
bildeElement[1].style.opacity = 0;

setInterval(byttBilde,3000)





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
var borderBolean = false;


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
document.getElementById("border5").onclick = onclickFunksjoner;
document.getElementById("lagNav").onclick = onclickFunksjoner;
document.getElementById("lagTitle").onclick = onclickFunksjoner;
document.getElementById("lagSide").onclick = onclickFunksjoner;
document.getElementById("design").onclick = onclickFunksjoner;


document.getElementById("borderVisualiser").onclick=settBorder;
document.getElementById("fargeEndrer").onclick = settFarge;


document.getElementById("left").onclick = align
document.getElementById("center").onclick = align
document.getElementById("right").onclick = align





settVerdier(borderTykkelse,0,10,2)
settVerdier(colorRedElement,0,255,255)
settVerdier(colorGreenElement,0,255,0)
settVerdier(colorBlueElement,0,255,255)
settVerdier(colorAlphaElement,0,100,100)




oppdaterfarge()
oppdaterBorder()

// samlings funksjon for onclick funksjonene
function onclickFunksjoner(){
    if(skalSetteFarge=== true || borderBolean === true) {
        fargeId = this.id;
        fargeElement = document.getElementById(fargeId);
        velgBorderElement = this.id;


        DefinerFargeBoks();
        giBorder();
        skalSetteFarge = false;
        borderBolean = false;
    }
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
    if(fargeElement.id == "lagSide") {
        document.getElementById("makeMyMistakesDissaper1").style.backgroundColor = fargeFraFargevelger;
        document.getElementById("makeMyMistakesDissaper2").style.backgroundColor = fargeFraFargevelger;
    }

}

// lagrer ID'n til det elementet som klikkes på, slik at vi kan bruke det senere når vi skal sette fargen.
function DefinerFargeBoks(){
    if (skalSetteFarge === true){
        oppdaterfarge();
        oppdaterfarge2();
    }
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

function settBorder() {
    borderBolean = true;

}

function giBorder(evt){
    if (borderBolean === true){

    oppdaterBorder();
    oppdaterBorder2()
    hentStorrelse();
    hentStorrelse2();
    }

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

function align(evt) {

    document.getElementById(valgtTekstFelst).style.textAlign = this.id
}



//funksjoner for slideshow

function leggTilBilde() {
	if(bildeURLElement.value !== "" && checkURL(bildeURLElement.value) || substringIString(bildeURLElement.value,"https://www.google")) {
		bildeArray.push(bildeURLElement.value);
		bildeURLElement.value = "";
	}
}
function byttBilde() {
	//sjekker om vi er på siste bilde
	if(bildeTeller >= bildeArray.length)
	{
		//Setter bilde til første
		bildeTeller = 0;
	}
	if(bildeBytte %2 === 0) {
		bildeElement[1].src = bildeArray[bildeTeller];
		bildeElement[1].style.opacity = 1;
		flyttBilde()
	}
	else {
		bildeElement[0].src = bildeArray[bildeTeller];
		bildeElement[0].style.opacity = 1;
		flyttBilde()
	}

	bildeTeller++
	bildeBytte++
}

function flyttBilde() {
	var tykkelse = 33;
	if(tykkelse > 0) {
		var bevegID = setInterval(beveg,10)
	}
	function beveg() {
		tykkelse -= 1
		document.getElementById('placeholder').setAttribute("style","width:" + tykkelse + "%");
		if(tykkelse === 0)
		{
			clearInterval(bevegID)
			bevegID = 0;
			document.getElementById('placeholder').setAttribute("style","width:" + 33 + "%");
			if(bildeBytte %2 === 0) {
				bildeElement[0].parentNode.insertBefore(bildeElement[0], bildeElement[1]);
				bildeElement[1].style.opacity = 0;
			}
			else {
				bildeElement[1].parentNode.insertBefore(bildeElement[1], bildeElement[0]);
				bildeElement[0].style.opacity = 0;

			}
		}
	}
}

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}


function substringIString(string,subring) {
	return (string.indexOf(subring) !== -1);
}
