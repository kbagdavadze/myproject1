 
// document.addEventListener('DOMContentLoaded', () => {


//     const links = document.querySelectorAll('.nav-links a');
 
//     for (let link of links) {

//         link.addEventListener('click', (e) => {

//             e.preventDefault();

//             const targetId = link.getAttribute('href').substring(1);

//             document.getElementById(targetId).scrollIntoView({

//                 behavior: 'smooth'

//             });

//         });

//     }
 

//     const sections = document.querySelectorAll('section');

//     const navLinks = document.querySelectorAll('.nav-links li a');
 
//     window.addEventListener('scroll', () => {

//         let currentSection = '';
 
//         sections.forEach(section => {

//             const sectionTop = section.offsetTop;

//             if (pageYOffset >= sectionTop - 60) {

//                 currentSection = section.getAttribute('id');

//             }

//         });
 
//         navLinks.forEach(link => {

//             link.classList.remove('active');

//             if (link.getAttribute('href').substring(1) === currentSection) {

//                 link.classList.add('active');

//             }

//         });

//     });

// });


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {

//     anchor.addEventListener('click', function (e) {

//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({

//             behavior: 'smooth'

//         });

//     });

// });

 