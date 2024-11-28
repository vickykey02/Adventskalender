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
	"2024-11-15": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag15.png",
	"2024-11-16": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag16.png",
	"2024-11-17": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag17.png",
	"2024-11-18": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag18.png",
	"2024-11-19": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag19.png",
	"2024-11-20": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag20.png",
	"2024-11-21": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag21.png",
	"2024-11-22": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag22.png",
	"2024-11-23": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag23.png",
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
	//closeButton.textContent = 'Close';
	closeButton.title = 'Close';
	closeButton.classList.add('button'); // Klasse aus CSS hinzufügen
	closeButton.textContent = 'zurück';
	closeButton.style.zIndex = '1001'; // Schrift eine Ebene nach vorn schieben
	//closeButton.style.marginTop = '10px';
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
		//linkButton3.style.marginTop = '10px';
		linkButton3.classList.add('button2'); // Klasse aus CSS hinzufügen
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
		linkButton7.innerHTML = `<p>zum Lesestoff</p>`; // Text als separates HTML-Element
		linkButton7.innerHTML.zIndex = '1000';
		//linkButton7.textContent = 'zum Lesestoff';
		//linkButton7.textContent.zIndex = '1000';
		//linkButton7.style.marginTop = '';//statt 10px
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
		//linkButton10.style.marginTop = '10px';
		linkButton10.classList.add('button2'); // Klasse aus CSS hinzufügen
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
		linkButton12.textContent = 'zum Rezept';
		linkButton12.style.position = 'absolute';
		linkButton12.style.top = '50%';
		linkButton12.style.left = '50%';
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
		linkButton13.textContent = 'Link folgen';
		//linkButton3.style.marginTop = '10px';
		linkButton13.classList.add('button2'); // Klasse aus CSS hinzufügen
		linkButton13.onclick = () => {
			window.open('https://www.oxfam.de/blog/internationaler-frauentag-feminist-power', '_blank');
		};
		modal.appendChild(linkButton13);
	}
	document.body.appendChild(modal);

	//hier dann noch rein dass Element erscheint hinter dem sich Spotifysong verbirgt
	const spotifyButton = document.createElement('button');
	spotifyButton.style.position = 'absolute';
	spotifyButton.style.bottom = '10px';
	spotifyButton.style.right = '10px';
	const songs = [
		'https://open.spotify.com/intl-de/track/0FDDUGqjWtiT7OfJHBkAbY?si=e612137ed790431f',
		//'https://open.spotify.com/intl-de/track/6rqhFgbbKwnb9MLmUQDhG6?si=1234567890abcdef',
		//'https://open.spotify.com/intl-de/track/7GhIk7Il098yCjg4BQjzvb?si=abcdef1234567890',
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
	document.body.appendChild(spotifyButton);
}
