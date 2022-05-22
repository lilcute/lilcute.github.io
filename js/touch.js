var article = document.getElementsByTagName("article")[0]; // define the article
var bc = article.innerHTML; // define variable bc that includes the business card.

// define a function to overwrites the content of article with qrCode var.
function showQrCode() {
	var style = "width: 15%; height: 15%; display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
	var qrCode = '<img src="../media/qr-code.svg" /><img id="memoji" ondblclick="handleQrCode()" style="' + style + '" src="../media/memoji.webp" />';
	article.innerHTML = qrCode; // trigger.
}

// define a function to handle qr-code to bc and bc to qr-code
function handleQrCode() {
	if (article.innerHTML == bc) {
		showQrCode();
	} else {article.innerHTML = bc}
}

// add an event listener to listen for three start touches.
article.addEventListener("touchstart", function(event) {
	var countTouches = event.touches.length;
	if (countTouches == 3) {
		handleQrCode();
	}
}, false)

// define 3 fingers touch and functions to show and hide article.innerHTML.
