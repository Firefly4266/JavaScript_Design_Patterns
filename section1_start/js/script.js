//now we remove everything out of the global namespace by wrapping it in an IIFE

(function(win, doc, $){
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
	
	$(doc).ready(function(){
		chatModule.talk("Hello World");
		chatModule.replyYesNo();
		chatModule.saySassyStuff()
	});

	if(!win.chatModule) win.chatModule = chatModule;
	/*we are still using the global scope because we call document.ready and
	 we are using JQuery. We can fix this by sending them to our object 
	 (along with the window object)and referencing them in our initial function call.*/
})(window, document, jQuery);
/*because we passed "window" to our object and referenced it in our function definition
we can leverage this to create a public api and create the chatModule if it doesn't exist
(see line 57). This line CANNOT work unless the window object is passed on line 61.*/