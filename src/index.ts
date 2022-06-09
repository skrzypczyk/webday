/// <reference types="@workadventure/iframe-api-typings" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";



let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {

	WA.controls.disablePlayerProximityMeeting();

    WA.room.onEnterLayer('enigme1').subscribe(() => {
        let text = "Un prisonnier se trouve face à trois pièces et il est forcé d’entrer dans l’une des trois. \n\nMais… il peut choisir la pièce de son choix.\n"
				text +=	"- La première pièce brûle (porte du haut).\n"
				text +=	"- La deuxième est équipée d’explosifs qui exploseront dès qu’il entrera. (porte du milieu)\n"
				text +=	"- Dans la troisième se trouvent deux lions qui n’ont pas mangé depuis des années. (porte du bas) \n\n Quelle pièce le prisonnier doit-il choisir pour survivre ?";
        
        currentPopup = WA.ui.openPopup("enigme1Popup",text,[]);
    })

    WA.room.onLeaveLayer('enigme1').subscribe(closePopUp)


    WA.room.onEnterLayer('enigme2').subscribe(() => {
       let text = "Un ours marche 10 km vers le Sud, 10 vers l'Est et 10 vers le Nord, après tout ce chemin il revient à l'endroit duquel il est parti. De quelle couleur est l'ours ?\n\n"
		text +=	"- blanc\n"
		text +=	"- brun;\n"
		text +=	"- noir";
				     
        currentPopup = WA.ui.openPopup("enigme1Popup",text,[]);
    })

    WA.room.onLeaveLayer('enigme2').subscribe(closePopUp)


    WA.room.onEnterLayer('enigme3').subscribe(() => {
        let text = "Si je suis muet, aveugle et sourd, combien de sens me reste-t-il ?\n\n";
			text +=	"- 2 (porte de gauche)\n";
			text +=	"- 3 (porte du centre)\n";
			text +=	"- 5 (porte de droite)\n";
        currentPopup = WA.ui.openPopup("enigme1Popup",text,[]);
    })

    WA.room.onLeaveLayer('enigme3').subscribe(closePopUp)


    WA.room.onEnterLayer('enigme4').subscribe(() => {
        let text = "Soit la suite suivante :\n";
			text +=	"8 - 61 - 24 - 32 - X - 12\n\n";
			text +=	"23 ou 13 ou 44\n\n";
        currentPopup = WA.ui.openPopup("enigme2Popup",text,[]);
    })

    WA.room.onLeaveLayer('enigme4').subscribe(closePopUp)



    WA.room.onEnterLayer('enigme5').subscribe(() => {
        let text = "Un immeuble comporte trois étages. Plus l'étage est élevé, plus il y a d'occupants. A quel étage l’ascenseur s’arrêtera le plus souvent ?\n\n"
			text +=	"RDC\n";
			text +=	"1\n";
			text +=	"2\n";
        currentPopup = WA.ui.openPopup("enigme3Popup",text,[]);
    })

    WA.room.onLeaveLayer('enigme5').subscribe(closePopUp)



    WA.room.onEnterLayer('enigme6').subscribe(() => {
        let text = "Vous roulez en voiture par une nuit de tempête quand vous apercevez trois personnes en détresse sous un Abribus. Vous vous arrêtez et vous voyez : une femme qui pourrait être la femme de votre vie, le médecin qui a sauvé la vie de votre mère et une vieille dame qui doit être conduite d'urgence à l'hôpital. Mais, il n'y a qu'une place dans votre voiture. Qui emmenez-vous ?\n\n"
			text +=	"Femme de votre vie\n";
			text +=	"Medecin\n";
			text +=	"Vieille dame\n";
        currentPopup = WA.ui.openPopup("enigme3Popup",text,[]);
    })

    WA.room.onLeaveLayer('enigme6').subscribe(closePopUp)


 WA.room.onEnterLayer('enigme7').subscribe(() => {
        let text = "Quelle est la bonne réponse à cette question, dans la liste ci-dessous ?\n\n"
			text +=	"1. Tout ce qui suit.\n";
			text +=	"2. Aucune des réponses ci-dessous.\n";
			text +=	"3. Toutes les réponses ci-dessus.\n";
			text +=	"4. L’une des réponses ci-dessus.\n";
			text +=	"5. Aucune des réponses ci-dessus.\n";
			text +=	"6. Aucune des réponses ci-dessus.\n";

        currentPopup = WA.ui.openPopup("enigme2Popup",text,[]);
    })

    WA.room.onLeaveLayer('enigme7').subscribe(closePopUp)


 WA.room.onEnterLayer('lastEnigme').subscribe(() => {
        let text = "Trouve l'organisateur de ce hackathon et donne lui l'addition des positions de toutes les portes valides\n\n"

        currentPopup = WA.ui.openPopup("enigme4Popup",text,[]);
        WA.room.hideLayer("chessClose");
        WA.room.showLayer("chessOpen");

    })

    WA.room.onLeaveLayer('lastEnigme').subscribe(() => {
        WA.room.hideLayer("chessOpen");
        WA.room.showLayer("chessClose");
    	closePopUp();
    })

   

}).catch(e => console.error(e));


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};