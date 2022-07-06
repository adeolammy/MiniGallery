let current = document.querySelector('#current');
let current_p = document.querySelector('#current_p');
let imgs = document.querySelectorAll('.imgs img ');
let opacity = 0.6;

imgs[0].style.opacity = opacity

imgs.forEach(img => img.addEventListener('click', mouseMove));

function mouseMove(e) {

    imgs.forEach(img => (img.style.opacity = 1))

    // when clicked it ll change the image in #current 
    current.src = e.target.src;
        // current_p.p = e.target.p;


// add fade opacity to opacity var
current.classList.add('fade-in');

setTimeout(()=> current.classList.remove('fade-in'),300);


// cahnge the opacity var
e.target.style.opacity = opacity

}