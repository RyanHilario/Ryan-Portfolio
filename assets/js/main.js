// ============= MOSTRANDO/OCULTANDO MENU DESKTOP=============

const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

if(navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu")
	})
};


function removeMenu() {
	navMenu.classList.remove("show-menu")
};

if(navClose) {
	navClose.addEventListener("click", removeMenu)
};

// ============= OCULTANDO MENU MOBILE AO CLICKAR EM ITEM =============
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", removeMenu));



// ============= MOSTRANDO/OCULTANDO MENUS CONHECIMENTOS AO CLICKAR =============
const skillsContent = document.getElementsByClassName("skills__content")
const skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills() {
	let itemClass = this.parentNode.className

	for (let i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = "skills__content skills__close";	
	}

	if(itemClass === "skills__content skills__close") {
		this.parentNode.className = "skills__content skills_open"
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener("click", toggleSkills)
})

