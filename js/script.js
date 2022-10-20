// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// MILESTONE 0: X
// Creare l’array di oggetti con le informazioni fornite.
//MILESTONE 1: X
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2: X
// Stampare le stesse informazioni su DOM sottoforma di stringhe
//BONUS 1: X
// Trasformare la stringa foto in una immagine effettiva
//BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.

//creo array con dentro oggetti da consegna
const ourTeams = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }


]

console.log(ourTeams);

//stampo su console log i dati degli oggetti in array
for (const iterator of ourTeams) {
    iterator.nome
    iterator.ruolo
    iterator.foto
    console.log(iterator.nome, iterator.ruolo, iterator.foto);
}


//stampo i dati degli oggetti in array sul DOM 
const teamsRow = document.querySelector(".row");
for (let i = 0; i < ourTeams.length; i++) {
    const currentTeams = ourTeams[i];
    teamsRow.innerHTML += `
        <div class="card">
            <img src="immagini/img/${currentTeams.foto}" alt=""> 
            <h2>${currentTeams.nome}</h2>
            <p>${currentTeams.ruolo}</p>
        </div>
    `;
}
// JAVASASSONE ヾ(⌐■_■)ノ♪🗿