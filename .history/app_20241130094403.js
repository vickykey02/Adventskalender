// Generiere die Kalender-Türchen
const calendar = document.querySelector('.calendar');
const today = new Date().toISOString().split('T')[0]; // Heutiges Datum im Format YYYY-MM-DD
if ('serviceWorker' in navigator) { //neu ab hier PWA
    navigator.serviceWorker.register('./sw.js')
        .then(registration => {
            console.log('Service Worker erfolgreich registriert:', registration);
        })
        .catch(error => {
            console.error('Service Worker Registrierung fehlgeschlagen:', error);
        });
}
//bis hier PWA

// Inhalte für die Tage
const days = {
    "2024-11-01": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag1.png",
	"2024-11-02": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag2.png",
	"2024-11-03": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag3.png",
	"2024-11-04": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag4.png",
	"2024-12-05": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag5.png",
	"2024-12-06": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag6.png",
	"2024-12-07": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag7.png",
	"2024-12-08": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag8.png",
	"2024-12-09": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag9.png",
	"2024-12-10": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag10.png",
	"2024-12-11": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag11.png",
	"2024-12-12": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag12.png",
	"2024-12-13": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag13.png",
    "2024-12-14": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag14.png", 
	"2024-12-15": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag15.png",
	"2024-12-16": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag16.png",
	"2024-12-17": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag17.png",
	"2024-12-18": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag18.png",
	"2024-12-19": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag19.png",
	"2024-12-20": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag20.png",
	"2024-12-21": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag21.png",
	"2024-12-22": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag22.png",
	"2024-12-23": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag23.png",
	"2024-12-24": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag24.png",

};

// Schleife durch die definierten Tage im 'days'-Objekt
for (const dateString in days) {
    const today = new Date().toLocaleDateString('en-CA'); // Format YYYY-MM-DD
    const day = document.createElement('div');
    day.classList.add('day');

    const date = new Date(dateString); // Datum direkt aus 'dateString'
    if (dateString <= today) {
        day.classList.add('opened');
        day.onclick = () => showContent(days[dateString], dateString); // Inhalt anzeigen
    } else {
        day.classList.add('locked');
    }

    // Setze die Anzeige für das Türchen (Tag des Monats)
    day.textContent = date.getDate();
    calendar.appendChild(day);
}

const doors = document.querySelectorAll('.day');

/*doors.forEach(door => {
    door.addEventListener('click', () => {
        if (!door.classList.contains('animating')) {
            door.classList.add('animating'); // Startet die Animation
        }
    });
});*/

doors.forEach(door => {
    door.addEventListener('click', () => {
        if (!door.classList.contains('locked') && !door.classList.contains('animating')) {
            // Tür öffnen
            door.classList.add('animating'); // Startet das Öffnen
            setTimeout(() => {
                door.classList.remove('animating'); // Animation entfernen
                door.classList.add('opened'); // Markiert Tür als geöffnet

                // Tür nach 3 Sekunden schließen
                setTimeout(() => {
                    door.classList.remove('opened'); // Entfernt "geöffnet"-Zustand
                    door.classList.add('closing'); // Startet das Schließen
                    setTimeout(() => {
                        door.classList.remove('closing'); // Entfernt Schließen-Klasse
                    }, 600); // Zeit entspricht der Schließ-Animation
                }, 3000); // Nach 3 Sekunden
            }, 600); // Zeit entspricht der Öffnungsanimation
        }
    });
});





