function init(){
//add your javascrip between these two lines of code
 
	var eBut = document.getElementById("entrybutton");

	function runAlert() {
		var eInp = document.getElementById("entryinput");
		var tOut = document.getElementById("textoutput");
		
		alert("Lev Pesin: " + eInp.value);
		tOut.innerHTML = eInp.value;
	}
	
	eBut.addEventListener('click', runAlert);
}
window.addEventListener('load', init);