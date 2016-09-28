var bildeArray = ["http://www.dayztv.com/wp-content/uploads/2014/01/dayz-standalone-wallpaper-survivor-holdup.jpg","http://www.bion.no/filarkiv/2013/10/ScanStockPhoto_image_238095web.jpg"];
var bildeTeller = 0;
window.onload = oppstart;
function oppstart(){
	document.getElementById("btnLeggTilBilde").onclick = leggTilBilde;
	var bildeURLElement = document.getElementById("bildeInput");
	document.getElementById("bilde").src = bildeArray[bildeTeller];
	setInterval(byttBilde,1000)

}

/******* SLIDESHOW *********/
function leggTilBilde() {
	if(bildeURLElement.value !== "") {
		bildeArray.push(bildeURLElement.value);
		console.log(bildeArray);
		bildeURLElement.value = "";
	}
}
function byttBilde() {
	console.log(bildeArray.length-1)
	if(bildeTeller > bildeArray.length-1)
	{
		bildeTeller = 0;
	}
	console.log(bildeTeller)
	document.getElementById("bilde").src = bildeArray[bildeTeller];
	//gjør om til css senere
	document.getElementById("bilde").style.height = "600px";
	document.getElementById("bilde").style.width = "600px";
	bildeTeller++

}
/******* SLIDESHOW SLUTT *********/
