var bildeArray = ["http://www.dayztv.com/wp-content/uploads/2014/01/dayz-standalone-wallpaper-survivor-holdup.jpg","http://www.bion.no/filarkiv/2013/10/ScanStockPhoto_image_238095web.jpg","https://puu.sh/rEmTw/24af51dd38.png"];
var bildeTeller = 1;
var bildeBytte = 0;
var bildeURLElement, bildeElementer, btnLeggTilBilde;
window.onload = oppstart;
	function oppstart(){
		bildeElement = [document.getElementById("bilde0"),document.getElementById("bilde1")]
		btnLeggTilBilde = document.getElementById("btnLeggTilBilde")
		bildeURLElement = document.getElementById("bildeInput");

		btnLeggTilBilde.onclick = leggTilBilde;
		bildeElement[0].src = bildeArray[bildeTeller-1];
		bildeElement[1].style.opacity = 0;

		setInterval(byttBilde,3000)
}
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
	var tykkelse = 300;
	if(tykkelse > 0) {
		var bevegID = setInterval(beveg,10)
	}
	function beveg() {
		tykkelse -= 3
		document.getElementById('placeholder').setAttribute("style","width:" + tykkelse + "px");
		if(tykkelse === 0)
		{
			clearInterval(bevegID)
			bevegID = 0;
			document.getElementById('placeholder').setAttribute("style","width:" + 300 + "px");
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
