const search = document.querySelector('.search');
const icon = document.querySelector('.icon');

icon.onclick = function() {
    search.classList.toggle('active')
}

// -----------
const url = 'https://poki.com.br/g/subway-surfers?campaign=14345571062&adgroup=129035160471&extensionid=&targetid=aud-1966070259771:dsa-1408254915829&location=9101562&matchtype=&network=g&device=c&devicemodel=&creative=604135175923&keyword=&placement=&target=&gclid=Cj0KCQjwqNqkBhDlARIsAFaxvwyA4uU8rVUXMD-gUB2L-4dqbRPopIMp2K7gmmSwx3iDFIyrRjC5c7gaAhhIEALw_wcB';
const sub = document.querySelector('#sub');

function openInNewTab(url) {
    const win = window.open(url, 'blank');
    win.focus();
}

sub.addEventListener('click', () => {
    openInNewTab(url);
})

//-----------
const sonic = 'https://www.allsonicgames.net/';
const son = document.querySelector('#son');

function openInNewTab(sonic) {
    const win = window.open(sonic, 'blank');
    win.focus();
}

son.addEventListener('click', () => {
    openInNewTab(sonic);
})

//-----------

const gumball = 'https://www.cartoonnetwork.co.uk/show/gumball/games';
const gum = document.querySelector('#gum');

function openInNewTab(gumball) {
    const win = window.open(gumball, 'blank');
    win.focus();
}

gum.addEventListener('click', () => {
    openInNewTab(gumball);
})

//-----------

const bemdez = 'https://www.cartoonnetwork.com.br/show/ben-10/jogos';
const bem = document.querySelector('#bem');

function openInNewTab(bemdez) {
    const win = window.open(bemdez, 'blank');
    win.focus();
}

bem.addEventListener('click', () => {
    openInNewTab(bemdez);
})

//---------
const pikachu = 'https://www.clickjogos.com.br/jogos-do-pokemon/pokemon-pikachu';
const pik = document.querySelector('#pik');

function openInNewTab(pikachu) {
    const win = window.open(pikachu, 'blank');
    win.focus();
}

pik.addEventListener('click', () => {
    openInNewTab(pikachu);
})

//----------
const aranha = 'https://www.clickjogos.com.br/jogos-do-homem-aranha/spiderman-gold-miner';
const ara = document.querySelector('#ara');

function openInNewTab(aranha) {
    const win = window.open(aranha, 'blank');
    win.focus();
}

ara.addEventListener('click', () => {
    openInNewTab(aranha);
})

//---------
const bobesponja = 'https://www.clickjogos.com.br/busca/bob%20esponja';
const bob = document.querySelector('#bob');

function openInNewTab(bobesponja) {
    const win = window.open(bobesponja, 'blank');
    win.focus();
}

bob.addEventListener('click', () => {
    openInNewTab(bobesponja);
})

//--------
const naruto = 'https://www.clickjogos.com.br/busca/naruto';
const nar = document.querySelector('#nar');

function openInNewTab(naruto) {
    const win = window.open(naruto, 'blank');
    win.focus();
}

nar.addEventListener('click', () => {
    openInNewTab(naruto);
})

//--------
const barbie = 'https://www.clickjogos.com.br/busca/barbie';
const bar = document.querySelector('#bar');

function openInNewTab(barbie) {
    const win = window.open(barbie, 'blank');
    win.focus();
}

bar.addEventListener('click', () => {
    openInNewTab(barbie);
})