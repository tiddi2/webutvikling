
var shadowWidth = document.getElementById("skyggeBredde");
var shadowHeight = document.getElementById("skyggeHoyde");
var shadowBlur = document.getElementById("hvorIgjennomsiktig");	
var shadowSpread = document.getElementById("spread");

// For å resete skyggen
document.getElementById("btnSkyggeReset").onclick = resetSkygge;
// for å oppdatere størrelsene på skyggen
document.getElementById("skyggeBredde").onmousemove = hentStorrelse;
document.getElementById("skyggeHoyde").onmousemove = hentStorrelse;
document.getElementById("hvorIgjennomsiktig").onmousemove = hentStorrelse;
document.getElementById("spread").onmousemove = hentStorrelse;
				
// variabler til skygge
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

// Endring av skyggen
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

function resetSkygge() {
document.getElementById("skyggeBredde").value= 0;
document.getElementById("skyggeHoyde").value =0;
document.getElementById("spread").value = 0;
document.getElementById("hvorIgjennomsiktig").value=0;
hentStorrelse();
}