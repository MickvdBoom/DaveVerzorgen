// Dit zijn al mijn knoppen
const Trainknop = document.querySelector("#Train")
const Aaiknop = document.querySelector("#Aai")
const GeefEtenKnop = document.querySelector("#GeefEten")
const StartSpelKnop = document.querySelector("#SpelStart")

// Dit zijn mijn variabele getallen
let Fitheid = 50
let Vrolijkheid = 50
let Eten = 50
let updateStatus = document.querySelector ("h2")
let davePlaatje = document.querySelector ("img")
let TrainVeld = document.querySelector("#FitheidWaarde")
let AaiVeld = document.querySelector("#VrolijkheidWaarde")
let GeefEtenVeld = document.querySelector("#EtenWaarde")
let audio = new Audio('geluiden/rip-dave.mp3')

// Deze functie groet de gebruiker
function groet(gebruiker) {
    console.log("Hallo " + gebruiker + "! Ik ben Dave.")
}
groet("Mick")

// Deze functie verhoogd de waarde van Dave zijn fitheid
function verhoogFitheid() {
    Fitheid = Fitheid + 5
    updateFitheid()
}

// Deze functie verhoogd de waarde van Dave zijn vrolijkheid
function verhoogVrolijkheid() {
    Vrolijkheid = Vrolijkheid + 5
    updateVrolijkheid()
}

// Deze functie verhoogd de waarde van Dave zijn eten
function verhoogEten() {
    Eten = Eten + 5
    updateEten ()
}

// Deze functie update de waarde van Dave zijn fitheid
function updateFitheid() {
    console.log("getal: " + Fitheid)
    TrainVeld.textContent = Fitheid
}

// Deze functie update de waarde van Dave zijn vrolijkheid
function updateVrolijkheid() {
    console.log("getal: " + Vrolijkheid)
    AaiVeld.textContent = Vrolijkheid
}

// Deze functie update de waarde van Dave zijn eten
function updateEten() {
    console.log("getal: " + Eten)
    GeefEtenVeld.textContent = Eten
}

// Deze functie verlaagd de waarde van Dave zijn fitheid
function verlaagFitheid() {
    Fitheid = Fitheid - 1
    setTimeout(verlaagFitheid, 1000)
    updateFitheid ()
}
/*Bron voor code: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously*/

// Deze functie verlaagd de waarde van Dave zijn vrolijkheid
function verlaagVrolijkheid() {
    Vrolijkheid = Vrolijkheid - 1
    setTimeout(verlaagVrolijkheid, 1000)
    updateVrolijkheid ()
}
/*Bron voor code: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously*/

// Deze function verlaagd de waarde van Dave zijn vrolijkheid
function verlaagEten() {
    Eten = Eten - 1
    setTimeout(verlaagEten, 1000)
    updateEten ()
}
/*Bron voor code: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously*/

// Deze functie checkt de status van dave en verteld de gebruiker wat hij moet doen
function checkStatus() {
    if (Fitheid, Vrolijkheid, Eten > 20){
    console.log("Goed bezig! Dave is blij!")
    updateStatus.textContent = "Goed bezig! Dave is blij!"
    davePlaatje.src = "afbeeldingen/super-blije-dave.jpeg"
    }

    else if ((Fitheid, Vrolijkheid, Eten <= 20) && (Fitheid, Vrolijkheid, Eten > 0)){
    console.log("Let op! Je moet beter voor Dave zorgen!")
    updateStatus.textContent = "Let op! Je moet beter voor Dave zorgen!"
    davePlaatje.src = "afbeeldingen/Tamagochi-standaard-foto.png"
    }

    else if (Fitheid, Vrolijkheid, Eten < 1){
    console.log("Oh nee! Dave is overleden :(")
    updateStatus.textContent = "Oh nee! Dave is overleden :("
    davePlaatje.src = "afbeeldingen/RIP-Dave.png"
    audio.play()
    }

    setTimeout(checkStatus, 1000)
}
/*Bron voor code: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously*/
/*Bron voor code: https://stackoverflow.com/questions/9419263/how-to-play-audio*/


// Deze functie laat het spel starten en verwijderd de start knop
function startSpel() {
    verlaagFitheid ()
    verlaagVrolijkheid ()
    verlaagEten ()
    checkStatus ()
    StartSpelKnop.remove()
}

// Dit zijn mijn knoppen
Trainknop.addEventListener('click', verhoogFitheid)
Aaiknop.addEventListener('click', verhoogVrolijkheid)
GeefEtenKnop.addEventListener('click', verhoogEten)
StartSpelKnop.addEventListener('click', startSpel)