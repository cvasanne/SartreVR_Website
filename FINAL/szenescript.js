var garcin = document.querySelector('#garcin');
var ines = document.querySelector('#ines');
var estelle = document.querySelector('#estelle');

function person (i){
	
	if(szeneArray[i].indexOf('garcin') > 0){
		return "garcin";
	} else if (szeneArray[i].indexOf('ines') > 0){
		return "ines";		
	} else {return "estelle";}
	
}

function monolog (i){
	var mono = document.querySelector('#'+monologe[i]);
	mono.setAttribute('scale', '10 10 10');
	mono.setAttribute('visible', true);
	setTimeout(function(){
			mono.setAttribute('visible', false);
			mono.setAttribute('scale', '0 0 0');
		}, 10000);
	
}

function szeneStart(file1){
	
	file = file1;
	mono = "0";
	garcin = document.querySelector('#garcin');
	ines = document.querySelector('#ines');
	estelle = document.querySelector('#estelle');
	
	
	garcin.querySelector ('[sound]');
	ines.querySelector ('[sound]');
	estelle.querySelector ('[sound]');
	
	if (file == 1){
	garcin.components.sound.playSound();
	} else {
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
	}

	garcin.addEventListener('sound-ended', function(){
		if (file == "4" || "5"|| "6"||"7"||"8"|| "10"|| "14"||"17"||"35"||"66"||"68"||"76"||"79"||"81"||"85"){
			monolog(mono);
			mono++;
		}
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
		if (file == "4" || "5"|| "6"||"7"||"8"|| "10"|| "14"||"17"||"35"||"66"||"68"||"76"||"79"||"81"||"85"){
			monolog(mono);
			mono++;
		}
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
		if (file == "4" || "5"|| "6"||"7"||"8"|| "10"|| "14"||"17"||"35"||"66"||"68"||"76"||"79"||"81"||"85"){
			monolog(mono);
			mono++;
		}
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
