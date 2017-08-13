function soundStart(){
	var file = "1";
	
	var kellnerSounds = [
		"001kellner.mp3",
		"002kellner.mp3",
		"003kellner.mp3",
		"004kellner.mp3"
	];
			
	var kellner = document.querySelector ('#kellner');
	kellner.querySelector ('[sound]');
	kellner.addEventListener('sound-loaded', function(){
		kellner.components.sound.playSound();
	}); 
	kellner.addEventListener('sound-ended', function(){
		kellner.setAttribute('sound', 'src', 'url(Soundfiles/Kellner/'+kellnerSounds[file]+')');
		file++;
		kellner.components.sound.playSound();
			
	});

}
	
