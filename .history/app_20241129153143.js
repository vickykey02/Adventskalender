// Generiere die Kalender-Türchen
const calendar = document.querySelector('.calendar');
const today = new Date().toISOString().split('T')[0]; // Heutiges Datum im Format YYYY-MM-DD

// Inhalte für die Tage
const days = {
    "2024-11-01": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag1.png",
	"2024-11-02": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag2.png",
	"2024-11-03": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag3.png",
	"2024-11-04": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag4.png",
	"2024-11-05": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag5.png",
	"2024-11-06": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag6.png",
	"2024-11-07": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag7.png",
	"2024-11-08": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag8.png",
	"2024-11-09": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag9.png",
	"2024-11-10": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag10.png",
	"2024-11-11": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag11.png",
	"2024-11-12": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag12.png",
	"2024-11-13": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag13.png",
    "2024-11-14": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag14.png", 
	"2024-11-15": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag15.png",
	"2024-11-16": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag16.png",
	"2024-11-17": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag17.png",
	"2024-11-18": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag18.png",
	"2024-11-19": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag19.png",
	"2024-11-20": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag20.png",
	"2024-11-21": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag21.png",
	"2024-11-22": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag22.png",
	"2024-11-23": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag23.png",
	"2024-11-24": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag24.png",

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



// Funktion: Inhalt anzeigen
function showContent(content, dateString) {
    //alert(`Inhalt für heute: ${content}`); // Später ersetzen mit Modal oder Popup
	const modal = document.createElement('div');
	modal.style.position = 'fixed';
	modal.style.top = '50%';
	modal.style.left = '50%';
	modal.style.transform = 'translate(-50%, -50%)';
	modal.style.backgroundColor = 'white';
	modal.style.padding = '20px';
	modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
	modal.style.zIndex = '1000';
	modal.style.maxHeight = '80%';
	modal.style.overflowY = 'auto';

	const img = document.createElement('img');
	img.src = content;
	img.style.maxWidth = '100%';
	img.style.height = 'auto';
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

	const targetDate3 = new Date('2024-11-03');
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

	const targetDate7 = new Date('2024-11-07');
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

	const targetDate9 = new Date('2024-11-09');
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

	const targetDate10 = new Date('2024-11-10');
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

	const targetDate12 = new Date('2024-11-12');
	const currentDate12 = new Date(dateString);
	console.log(currentDate12.getTime(), targetDate12.getTime());
	console.log(dateString, today);


	if (currentDate12.getTime() === targetDate12.getTime()) {
		console.log('Das ist der 12. November');
		const linkButton12 = document.createElement('button');
		linkButton12.classList.add('gift-button'); // Klasse aus CSS hinzufügen
		linkButton12.textContent = 'zur Anleitung';
		linkButton12.style.transform = 'translate(-50%, -50%)';
		linkButton12.style.marginTop = '10px';
		linkButton12.onclick = () => {
			window.open('https://github.com/vickykey02/Adventskalender/raw/main/assets/Yule_Spell.pdf', '_blank');
		};
		modal.appendChild(linkButton12);
	}

	const targetDate13 = new Date('2024-11-13');
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

	const targetDate15 = new Date('2024-11-15');
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

	const targetDate19 = new Date('2024-11-19');
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

	const targetDate23 = new Date('2024-11-23');
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
	const spotifyButton = document.createElement('button2');
	spotifyButton.classList.add('button2');
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
		'https://open.spotify.com/intl-de/track/4xWXehhXrboBrvxXAqbAyi?si=3c4d4d0425514697', //Schneeflöckchen
		'https://open.spotify.com/intl-de/track/4xWXehhXrboBrvxXAqbAyi?si=3c4d4d0425514697', //Schneeflöckchen
		'https://open.spotify.com/intl-de/track/4xWXehhXrboBrvxXAqbAyi?si=3c4d4d0425514697', //Schneeflöckchen
		'https://open.spotify.com/intl-de/track/4xWXehhXrboBrvxXAqbAyi?si=3c4d4d0425514697', //Schneeflöckchen
		'https://open.spotify.com/intl-de/track/4xWXehhXrboBrvxXAqbAyi?si=3c4d4d0425514697', //Schneeflöckchen
		// Add more song URLs here for each day
	];
	const dayIndex = new Date().getDate() - 1; // Get the current day index (0-based)
	const songUrl = songs[dayIndex % songs.length]; // Cycle through songs if more than available days
	spotifyButton.textContent = 'Play Spotify Song';
	spotifyButton.onclick = () => {
		const spotifyIframe = document.createElement('iframe');
		spotifyIframe.src = songUrl;
		spotifyIframe.width = '300';
		spotifyIframe.height = '80';
		spotifyIframe.frameBorder = '0';
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

}
