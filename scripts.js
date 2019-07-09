// change bg-color to #222f3e or #581845  and the button to  #e85130 

document.addEventListener("DOMContentLoaded", () => {

	let btn = document.querySelector("button")  
	btn.onclick = changeBackground;

	function changeBackground() {
		let element = document.getElementById("myDIV");
    		element.classList.toggle("mystyle");
 	}

});

