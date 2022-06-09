let o;WA.onInit().then(()=>{WA.controls.disablePlayerProximityMeeting(),WA.room.onEnterLayer("enigme1").subscribe(()=>{let e=`Un prisonnier se trouve face \xE0 trois pi\xE8ces et il est forc\xE9 d\u2019entrer dans l\u2019une des trois. 

Mais\u2026 il peut choisir la pi\xE8ce de son choix.
`;e+=`- La premi\xE8re pi\xE8ce br\xFBle (porte du haut).
`,e+=`- La deuxi\xE8me est \xE9quip\xE9e d\u2019explosifs qui exploseront d\xE8s qu\u2019il entrera. (porte du milieu)
`,e+=`- Dans la troisi\xE8me se trouvent deux lions qui n\u2019ont pas mang\xE9 depuis des ann\xE9es. (porte du bas) 

 Quelle pi\xE8ce le prisonnier doit-il choisir pour survivre ?`,o=WA.ui.openPopup("enigme1Popup",e,[])}),WA.room.onLeaveLayer("enigme1").subscribe(n),WA.room.onEnterLayer("enigme2").subscribe(()=>{let e=`Un ours marche 10 km vers le Sud, 10 vers l'Est et 10 vers le Nord, apr\xE8s tout ce chemin il revient \xE0 l'endroit duquel il est parti. De quelle couleur est l'ours ?

`;e+=`- blanc
`,e+=`- brun;
`,e+="- noir",o=WA.ui.openPopup("enigme1Popup",e,[])}),WA.room.onLeaveLayer("enigme2").subscribe(n),WA.room.onEnterLayer("enigme3").subscribe(()=>{let e=`Si je suis muet, aveugle et sourd, combien de sens me reste-t-il ?

`;e+=`- 2 (porte de gauche)
`,e+=`- 3 (porte du centre)
`,e+=`- 5 (porte de droite)
`,o=WA.ui.openPopup("enigme1Popup",e,[])}),WA.room.onLeaveLayer("enigme3").subscribe(n),WA.room.onEnterLayer("enigme4").subscribe(()=>{let e=`Soit la suite suivante :
`;e+=`8 - 61 - 24 - 32 - X - 12

`,e+=`23 ou 13 ou 44

`,o=WA.ui.openPopup("enigme2Popup",e,[])}),WA.room.onLeaveLayer("enigme4").subscribe(n),WA.room.onEnterLayer("enigme5").subscribe(()=>{let e=`Un immeuble comporte trois \xE9tages. Plus l'\xE9tage est \xE9lev\xE9, plus il y a d'occupants. A quel \xE9tage l\u2019ascenseur s\u2019arr\xEAtera le plus souvent ?

`;e+=`RDC
`,e+=`1
`,e+=`2
`,o=WA.ui.openPopup("enigme3Popup",e,[])}),WA.room.onLeaveLayer("enigme5").subscribe(n),WA.room.onEnterLayer("enigme6").subscribe(()=>{let e=`Vous roulez en voiture par une nuit de temp\xEAte quand vous apercevez trois personnes en d\xE9tresse sous un Abribus. Vous vous arr\xEAtez et vous voyez : une femme qui pourrait \xEAtre la femme de votre vie, le m\xE9decin qui a sauv\xE9 la vie de votre m\xE8re et une vieille dame qui doit \xEAtre conduite d'urgence \xE0 l'h\xF4pital. Mais, il n'y a qu'une place dans votre voiture. Qui emmenez-vous ?

`;e+=`Femme de votre vie
`,e+=`Medecin
`,e+=`Vieille dame
`,o=WA.ui.openPopup("enigme3Popup",e,[])}),WA.room.onLeaveLayer("enigme6").subscribe(n),WA.room.onEnterLayer("enigme7").subscribe(()=>{let e=`Quelle est la bonne r\xE9ponse \xE0 cette question, dans la liste ci-dessous ?

`;e+=`1. Tout ce qui suit.
`,e+=`2. Aucune des r\xE9ponses ci-dessous.
`,e+=`3. Toutes les r\xE9ponses ci-dessus.
`,e+=`4. L\u2019une des r\xE9ponses ci-dessus.
`,e+=`5. Aucune des r\xE9ponses ci-dessus.
`,e+=`6. Aucune des r\xE9ponses ci-dessus.
`,o=WA.ui.openPopup("enigme2Popup",e,[])}),WA.room.onLeaveLayer("enigme7").subscribe(n),WA.room.onEnterLayer("lastEnigme").subscribe(()=>{let e=`Trouve l'organisateur de ce hackathon et donne lui l'addition des positions de toutes les portes valides

`;o=WA.ui.openPopup("enigme4Popup",e,[]),WA.room.hideLayer("chessClose"),WA.room.showLayer("chessOpen")}),WA.room.onLeaveLayer("lastEnigme").subscribe(()=>{WA.room.hideLayer("chessOpen"),WA.room.showLayer("chessClose"),n()})}).catch(e=>console.error(e));function n(){o!==void 0&&(o.close(),o=void 0)}
