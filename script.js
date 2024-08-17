/*====================Menu Toggle====================*/
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}

/*====================Active Tag====================*/
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}

/*====================Scroll Reveal====================*/
ScrollReveal({
    // reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading, .content, .container, footer a, .home img ', { origin: 'top' });
ScrollReveal().reveal('.about-content, .about-content p, .about img, form, .wrapper', { origin: 'bottom'});
ScrollReveal().reveal('.home-content, footer p', {origin: 'left'})