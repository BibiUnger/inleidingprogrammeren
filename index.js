console.log("Hallo")

const kattenFoto = document.querySelector("#kat")
const bar = document.querySelector("#bar")

const tekst = document.querySelector("h1")

const audio = document.querySelector("#audio")

const startKnop = document.querySelector("#start")
const resetKnop = document.querySelector("#reset")
const eetKnop = document.querySelector("#eten")
const slaapKnop = document.querySelector("#slapen")
const speelKnop = document.querySelector("#spelen")
const boosKnop = document.querySelector("#boos")

let score = 1


//https://www.w3schools.com/tags/av_met_play.asp
function speelAudio() {
    audio.play()
}

//starten met de tamagotchi met startknop
function start() {
    eetKnop.style.display = "inline"
    slaapKnop.style.display = "inline"
    speelKnop.style.display = "inline"
    boosKnop.style.display = "inline"
    bar.style.display = "block"
    startKnop.style.display = "none"
    speelAudio()
}


//kat laten slapen
function katSlapen() {
    kattenFoto.src = "broesslaap.png"
    tekst.textContent = 'Welterusten Broes!'
    score ++
    updateBar()
}



//kat laten eten
function katEten() {
    kattenFoto.src = "broeseet.png"
    tekst.textContent = 'Hmm!'
    score ++
    updateBar()
}



//kat laten spelen
function katSpelen() {
    kattenFoto.src = "broesspeel2.png"
    tekst.textContent = 'Dat vindt Broes leuk!'
    score ++
    updateBar()
}



//kat boos maken
function katBoos() {
    kattenFoto.src = "broesboos.png"
    tekst.textContent = 'Dat vindt Broes niet leuk!'
    score --
    updateBar()
}


//https://www.w3schools.com/jsref/met_loc_reload.asp
function resetPage() {
    location.reload()
}




//-------- Progress bar met hulp van Milo Rademaker -----
function updateBar() {
    if (score == 0) {
        tekst.textContent = 'Game Over'
        bar.src = "bar0.png"
        kattenFoto.src = "broessad.png"
        eetKnop.style.display = "none"
        slaapKnop.style.display = "none"
        speelKnop.style.display = "none"
        boosKnop.style.display = "none"
        resetKnop.style.display = "inline"
        audio.src = "angrymeow.mp3"
        speelAudio()
    }
    if (score == 1) {
        bar.src = "bar25.png"
    }
    if (score == 2) {
        bar.src = "bar50.png"
    }
    if (score == 3) {
        bar.src = "bar75.png"
    }
    if (score == 4) {
        bar.src = "bar100.png"
        tekst.textContent = 'Broes is blij!'
        kattenFoto.src = "broeshappy.png"
        eetKnop.style.display = "none"
        slaapKnop.style.display = "none"
        speelKnop.style.display = "none"
        boosKnop.style.display = "none"
        resetKnop.style.display = "inline"
        audio.src = "happymeow.mp3"
        speelAudio()
    }
}
//-----

startKnop.addEventListener('click', start)

slaapKnop.addEventListener('click', katSlapen)

eetKnop.addEventListener('click', katEten)

speelKnop.addEventListener('click', katSpelen)

boosKnop.addEventListener('click', katBoos)

resetKnop.addEventListener('click', resetPage)

//https://www.w3schools.com/jsref/prop_style_display.asp 
eetKnop.style.display = "none"
slaapKnop.style.display = "none"
speelKnop.style.display = "none"
boosKnop.style.display = "none"
resetKnop.style.display = "none"
bar.style.display = "none"

