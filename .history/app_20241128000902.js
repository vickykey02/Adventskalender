// Generiere die Kalender-Türchen
const calendar = document.querySelector('.calendar');
const today = new Date().toISOString().split('T')[0]; // Heutiges Datum im Format YYYY-MM-DD

// Inhalte für die Tage
const days = {
    "2024-11-01": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag1.png",
	"2024-11-02": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag2.png",
	"2024-11-03": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag3.png",
	"2024-11-04": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag4.png",
	"2024-11-05": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag5.png",
	"2024-11-06": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag6.png",
	"2024-11-07": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag7.png",
	"2024-11-08": "https://github.com/vickykey02/Adventskalender/raw/main/assets/Tag8.png",
	"2024-11-09": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag9.png",
	"2024-11-10": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag10.png",
	"2024-11-11": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag11.png",
	"2024-11-12": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag12.png",
	"2024-11-13": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag13.png",
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
	closeButton.textContent = 'Close';
	closeButton.style.marginTop = '10px';
	closeButton.onclick = () => {
		document.body.removeChild(modal);
	};
	modal.appendChild(closeButton);

	const targetDate = new Date('2024-11-03');
	const currentDate = new Date(dateString);
	console.log(currentDate.getTime(), targetDate.getTime());
	console.log(dateString, today);


	if (currentDate.getTime() === targetDate.getTime()) {
		console.log('Das ist der 3. November');
		const linkButton = document.createElement('button');
		linkButton.textContent = 'Link folgen';
		linkButton.style.marginTop = '10px';
		linkButton.onclick = () => {
			window.open('https://share.chessbase.com/SharedGames/game/?p=Dx/dxlliODx7kwlLJwlgbjxptLVH4zQ2/CPyLlPj2wFHepLeutlGwTSoz5lbABaj', '_blank');
		};
		modal.appendChild(linkButton);
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
