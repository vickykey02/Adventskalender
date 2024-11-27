// Generiere die Kalender-Türchen
const calendar = document.querySelector('.calendar');
const today = new Date().toISOString().split('T')[0]; // Heutiges Datum im Format YYYY-MM-DD

// Inhalte für die Tage
const days = {
    "2024-10-31": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag1.png",
	"2024-12-01": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag2.png",
	"2024-12-02": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag3.png",
	"2024-12-03": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag4.png",
	"2024-12-04": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag5.png",
	"2024-12-05": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag6.png",
	"2024-12-06": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag7.png",
	"2024-12-07": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag8.png",
	"2024-12-08": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag9.png",
	"2024-12-09": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag10.png",
	"2024-12-10": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag11.png",
	"2024-12-11": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag12.png",
	"2024-12-12": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag13.png",
    "2024-12-13": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag14.png", 
	"2024-12-14": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag15.png",
	"2024-12-15": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag16.png",
	"2024-12-16": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag17.png",
	"2024-12-17": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag18.png",
	"2024-12-18": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag19.png",
	"2024-12-19": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag20.png",
	"2024-12-20": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag21.png",
	"2024-12-21": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag22.png",
	"2024-12-22": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag23.png",
	"2024-12-23": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag24.png",

};

// Funktion: Türchen anzeigen
for (let i = 1; i <= 24; i++) {
	//const today = new Date().toISOString().split('T')[0];
	const today = new Date().toLocaleDateString('en-CA'); // Format YYYY-MM-DD
    const day = document.createElement('div');
    day.classList.add('day');
    const date = new Date(new Date().getFullYear(), 10, i); // i-tes Datum des Jahres
    const dateString = date.toISOString().split('T')[0];

    if (dateString in days) {
        if (dateString <= today) {
            day.classList.add('opened');
            day.onclick = () => showContent(days[dateString]);
        } else {
            day.classList.add('locked');
        }
    }

    day.textContent = date.getDate();
    calendar.appendChild(day);
}

// Funktion: Inhalt anzeigen
function showContent(content) {
    //alert(`Inhalt für heute: ${content}`); // Später ersetzen mit Modal oder Popup
	onclick = window.open(content);
	const contentContainer = document.createElement('div');
	document.querySelectorAll('.day').forEach(day => {
		day.addEventListener('click', () => {
			if (day.classList.contains('opened')) {
				day.style.transition = 'transform 4.5s';
				day.style.transform = 'rotateY(180deg)';
			}
		});
	});
	contentContainer.style.position = 'relative';
	contentContainer.style.width = '100%';
	contentContainer.style.height = '100%';
	contentContainer.style.backgroundImage = `url(${content})`;
	contentContainer.style.backgroundSize = 'cover';
	contentContainer.style.backgroundPosition = 'center';
	contentContainer.style.transition = 'transform 0.5s';
	contentContainer.style.transform = 'rotateY(180deg)';

	const door = document.createElement('div');
	door.style.position = 'absolute';
	door.style.width = '100%';
	door.style.height = '100%';
	door.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
	door.style.transition = 'transform 0.5s';
	door.style.transformStyle = 'preserve-3d';
	door.style.transform = 'rotateY(0deg)';
	door.onclick = () => {
		door.style.transform = 'rotateY(180deg)';
		setTimeout(() => {
			door.style.display = 'none';
		}, 2500);
	};

	contentContainer.appendChild(door);
	document.body.appendChild(contentContainer);

	const spotifyButton = document.createElement('button');
	spotifyButton.style.position = 'absolute';
	spotifyButton.style.bottom = '10px';
	spotifyButton.style.right = '10px';
	const songs = [
		'https://open.spotify.com/intl-de/track/0FDDUGqjWtiT7OfJHBkAbY?si=e612137ed790431f',
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
	contentContainer.appendChild(spotifyButton);
	//hier dann noch rein dass Element erscheint hinter dem sich Spotifysong verbirgt
	/*const spotifyButton = document.createElement('button');
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
	document.body.appendChild(spotifyButton);*/
}
