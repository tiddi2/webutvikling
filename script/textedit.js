var valgtTekstFelst;
window.onload = oppstart;
function oppstart(){
    document.getElementById("fontVelger").onchange = velgFont;
	document.getElementById("fontSize").onchange = velgFontSize;

	document.getElementById("tittelFelt").onclick = sistValgtTekstfelt;
	document.getElementById("teksther").onclick = sistValgtTekstfelt;
}
function velgFont() {
	document.getElementById(valgtTekstFelst).style.fontFamily =document.getElementById("fontVelger").value
}
function velgFontSize () {
	document.getElementById(valgtTekstFelst).style.fontSize  = document.getElementById("fontSize").value + "px"
}

function sistValgtTekstfelt(evt) {
	valgtTekstFelst = this.id;
}
