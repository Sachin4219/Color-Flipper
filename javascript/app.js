const colors = ["green", "red", "blue", "yellow", "orange", "violet", "white", "gray", "cyan"];

const btn1 = document.querySelector("#btn-rgb");
const color1 = document.querySelector(".color1");

if(btn1){
	btn1.addEventListener("click", function(){
		const random =  Math.floor(9* Math.random());
		document.body.style.backgroundColor = colors[random];
		color1.textContent = colors[random];
	});	
}


const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btn2 = document.querySelector("#btn-hex");
const color2 = document.querySelector(".color2");


if(btn2){
	btn2.addEventListener("click", function(){
		var colorString = "#";
		for(var i=0; i<6;i++){
			const random =  Math.floor(16* Math.random());
			colorString += hex[random];
		}
		document.body.style.backgroundColor = colorString;
		color2.textContent = colorString;
	});
}



// const span = document.querySelector(".color2");
// const btnCopy = document.getElementById('btn-copy')

// span.onclick = function() {
//   document.execCommand("copy");
// }

// span.addEventListener("copy", function(event) {
//   event.preventDefault();
//   if (event.clipboardData) {
//     event.clipboardData.setData("text/plain", span.textContent);
//   }
// });



// function copy2(){
//   var copyText = document.querySelector(".color2");

//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */

//   navigator.clipboard.writeText(copyText.value);

// }