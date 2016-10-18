var valgtTekstFelst;
window.onload = oppstart;
function oppstart(){
    document.getElementById("fontVelger").onchange = velgFont;
	document.getElementById("fontSize").onchange = velgFontSize;

	document.getElementById("tittelFelt").onclick = sistValgtTekstfelt;
	document.getElementById("teksther").onclick = sistValgtTekstfelt;
    document.getElementById("left").onclick = align
    document.getElementById("center").onclick = align
    document.getElementById("right").onclick = align

}
function align(evt) {
    document.getElementById(valgtTekstFelst).style.textAlign = this.id
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
