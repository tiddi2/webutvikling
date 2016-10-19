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
var slideshowSkalFjernes = true;


var bildeArray = ["http://hd.wallpaperswide.com/thumbs/beautiful_forest_scenery-t2.jpg","http://www.petsftw.com/wp-content/uploads/2016/03/cutecat.jpg","http://www.bestherbalhealth.com/wp-content/uploads/2014/04/limes.jpg"];
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
settVerdier(document.getElementById("skyggeBredde"),-50,50,0)
settVerdier(document.getElementById("skyggeHoyde"),-50,50,0)
settVerdier(document.getElementById("spread"),0,50,0)
settVerdier(document.getElementById("hvorIgjennomsiktig"),0,100,0)

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
        console.log(this.id)

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
    document.getElementById("borderVisualiser").style.border = borderStyleSelektorElement.options[borderStyleSelektorElement.selectedIndex].text
    document.getElementById("borderVisualiser").style.borderWidth  = borderTykkelse.value + "px"
}

// her oppdateres borderen i et utvalgt element på nettsiden
function oppdaterBorder2() {
    if(velgBorderElement) {
        document.getElementById(velgBorderElement).style.border = borderStyleSelektorElement.options[borderStyleSelektorElement.selectedIndex].text
        document.getElementById(velgBorderElement).style.borderWidth  = borderTykkelse.value + "px"
    }
    oppdaterBorder()
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
	if(bildeURLElement.value !== "" && checkURL(bildeURLElement.value)) {
        if(slideshowSkalFjernes) {
            bildeArray = [];
            slideshowSkalFjernes = false;
        }
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
	var plassering = 0;
	if(plassering > -100) {
		var bevegID = setInterval(beveg,10)
	}
	function beveg() {
		plassering -= 1
        if(bildeBytte %2 === 0) {
            bildeElement[1].style.left = plassering + "%"
            bildeElement[0].style.left = 100 +plassering + "%"
        }
        else {
            bildeElement[0].style.left = plassering + "%"
            bildeElement[1].style.left = 100 +plassering + "%"

        }
		if(plassering === -100)
		{
			clearInterval(bevegID)
			bevegID = 0;
		}
	}
}

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png|JPEG|JPG|GIF|PNG)$/) != null);
}


function substringIString(string,subring) {
	return (string.indexOf(subring) !== -1);
}
