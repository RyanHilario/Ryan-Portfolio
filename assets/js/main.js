// ============= MOSTRANDO/OCULTANDO MENU DESKTOP=============

const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

// toggle.addEventListener("click", () => {
// 	menu.style.bottom = 0
// })

// navClose.addEventListener("click", () => {
// 	menu.style.bottom = "-100%"
// })

if(navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
} 


const navLink = document.querySelectorAll('.nav__link')

function removeMenu() {
	navMenu.classList.remove('show-menu')
}

if(navClose) {
	navClose.addEventListener('click', removeMenu)
}

// ============= OCULTANDO MENU MOBILE AO CLICKAR =============
navLink.forEach(n => n.addEventListener('click', removeMenu))
