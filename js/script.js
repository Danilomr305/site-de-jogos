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
    openInNewTab(url)
})
