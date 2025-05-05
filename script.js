// menu script start 

let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// menu script end

// light gallery script start 

lightGallery(document.querySelector('.gallery'));

// light gallery script end

// loader skript start 


function loader() {
    document.querySelector
    ('.loader-container').classList.add('active');
}

function fadeOut() {
    setTimeout(loader, 3000);
}

fadeOut();


// loader skript end