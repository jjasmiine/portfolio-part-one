/*  ()  */

/*MENU SHOW Y HIDDEN*/
const navMenu = document.getElementById('nav-menu'), //menu icon
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close'); //x icon

//SHOW
/*classList returns the class names of an element*/
/*toggle, adding and removing a class from an element*/
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show'); //show is found in styles.css, this replaces the menu

})

//HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');

})


/*MOUSEOVER HOME IMG*/
document.addEventListener('mousemove', move)

function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 120
        const y = (window.innerHeight - e.pageY * speed) / 120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*GSAP ANIMATION*/
//NAV
gsap.from('.nav__logo, nav__toggle', { opacity: 0, duration: 1, delay: 1, y: 10 })
gsap.from('nav__item', { opacity: 0, duration: 1, delay: 5, y: 30, stagger: 0.2 })

//HOME
gsap.from('.home__title', { opacity: 0, duration: 1, delay: .6, y: 30, })
gsap.from('.home__description', { opacity: 0, duration: 1, delay: .8, y: 30, })
gsap.from('.home__button', { opacity: 0, duration: 1, delay: 1, y: 30, })
gsap.from('.home__img', { opacity: 0, duration: 1, delay: .3, y: 30, })