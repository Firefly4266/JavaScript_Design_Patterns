//shift to a module pattern to try to provide more privacy for our variables

var chatModule = (function() {
	/*we bring our variables inside of the module so we have access to them.  here there is
	no need for the namespace variable that was created earlier*/

		var leadself = 'Me: ',
		leadcomputer = "PC: ",
		aSaid = ["This is a Cyber Chat"],
		msgYes = "Yes, that's a great idea.",
		msgNo = "No, that must be a mistake.",
		aSassyStuff = ["Like mold on books, grow myths on history.",
						"She moved like a poem and smiled like a sphinx.",
						"As long as we don’t die, this is gonna be one hell of a story.",
						"She laughed, and the desert sang.",
						"You’ve got about as much charm as a dead slug."
					];
					
	//we move the echo inside of the chat module but outside of the return so it stays private
	function echo(msg) {
		aSaid.push("<div>" + msg + "</div>");
		var aSaidLength = aSaid.length,
		start = Math.max(aSaidLength - 6, 0), 
		out = "";
	
		for(var i = start; i < aSaidLength; i++){
			out += aSaid[i];
		}
		$('#talk span').text(msg);
		$('.advert').html(out);
	};
	//inside of this module we are going to return the functions we want made public.
	return {
		talk: function(msg){
			echo(leadself + msg);
		},
		
		replyYesNo: function(){
			var msg = Math.random()<.5 ? msgYes : msgNo;
			echo(leadcomputer + msg);
		},
		
		saySassyStuff: function(){
			var msg = aSassyStuff[ Math.floor(Math.random() * aSassyStuff.length)];
			echo(leadcomputer + msg);
		}
	};	
})();

$(document).ready(function(){
	chatModule.talk("Hello World");
	chatModule.replyYesNo();
	chatModule.saySassyStuff();
});
/*var com = com || {};
com.Firefly4266 = com.Firefly4266 || {};
com.Firefly4266.JSDP = com.Firefly4266.JSDP ||{};

com.Firefly4266.JSDP = {
		leadself: 'Me: ',
		leadcomputer: "PC: ",
		aSaid: ["This is a Cyber Chat"],
		msgYes: "Yes, that's a great idea.",
		msgNo: "No, that must be a mistake.",
		aSassyStuff: ["Like mold on books, grow myths on history.",
						"She moved like a poem and smiled like a sphinx.",
						"As long as we don’t die, this is gonna be one hell of a story.",
						"She laughed, and the desert sang.",
						"You’ve got about as much charm as a dead slug."
					],
				
	echo: function(msg){
		this.aSaid.push("<div>" + msg + "</div>");
		var aSaidLength = this.aSaid.length,
		start = Math.max(aSaidLength - 6, 0), 
		out = "";
	
		for(var i = start; i < aSaidLength; i++){
			out += this.aSaid[i];
		}
	
		$('#talk span').text(msg);
		$('.advert').html(out);
	}
};*/



					








