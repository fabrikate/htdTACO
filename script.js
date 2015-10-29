var joke = " ";

for (var i = 0; i < joke.length; i++) {
	var string = joke[i];
	var splitString = string.split(" ");
	//checks array of words in the sentence at joke[i], replaces it with taco
	for (var j = 0; j < splitString.length; j++){
		var thisWord = splitString[j].toLowerCase();
		if (thisWord === "mama" || thisWord === "momma"){
			splitString[j] = "taco";
		} else if (thisWord === "mama's" || thisWord === "momma's") {
			splitString[j] = "taco's";
		} else if (thisWord === "she") {
			splitString[j] = "it";
		} else if (thisWord === "her") {
			splitString[j] = "its";
		}
	}
	var taco = splitString.join(' ');
// console.log(taco);
}