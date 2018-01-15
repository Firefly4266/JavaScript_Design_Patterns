var chatModule = (function() {
		var _leadself = 'Me: ',
		_leadcomputer = "PC: ",
		_aSaid = ["This is a Cyber Chat"],
		_msgYes = "Yes, that's a great idea.",
		_msgNo = "No, that must be a mistake.",
		_aSassyStuff = ["Like mold on books, grow myths on history.",
						"She moved like a poem and smiled like a sphinx.",
						"As long as we don’t die, this is gonna be one hell of a story.",
						"She laughed, and the desert sang.",
						"You’ve got about as much charm as a dead slug."
					];

		function talk(msg){
			_echo(_leadself + msg);
		};
		
		function replyYesNo(){
			var msg = Math.random()<.5 ? _msgYes : _msgNo;
			_echo(_leadcomputer + msg);
		};
		
		function saySassyStuff(){
			var msg = _aSassyStuff[ Math.floor(Math.random() * _aSassyStuff.length)];
			_echo(_leadcomputer + msg);
		};
					
		function _echo(msg) {
			_aSaid.push("<div>" + msg + "</div>");
			var _aSaidLength = _aSaid.length,
			start = Math.max(_aSaidLength - 6, 0), 
			out = "";
		
			for(var i = start; i < _aSaidLength; i++){
				out += _aSaid[i];
			}
			$('#talk span').text(msg);
			$('.advert').html(out);
		};
		return {
			/* reveal the methods you want used here by setting them to a variable.*/
			talk : talk,
			replyYesNo : replyYesNo,
			saySassyStuff : saySassyStuff
		};	
})();

$(document).ready(function(){
	chatModule.talk("Hello World");
	chatModule.replyYesNo();
	chatModule.saySassyStuff()
});