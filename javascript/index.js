console.log("Welkom!")

var Fitheid = 50
var Vrolijkheid = 50
var Eten = 50
var audio = new Audio('geluiden/rip-dave.mp3')

const Trainknop = document.querySelector("#Train")
const Aaiknop = document.querySelector("#Aai")
const GeefEtenKnop = document.querySelector("#GeefEten")
const StartSpelKnop = document.querySelector("#SpelStart")


let updateStatus = document.querySelector ("h2")
let davePlaatje = document.querySelector ("img")

var TrainVeld = document.querySelector("#FitheidWaarde")
var AaiVeld = document.querySelector("#VrolijkheidWaarde")
var GeefEtenVeld = document.querySelector("#EtenWaarde")

function groet(gebruiker) {
    console.log("Hallo " + gebruiker + "! Ik ben Dave.");
}

groet("Mick")

function verhoogFitheid(){
    Fitheid = Fitheid + 5
    updateFitheid()
}

function verhoogVrolijkheid() {
    Vrolijkheid = Vrolijkheid + 5
    updateVrolijkheid()
}

function verhoogEten(){
    Eten = Eten + 5
    updateEten ()
}

function updateFitheid (){
    console.log("getal: " + Fitheid)
    TrainVeld.textContent = Fitheid
}

function updateVrolijkheid (){
    console.log("getal: " + Vrolijkheid)
    AaiVeld.textContent = Vrolijkheid
}

function updateEten (){
    console.log("getal: " + Eten)
    GeefEtenVeld.textContent = Eten
}

function verlaagFitheid (){
    Fitheid = Fitheid - 1
    setTimeout(verlaagFitheid, 1000)
    updateFitheid ()
}
/*Bron voor code: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously*/

function verlaagVrolijkheid (){
    Vrolijkheid = Vrolijkheid - 1
    setTimeout(verlaagVrolijkheid, 1000)
    updateVrolijkheid ()
}
/*Bron voor code: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously*/

function verlaagEten (){
    Eten = Eten - 1
    setTimeout(verlaagEten, 1000)
    updateEten ()
}
/*Bron voor code: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously*/

function checkStatus (){
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

function startSpel () {
    verlaagFitheid ()
    verlaagVrolijkheid ()
    verlaagEten ()
    checkStatus ()
}

function verberg () {

}

Trainknop.addEventListener('click', verhoogFitheid)
Aaiknop.addEventListener('click', verhoogVrolijkheid)
GeefEtenKnop.addEventListener('click', verhoogEten)
StartSpelKnop.addEventListener('click', startSpel)