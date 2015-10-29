$(document).ready(function() {
  var tacoPictures = [
  'https://cdn3.vox-cdn.com/fan_shot_images/326881/cage-taco.gif',
  'https://media.giphy.com/media/LVsmysvGBiZEs/giphy.gif',
  'http://2.media.collegehumor.cvcdn.com/89/32/27a7621cc9c1d0e6dc8e717702083276-taco8.gif',
  'http://media.giphy.com/media/Ecz51X5IAD5DO/giphy.gif',
  'http://i.imgur.com/YRXz0Tm.gif',
  'https://cdn0.vox-cdn.com/fan_shot_images/326965/taco-coster.gif',
  'http://99gifs.com/-img/524e67bd1605fb64ce0012c8.gif?w=620&h=465',
  'http://0.media.collegehumor.cvcdn.com/12/88/6da367f52651f0fafa1020622c155474-taco16.gif',
  'http://i.imgur.com/XGzXLEk.gif',
  'http://i.imgur.com/sItPd.gif',
  'http://0.media.collegehumor.cvcdn.com/43/84/ef86568697a08a91462512bdbb8b8889-taco11.gif',
  'https://cdn2.vox-cdn.com/fan_shot_images/326935/tacos.gif',
  'https://cdn2.vox-cdn.com/fan_shot_images/326875/taco-recall.gif'
  ];

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
  console.log(taco);
  }
})
