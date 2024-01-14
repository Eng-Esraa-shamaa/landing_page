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

///having all the sections on one const to loop over them easily 
const sections=document.querySelectorAll('section');


// build the nav
/// the function building  made for building the nav 
function building(){
    //getting the ul navbar item 
    let navbar=document.getElementById('navbar__list');
    

    ///looping on each section of sections dynamically .. so if we add forth section the code will work 
    for(section of sections){

       let navlink=document.createElement("li");

       let anchor=document.createElement('a');
 
       anchor.className="menu__link";

        const sectionId=section.id;

        const sectiondata=section.dataset.nav;

        anchor.setAttribute('href','#'+sectionId);
        anchor.innerHTML=sectiondata;
        //appending the anchor to the nav link
        navlink.appendChild(anchor);
        //appending the navlinks to the navbar 
        navbar.appendChild(navlink);    
    } 
};

// Add class 'active' to section when near top of viewport
// the function that excutes the adding and removing  active class 
const sectionActivation = () => {
   // let navItem=document.querySelector("#"+section.id);
    sections.forEach(section => {
       //selecting all the links in the navigation menu 
        let navigationLinks=document.querySelectorAll('a');
       //////get the actual dimensions of the section
        viewport = () => section.getBoundingClientRect().top < 100 && section.getBoundingClientRect().top >= -100;

        if(viewport()){
            //adding the active class when in viewport
         section.classList.add('your-active-class');


       //looping on the navigation links 
        navigationLinks.forEach(navigationLink => {
        if(section.getAttribute('data-nav') == navigationLink.textContent ){
         navigationLink.classList.add('active-link');       
        }else{
            
           navigationLink.classList.remove('active-link'); 
        };
        });  

        }else{
            //removing the active class when it is not in viewport
           section.classList.remove('your-active-class');
          

        };
         
    });

};

// Scroll to section on link click
const scrollToSection=()=>{
    //selects all the links
const links=document.querySelectorAll('.menu__link');

    links.forEach(link=>{
    link.addEventListener('click',()=>{
        
            section.scrollIntoView ({

                behavior: 'smooth'
                
        
                });
        });
});
};


// Build menu // calling the function to be excuted
building();

/////adding the function while scrolling
window.addEventListener('scroll' ,sectionActivation);

//calling the scroll to section function
scrollToSection();

///////////scroll to top button /////////////////////

////// i got the idea of this scroll to top button from w3schools.com but i made my own function with some edites//
const topButton=document.getElementById('top'); //getting the button 
/// to top button controlling  when to appear
 window.onscroll=function(){
    if(window.pageYOffset>window.screen.height ){
        topButton.style.display='block';
    }else{
        topButton.style.display='none';
    };
};
/// this function when you click on the button it goes to top 
function toTop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;
    let navigationLinks=document.querySelectorAll('a');
    navigationLinks.forEach(navigationLink => {
        navigationLink.classList.remove("active-link");
    });
};