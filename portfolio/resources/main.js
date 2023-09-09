let painikeVari = document.getElementById('nappi');
let taustaVari = document.getElementById('tausta');

function vaihdaPainikeVari() {
    painikeVari.style.backgroundColor = 'blue';
    painikeVari.innerHTML = 'uusi teksti';
}

function palautaPainikeVari() {
    painikeVari.style.backgroundColor = 'white';
    painikeVari.innerHTML = 'resetoitu';
}

function vaihdaTaustaVari() {
    taustaVari.style.backgroundColor = 'blue';

}

function palautaTaustaVari() {
    taustaVari.style.backgroundColor = 'white';
    
}

painikeVari.addEventListener('mousedown', vaihdaPainikeVari);
painikeVari.addEventListener('mouseleave', palautaPainikeVari);

taustaKari.addEventListener('mousedown', vaihdaTaustaVari);
taustaKari.addEventListener('mousedown', palautaTaustaVari);