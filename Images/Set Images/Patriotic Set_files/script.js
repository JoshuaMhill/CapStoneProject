// Global Variables 
const header = document.querySelector('[header-content]')
const PageSection = [...document.querySelectorAll('[data-section]')] // can't change? 
const PageStart = document.querySelector('[page-content]')
const headerLinks = [...document.querySelectorAll('[link]')]
// Starting Section of Page -> set to 0 for Scroll. 
let startingPos = 0
let scrollDirection = 'up'
//
const ScrollOptions = { 
// Remove Root so browser viewport is default 
  rootMargin: `${header.offsetHeight * -2}px`, // set margin to offset
  threshold: 0.05 // between 0 and 1 for observer 
}
const activeSection = (entry) => {
  const index = PageSection.findIndex((section) => section == entry.target)
  if (index >= PageSection.length - 1) {
   return entry.target
  } else {
   return PageSection[index + 1]
  }
}
const changeSection = (target) => {
  const sectionTheme = target.dataset.section
  header.setAttribute('headerColors', sectionTheme)
}
const headerUpdate = (entry) => {
  if (scrollDirection === 'down' && !entry.isIntersecting) {
    return true
  }
  if (scrollDirection === 'up' && entry.isIntersecting) {
    return true
  }
  return false 
}
const changeSectionTheme = (entries, observer) => {
  entries.forEach((entry) => {
    if (PageStart.scrollTop > startingPos) {
      scrollDirection = 'down'
    } else {
      scrollDirection = 'up'
    }
    startingPos = PageStart.scrollTop
    const target = scrollDirection === 'down' ? activeSection(entry) : entry.target
    
    if (headerUpdate(entry)) {
      changeSection(target)
    }
  })}
const observer = new IntersectionObserver(changeSectionTheme, ScrollOptions)
PageSection.forEach((section) => {
  observer.observe(section)
})

// Carosel // 
let slide = 0;
function MainSlideShow() {
let i;
let slides = document.getElementsByClassName("Slides");
// Loop for slides
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slide++;
    if (slide > slides.length) {slide = 1}    
    slides[slide-1].style.display = "block";  
// Set change time 
    setTimeout(MainSlideShow, 5000); 
    }
MainSlideShow(); // call function 

// Script for Email //
// Tutotial here: https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
      (function SendMessage() {
        emailjs.init({
          publicKey: '1DjYiTGDhBhenkd1W', // Pubkey in account
        });
    })();
    window.onload = function SendMessage() {
        document.getElementById('contact-form').addEventListener('submit', function SendMessage(event) {
            event.preventDefault();
            // Use Template ID from Email JS Admin
            emailjs.sendForm('service_34bhb27', 'template_llvugzs', this)
                .then(() => {
                    alert('Message recieved! We will get back to you shortly');
                }, (error) => {
                    alert('Fail :( Please try again');
                });
        });
    }
    // 