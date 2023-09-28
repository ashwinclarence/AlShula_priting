// menu icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });


    // sticky navbar
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove menu icon navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// dark light Mode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}


// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .product-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//show contact deatils in first page
function display(val) {
 var snd = new Audio('Typing-Sound-effect.mp3')
 var snd1 = new Audio('Typing-Sound-effect1.mp3')
 var snd2 = new Audio('Typing-Sound-effect2.mp3')//wav is also supported
    //var x1 = document.getElementById("dis1");
    var x2 = document.getElementById("dis2");
    var x3 = document.getElementById("dis3");
    var x4 = document.getElementById("dis4");
    // if (val == 1) {

    //     if (x1.style.display === "none") {
    //         //x1.style.display = "block";
    //         x2.style.display = "none";
    //         x3.style.display = "none";
    //         x4.style.display = "none";
           
    //         snd1.play()//plays the sound
    //     } else {
    //         x1.style.display = "none";
            
    //     }
    // } else 
    if (val == 2) {

        if (x2.style.display === "none") {
           // x1.style.display = "none";
            x2.style.display = "block";
            x3.style.display = "none";
            x4.style.display = "none";
            snd.play()//plays the sound
        } else {
            x2.style.display = "none";
        }
    } else if (val == 3) {

        if (x3.style.display === "none") {

           // x1.style.display = "none";
            x2.style.display = "none";
            x3.style.display = "block";
            x4.style.display = "none";
            snd.play()//plays the sound
        } else {

            x3.style.display = "none";

        }
    } else if (val == 4) {

        if (x4.style.display === "none") {
           // x1.style.display = "none";
            x2.style.display = "none";
            x3.style.display = "none";
            x4.style.display = "block";
            snd2.play()//plays the sound
        } else {

            x4.style.display = "none";
        }
    }
}

// swiper

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}