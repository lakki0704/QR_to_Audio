// script.js file

const arrayToCheck = ['AMD', 'HMT', 'BAV', 'UDAI', 'FKGDM', 'SRTX', 'AMD1' , 'BDQ1', 'CKD', 'BHJ', 'RJK', 'FKJNG', 'GAN', 'GDH', 'POR', 'BDQ', 'PLN', 'AMD1', 'JET1', 'JMN', 'SNG', 'MHS'
,'FKBAV', 'SKVL', 'UNA' ,'AMDDC', 'AND', 'FKAND'];

function domReady(fn) {
	if (
		document.readyState === "complete" ||
		document.readyState === "interactive"
	) {
		setTimeout(fn, 1000);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

domReady(function () {

	// If found you qr code
	function onScanSuccess(str, decodeResult) {
		//alert("You Qr is : " + decodeText, decodeResult);
       // document.getElementById("text").innerHTML= str;

        const hub = arrayToCheck.find(element => str.includes(element));
        if (hub) {
            //console.log(foundElement);
            document.getElementById("text").innerHTML= hub;

          } else {
            console.log('No matching element found');
          }

          if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance();
            utterance.text = hub;
            speechSynthesis.speak(utterance);
          }
          else{
            console.log("error");
          }


	}

	let htmlscanner = new Html5QrcodeScanner(
		"my-qr-reader",
		{ fps: 10, qrbos: 250 }
	);
	htmlscanner.render(onScanSuccess);
});
