// change bg-color to #222f3e or #581845  and the button to  #e85130 

document.addEventListener("DOMContentLoaded", () => {

	let btn = document.querySelector("button")  
	btn.onclick = changeBackground;

	// function changeBackground () {
	// 	document.body.style.background = "#222f3e";
	// 	document.body.style.color = 'white';
	// 	btn.style.backgroundColor = '#e85130';
	// 	btn.style.color = 'yellow';

	function changeBackground() {
		var element = document.getElementById("myDIV");
    	element.classList.toggle("mystyle");
 	}

});

