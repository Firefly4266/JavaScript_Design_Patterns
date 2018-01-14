var leadself = 'Me: ',
		leadcomputer = "PC: ",
		aSaid= ["This is a Cyber Chat"],
		msgYes = "Yes, that's a great idea.",
		msgNo = "No, that must be a mistake.",
		aSassyStuff = ["Like mold on books, grow myths on history.",
									"She moved like a poem and smiled like a sphinx.",
									"As long as we don’t die, this is gonna be one hell of a story.",
									"She laughed, and the desert sang.",
									"You’ve got about as much charm as a dead slug."];
			
function talk(msg){
	echo(leadself + msg);
}

function replyYesNo(){
	var msg = Math.random()<.5 ? msgYes : msgNo;
	echo(leadcomputer + msg);
}

function saySassyStuff(){
	var msg = aSassyStuff[ Math.floor(Math.random() * aSassyStuff.length)];
	echo(leadcomputer + msg);
}

function echo(msg){
	aSaid.push("<div>" + msg + "</div>");
	start = Math.max(aSaid.length - 6, 0), 
	out = "";

	// for(var i = start; i < aSaid.length; i++){
	// 	out += aSaid[i];
	// }

	// *** refactor: this is the same as above using a variable instead of the object. better performance.

	var aSaidLength = aSaid.length;
	for(var i = start; i < aSaidLength; i++){
		out += aSaid[i];
	}

	$('.advert').html(out);
	$('#talk span').text(msg);
}


					








