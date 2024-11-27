// Generiere die Kalender-Türchen
const calendar = document.querySelector('.calendar');
const today = new Date().toISOString().split('T')[0]; // Heutiges Datum im Format YYYY-MM-DD

// Inhalte für die Tage
const days = {
    "2024-11-12": "Adventskalender/assets/Test.webpp",
    "2024-11-13": "Adventskalender/assets/Tag14.png", //"path/to/image2.png",
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
    alert(`Inhalt für heute: ${content}`); // Später ersetzen mit Modal oder Popup
}