// Funktion: Inhalt anzeigen
function showContent(content, dateString) {
    //alert(`Inhalt für heute: ${content}`); // Später ersetzen mit Modal oder Popup
	const modal = document.createElement('div');
	modal.classList.add('modal'); // Klasse aus CSS hinzufügen
	modal.style.position = 'fixed'; //ab hier neu von gpt
	modal.style.width = '100vw'; // 100% der Viewport-Breite
	modal.style.height = '100vh'; // 100% der Viewport-Höhe
	modal.style.margin = '0'; // Verhindere, dass unerwartete Margins eingefügt werden
	modal.style.padding = '0';
	//modal.style.top = '0';
	//modal.style.left = '0'; // Start bei 0
	modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
	//modal.style.display = 'flex';
	modal.style.justifyContent = 'center'; // Horizontale Zentrierung
	modal.style.alignItems = 'center'; // Vertikale Zentrierung
	//modal.style.overflow = 'hidden'; // Verhindert Scrollen
	modal.style.opacity = '0'; // Initiale Transparenz
	modal.style.transition = 'opacity 3s'; // Animiere die Sichtbarkeit
	setTimeout(() => {
		modal.style.opacity = '1'; // Volle Sichtbarkeit
	}, 100);
//bis hier

	const img = document.createElement('img');
	img.src = content;
	img.style.maxWidth = 'auto'; //neu wieder rein
	img.style.height = 'auto'; //neu wieder rein
	img.style.maxWidth = '90vw'; // Begrenzung auf 90% der Viewport-Breite //statt 90vw
	img.style.maxHeight = '90vh'; // Begrenzung auf 90% der Viewport-Höhe //statt 90vh
	img.style.objectFit = 'contain'; // Bild wird skaliert, um vollständig sichtbar zu sein
	modal.appendChild(img);

	const closeButton = document.createElement('button');
	closeButton.title = 'Close';
	closeButton.classList.add('button'); // Klasse aus CSS hinzufügen
	closeButton.textContent = 'Close';
	closeButton.textContent.style = 'color: white';
	closeButton.textContent.zIndex = '2001'; // Schrift eine Ebene nach vorn schieben
	closeButton.onclick = () => {
		document.body.removeChild(modal);
	};
	modal.appendChild(closeButton);

	const targetDate3 = new Date('2024-12-03');
	const currentDate3 = new Date(dateString);
	console.log(currentDate3.getTime(), targetDate3.getTime());
	console.log(dateString, today);


	if (currentDate3.getTime() === targetDate3.getTime()) {
		console.log('Das ist der 3. November');
		const linkButton3 = document.createElement('button');
		linkButton3.textContent = 'Link folgen';
		linkButton3.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton3.onclick = () => {
			window.open('https://share.chessbase.com/SharedGames/game/?p=Dx/dxlliODx7kwlLJwlgbjxptLVH4zQ2/CPyLlPj2wFHepLeutlGwTSoz5lbABaj', '_blank');
		};
		modal.appendChild(linkButton3);
	}

	const targetDate7 = new Date('2024-12-07');
	const currentDate7 = new Date(dateString);
	console.log(currentDate7.getTime(), targetDate7.getTime());
	console.log(dateString, today);


	if (currentDate7.getTime() === targetDate7.getTime()) {
		console.log('Das ist der 7. November');
		const linkButton7 = document.createElement('button');
		linkButton7.textContent = 'zum Artikel';
		linkButton7.textContent.zIndex = '1001';
		linkButton7.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton7.onclick = () => {
			window.open('https://www.zeit.de/zett/politik/2019-01/diese-10-feministinnen-musst-du-kennen', '_blank');
		};
		modal.appendChild(linkButton7);
	}

	const targetDate9 = new Date('2024-12-09');
	const currentDate9 = new Date(dateString);
	console.log(currentDate9.getTime(), targetDate9.getTime());
	console.log(dateString, today);


	if (currentDate9.getTime() === targetDate9.getTime()) {
		console.log('Das ist der 9. November');
		const linkButton9 = document.createElement('button');
		linkButton9.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton9.textContent = 'zum Rezept';
		linkButton9.style.position = 'absolute';
		linkButton9.style.top = '50%';
		linkButton9.style.left = '50%';
		linkButton9.style.transform = 'translate(-50%, -50%)';
		linkButton9.style.marginTop = '10px';
		linkButton9.onclick = () => {
			window.open('https://github.com/vickykey02/Adventskalender/raw/main/assets/Rezept_Julscheidt.pdf', '_blank');
		};
		modal.appendChild(linkButton9);
	}

	const targetDate10 = new Date('2024-12-10');
	const currentDate10 = new Date(dateString);
	console.log(currentDate10.getTime(), targetDate10.getTime());
	console.log(dateString, today);


	if (currentDate10.getTime() === targetDate10.getTime()) {
		console.log('Das ist der 10. November');
		const linkButton10 = document.createElement('button');
		linkButton10.textContent = 'zum Video';
		linkButton10.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton10.onclick = () => {
			window.open('https://www.youtube.com/watch?v=Bo0son9ZMdI', '_blank');
		};
		modal.appendChild(linkButton10);
	}

	const targetDate12 = new Date('2024-12-12');
	const currentDate12 = new Date(dateString);
	console.log(currentDate12.getTime(), targetDate12.getTime());
	console.log(dateString, today);


	if (currentDate12.getTime() === targetDate12.getTime()) {
		console.log('Das ist der 12. November');
		const linkButton12 = document.createElement('button');
		linkButton12.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton12.textContent = 'zur Anleitung';
		//linkButton12.style.transform = 'translate(-50%, -50%)';
		//linkButton12.style.marginTop = '10px';
		linkButton12.onclick = () => {
			window.open('https://github.com/vickykey02/Adventskalender/raw/main/assets/Yule_Spell.pdf', '_blank');
		};
		modal.appendChild(linkButton12);
	}

	const targetDate13 = new Date('2024-12-13');
	const currentDate13 = new Date(dateString);
	console.log(currentDate13.getTime(), targetDate13.getTime());
	console.log(dateString, today);


	if (currentDate13.getTime() === targetDate13.getTime()) {
		console.log('Das ist der 13. November');
		const linkButton13 = document.createElement('button');
		linkButton13.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton13.textContent = 'zum Artikel';
		linkButton13.onclick = () => {
			window.open('https://www.oxfam.de/blog/internationaler-frauentag-feminist-power', '_blank');
		};
		modal.appendChild(linkButton13);
	}

	const targetDate15 = new Date('2024-12-15');
	const currentDate15 = new Date(dateString);
	console.log(currentDate15.getTime(), targetDate15.getTime());
	console.log(dateString, today);


	if (currentDate15.getTime() === targetDate15.getTime()) {
		console.log('Das ist der 15. November');
		const linkButton15 = document.createElement('button');
		linkButton15.textContent = 'zum Video';
		linkButton15.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton15.onclick = () => {
			window.open('https://www.youtube.com/watch?v=vfKryPSMrFo', '_blank');
		};
		modal.appendChild(linkButton15);
	}

	const targetDate16 = new Date('2024-12-16');
	const currentDate16 = new Date(dateString);
	console.log(currentDate16.getTime(), targetDate16.getTime());
	console.log(dateString, today);


	if (currentDate16.getTime() === targetDate16.getTime()) {
		console.log('Das ist der 16. November');
		const linkButton16 = document.createElement('button');
		linkButton16.textContent = 'Link folgen';
		linkButton16.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton16.onclick = () => {
			window.open('https://share.chessbase.com/SharedGames/game/?p=Dx/dxlliODx7kwlLJwlgbjxptLVH4zQ2/CPyLlPj2wFHepLeutlGwTSoz5lbABaj', '_blank');
		};
		modal.appendChild(linkButton16);
	}

	const targetDate17 = new Date('2024-12-17');
	const currentDate17 = new Date(dateString);
	console.log(currentDate17.getTime(), targetDate17.getTime());
	console.log(dateString, today);


	if (currentDate17.getTime() === targetDate17.getTime()) {
		console.log('Das ist der 17. November');
		const linkButton17 = document.createElement('button');
		linkButton17.textContent = 'zum Video';
		linkButton17.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton17.onclick = () => {
			window.open('https://www.youtube.com/watch?v=Nhw92icsQ1A', '_blank');
		};
		modal.appendChild(linkButton17);
	}

	const targetDate18 = new Date('2024-12-18');
	const currentDate18 = new Date(dateString);
	console.log(currentDate18.getTime(), targetDate18.getTime());
	console.log(dateString, today);


	if (currentDate18.getTime() === targetDate18.getTime()) {
		console.log('Das ist der 18. November');
		const linkButton18 = document.createElement('button');
		linkButton18.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton18.textContent = 'zum Rezept';
		linkButton18.onclick = () => {
			window.open('https://github.com/vickykey02/Adventskalender/raw/main/assets/veganer_Weihnachtsbraten.pdf', '_blank');
		};
		modal.appendChild(linkButton18);
	}


	const targetDate19 = new Date('2024-12-19');
	const currentDate19 = new Date(dateString);
	console.log(currentDate19.getTime(), targetDate19.getTime());
	console.log(dateString, today);


	if (currentDate19.getTime() === targetDate19.getTime()) {
		console.log('Das ist der 19. November');
		const linkButton19 = document.createElement('gift-button');
		linkButton19.textContent = 'good news lesen';
		linkButton19.textContent.zIndex = '2001';
		linkButton19.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton19.onclick = () => {
			window.open('https://www.goodgoodgood.co/articles/lgbtq-good-news', '_blank');
		};
		modal.appendChild(linkButton19);
	}

	const targetDate23 = new Date('2024-12-23');
	const currentDate23 = new Date(dateString);
	console.log(currentDate23.getTime(), targetDate23.getTime());
	console.log(dateString, today);


	if (currentDate23.getTime() === targetDate23.getTime()) {
		console.log('Das ist der 23. November');
		const linkButton23 = document.createElement('button');
		linkButton23.textContent = 'zum Video';
		linkButton23.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton23.onclick = () => {
			window.open('https://www.youtube.com/watch?v=dOCt-Cj5w0g', '_blank');
		};
		modal.appendChild(linkButton23);
	}

	document.body.appendChild(modal);

	//hier dann noch rein dass Element erscheint hinter dem sich Spotifysong verbirgt
	const spotifyButton = document.createElement('gift-button');
	spotifyButton.classList.add('gift-button');
	const songs = [
		'https://open.spotify.com/intl-de/track/0FDDUGqjWtiT7OfJHBkAbY?si=e612137ed790431f', //Vorfreude 
		'https://open.spotify.com/intl-de/track/5a1iz510sv2W9Dt1MvFd5R?si=af1f0e3027804731', //beginning to look
		'https://open.spotify.com/intl-de/track/5hslUAKq9I9CG2bAulFkHN?si=049df4a679904cc4', //most wonderful time
		'https://open.spotify.com/intl-de/track/2uFaJJtFpPDc5Pa95XzTvg?si=9717fae71e884f08', //let it snow
		'https://open.spotify.com/intl-de/track/4xWXehhXrboBrvxXAqbAyi?si=3c4d4d0425514697', //Schneeflöckchen
		'https://open.spotify.com/intl-de/track/2L9QLAhrvtP4EYg1lY0Tnw?si=46ab8e89731047c3', //Rudolph
		'https://open.spotify.com/intl-de/track/2FRnf9qhLbvw8fu4IBXx78?si=2cd5362c6b2e41c0', //Last Christmas
		'https://open.spotify.com/intl-de/track/1GjQLnGAfpv3rWW1K9Ll8p?si=9669020c80514418', //Winter Wonderland
		'https://open.spotify.com/intl-de/track/0SvD6EdetxVtXei2JhkV4B?si=04d1141d44494ce4', //Wonderful Dream
		'https://open.spotify.com/intl-de/track/7uoFMmxln0GPXQ0AcCBXRq?si=a965414de1b8495f', //Snowman
		'https://open.spotify.com/intl-de/track/0eUHSIq91vjUZ9kCrrZCLm?si=3343fc21bb164c4f', //Kling Glöckchen
		'https://open.spotify.com/intl-de/track/5ASM6Qjiav2xPe7gRkQMsQ?si=66814b82fbb7413b', //Sleigh Ride
		'https://open.spotify.com/intl-de/track/3Z3QhZAZpqwZa1phsbQ3JZ?si=9c1a79912fd24680', //Driving Home
		'https://open.spotify.com/intl-de/track/4uJ9zP4Qxt1sPWP0sz8tAx?si=558448ead2cc4b07', //Es ist ein Ros
		'https://open.spotify.com/intl-de/track/7vbdSdW5YGowb3wBFLByGh?si=9462897e04914a17', //Band Aid
		'https://open.spotify.com/intl-de/track/0bYg9bo50gSsH3LtXe2SQn?si=b767d47a96884c3b', //All I want
		'https://open.spotify.com/intl-de/track/27RYrbL6S02LNVhDWVl38b?si=0d103ee8bd47473c', //Happy Xmas
		'https://open.spotify.com/intl-de/track/23J6hx7gTaL24aWMUKnDsK?si=043a940528fd4310', //Tausend Sterne
		'https://open.spotify.com/intl-de/track/5PuKlCjfEVIXl0ZBp5ZW9g?si=7739f990c04a42e8', //Holly Jolly Christmas
		'https://open.spotify.com/intl-de/track/2FPfeYlrbSBR8PwCU0zaqq?si=0389fe9cc673402d', //Have yourself 
		'https://open.spotify.com/intl-de/track/3j7Fv7GuiumnTX3QiFI52T?si=6e7d4ba854cf4a3a', //Maria Dornwald
		'https://open.spotify.com/intl-de/track/298BugTAHrP8aYobnxsisS?si=21197d0cb685493d', //Christmas Town Elf
		'https://open.spotify.com/intl-de/track/6AoXseJVabZFmKEYjQCXPS?si=1d60296b74f84566', //Born on this day
		'https://open.spotify.com/intl-de/track/0QtJZpyfZF67QF32p41NXa?si=710717848f1846dc', //Thank God it's Christmas
	];
	const dayIndex = new Date().getDate() - 1; // Get the current day index (0-based)
	const songUrl = songs[dayIndex % songs.length]; // Cycle through songs if more than available days
	spotifyButton.textContent = 'Song des Tages';
	spotifyButton.textContent.alignItems = 'center';
	spotifyButton.textContent.style = 'color: ffffff';
	spotifyButton.style.position = 'absolute';
	spotifyButton.style.right = '0';
	spotifyButton.style.top = '0';
	spotifyButton.style.backgroundColor = 'green';
	spotifyButton.onclick = () => {
		const spotifyIframe = document.createElement('iframe');
		spotifyIframe.src = songUrl;
		//spotifyIframe.width = '300';
		//spotifyIframe.height = '80';
		//spotifyIframe.frameBorder = '0';
		spotifyIframe.allow = 'encrypted-media';
		document.body.appendChild(spotifyIframe);
	};
	//document.body.appendChild(spotifyButton);
	modal.appendChild(spotifyButton);

	// Gehe durch alle gift-buttons im Dokument
	document.querySelectorAll('.gift-button').forEach(button => {
    	// Erzeuge die beiden Schleifen
    	const loop1 = document.createElement('span');
    	const loop2 = document.createElement('span');

    	// Füge die Schleifen als Kind-Elemente hinzu
    	button.appendChild(loop1);
    	button.appendChild(loop2);
	});
	document.body.appendChild(modal);
}
