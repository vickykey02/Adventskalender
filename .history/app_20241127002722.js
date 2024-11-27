// Generiere die Kalender-Türchen
const calendar = document.querySelector('.calendar');
const today = new Date().toISOString().split('T')[0]; // Heutiges Datum im Format YYYY-MM-DD

// Inhalte für die Tage
const days = {
    "2024-11-30": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag1.png",
	"2024-12-01": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag2.png",
	"2024-12-02": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag3.png",
	"2024-11-03": "C:/Users/vicky/Documents/Projekte/Adventskalender/assets/Tag4.png",
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
}
