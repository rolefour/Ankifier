function kanaswitch(){
	var katakana = document.getElementById('katakana');
	var hiragana = document.getElementById('hiragana');

	if(katakana.style.display == "none"){
		katakana.style.display = "block";
		hiragana.style.display = "none";
	}
	else {
		hiragana.style.display = "block";
		katakana.style.display = "none";
	}
}