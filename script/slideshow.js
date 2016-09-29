var bildeArray = ["http://www.dayztv.com/wp-content/uploads/2014/01/dayz-standalone-wallpaper-survivor-holdup.jpg","http://www.bion.no/filarkiv/2013/10/ScanStockPhoto_image_238095web.jpg"];
var bildeTeller = 0;
var bildeURLElement;
window.onload = oppstart;
	function oppstart(){
		document.getElementById("btnLeggTilBilde").onclick = leggTilBilde;
		bildeURLElement = document.getElementById("bildeInput");
		document.getElementById("bilde").src = bildeArray[bildeTeller];
		setInterval(byttBilde,3000)
}

/******* SLIDESHOW *********/
	function leggTilBilde() {
		if(bildeURLElement.value !== "") {
			bildeArray.push(bildeURLElement.value);
			bildeURLElement.value = "";
		}
}
	function byttBilde() {
		if(bildeTeller > bildeArray.length-1)
		{
			bildeTeller = 0;
	}
	document.getElementById("bilde").src = bildeArray[bildeTeller];

		bildeTeller++

}
/******* SLIDESHOW SLUTT *********/
