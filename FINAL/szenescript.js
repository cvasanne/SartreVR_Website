function person (i){
	
	if(szeneArray[i].indexOf('garcin') > 0){
		return "garcin";
	} else if (szeneArray[i].indexOf('ines') > 0){
		return "ines";		
	} else {return "estelle";}
	
}

function (i){
	var mono = document.querySelector('#'+monologe[i]);
	
	mono.setAttribute('visible', true);
	setTimeout(function(){mono.setAttribute('visible', false);}, 10000);
}

function szeneStart(){
	
	var file = "1";
	var garcin = document.querySelector('#garcin');
	var ines = document.querySelector('#ines');
	var estelle = document.querySelector('#estelle');
	
	
	garcin.querySelector ('[sound]');
	ines.querySelector ('[sound]');
	estelle.querySelector ('[sound]');
	
		garcin.components.sound.playSound();

	garcin.addEventListener('sound-ended', function(){
		if (person(file)=="garcin"){
			garcin.setAttribute('sound', 'src', 'url(Soundfiles/Szene/'+szeneArray[file]+')');
			file++;
			garcin.components.sound.playSound();
		}else if(person(file)=="ines"){
			ines.setAttribute('sound', 'src', 'url(Soundfiles/Szene/'+szeneArray[file]+')');
			file++;
			ines.components.sound.playSound();
		}else if(person(file)=="estelle"){
			estelle.setAttribute('sound', 'src', 'url(Soundfiles/Szene/'+szeneArray[file]+')');
			file++;
			estelle.components.sound.playSound();
		}
	});
	
	ines.addEventListener('sound-ended', function(){
		if (person(file)=="garcin"){
			garcin.setAttribute('sound', 'src', 'url(Soundfiles/Szene/'+szeneArray[file]+')');
			file++;
			garcin.components.sound.playSound();
		}else if(person(file)=="ines"){
			ines.setAttribute('sound', 'src', 'url(Soundfiles/Szene/'+szeneArray[file]+')');
			file++;
			ines.components.sound.playSound();
		}else if(person(file)=="estelle"){
			estelle.setAttribute('sound', 'src', 'url(Soundfiles/Szene/'+szeneArray[file]+')');
			file++;
			estelle.components.sound.playSound();
		}
	});
		
	estelle.addEventListener('sound-ended', function(){
		if (person(file)=="garcin"){
			garcin.setAttribute('sound', 'src', 'url(Soundfiles/Szene/'+szeneArray[file]+')');
			file++;
			garcin.components.sound.playSound();
		}else if(person(file)=="ines"){
			ines.setAttribute('sound', 'src', 'url(Soundfiles/Szene/'+szeneArray[file]+')');
			file++;
			ines.components.sound.playSound();
		}else if(person(file)=="estelle"){
			estelle.setAttribute('sound', 'src', 'url(Soundfiles/Szene/'+szeneArray[file]+')');
			file++;
			estelle.components.sound.playSound();
		}
	});
}