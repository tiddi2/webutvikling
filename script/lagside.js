//variabler for range bar elementer
			var colorRedElement = document.getElementById("red");
			var colorGreenElement = document.getElementById("green");
			var colorBlueElement = document.getElementById("blue");

			//variabler for verdien til range bar elementer
			var colorRed;
			var colorGreen;
			var colorBlue;
			var fargeFraFargevelger;
			var skalSetteFarge = false;
			window.onload = oppstart;
			function oppstart(){
				colorRedElement = document.getElementById("red");
				colorGreenElement = document.getElementById("green");
				colorBlueElement = document.getElementById("blue");
			    



			    document.getElementById("boks").onmousedown = settFarge;
				document.getElementById("boks2").onmousedown = giFarge;
				document.getElementById("boks3").onmousedown = giFarge;
				document.getElementById("boks4").onmousedown = giFarge;
				document.getElementById("boks5").onmousedown = giFarge;
				document.getElementById("boks6").onmousedown = giFarge;

				colorRedElement.onmousemove = oppdaterfarge;
				colorGreenElement.onmousemove = oppdaterfarge;
				colorBlueElement.onmousemove = oppdaterfarge;

				colorRedElement.max = 255;
				colorGreenElement.max = 255;
				colorBlueElement.max = 255;

				colorRedElement.min = 0;
				colorGreenElement.min = 0;
				colorBlueElement.min = 0;
				colorRedElement.value = 255;
				colorGreenElement.value = 0;
				colorBlueElement.value = 255;
				colorRed = colorRedElement.value;
				colorGreen = colorGreenElement.value;
				colorBlue = colorBlueElement.value;
				fargeFraFargevelger = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
				document.getElementById("boks").style.backgroundColor = fargeFraFargevelger;
			}
			function oppdaterfarge() {
				colorRed = colorRedElement.value;
				colorGreen = colorGreenElement.value;
				colorBlue = colorBlueElement.value;
				fargeFraFargevelger = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")"
				document.getElementById("boks").style.backgroundColor = fargeFraFargevelger;
			}

			function settFarge() {
				skalSetteFarge = true
				console.log("true")
			}
			function giFarge(event) {
				console.log(skalSetteFarge)
				if(skalSetteFarge === true){
				console.log(this)
				this.style.backgroundColor = fargeFraFargevelger;
				skalSetteFarge = false;
				}
			}
