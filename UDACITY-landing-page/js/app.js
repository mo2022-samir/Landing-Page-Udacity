/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const ulOfIems = document.querySelector('#navbar__list')
const sectionsOFPage = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();


/**
 * Begin Main Functions
*/

// build the nav
function buildNavBar() {
    /**
    * Make for loop to detect sections  
    * and create number of list elements 
    * according to nubmers of sections
    */ 
    for (const section of sectionsOFPage) {
        // get section properties
        const sectionID = section.getAttribute('id');
        const sectionTitle = section.getAttribute('data-nav');
        // create list element and link to section
        const li = document.createElement('li');
        const link = document.createElement('a');
        // set properties of link
        link.setAttribute('href', `#${sectionID}`);
        link.setAttribute('class','link_to_section');
        link.textContent = sectionTitle;
        // append elements to fragments
        li.appendChild(link);
        fragment.appendChild(li);
    };
    ulOfIems.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
// make event when page scoll
window.onscroll = function makeActive() {
	for (const section of sectionsOFPage) {
        // make condition if top of section >= 0
        if(section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top <= 300 ){
            // check of section have a class active or not
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }else {
            section.classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event
function smoothScroll(){
    // get Links of sections
    const links = document.querySelectorAll('.link_to_section');
    for (let i = 0 ; i < links.length;i++){
        // add event when user click and change properties of scrolling
        links[i].addEventListener('click', (e) => {
            e.preventDefault();
            sectionsOFPage[i].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar();
// Scroll to section on link click
smoothScroll();


