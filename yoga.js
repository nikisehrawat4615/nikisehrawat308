// document.addEventListener('DOMContentLoaded', function() {
//     const menuItems = document.querySelectorAll('.has-sub-menu');

//     menuItems.forEach(item => {
//         item.addEventListener('click', function() {
//             // Toggle the 'active' class to show/hide sub-menu
//             const subMenu = this.querySelector('.header-sub-menu-2');
//             subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';

//             menuItems.forEach(otherItem => {
//                 if (otherItem !== this) {
//                     const otherSubMenu = otherItem.querySelector('.header-sub-menu-2');
//                     otherSubMenu.style.display = 'none';
//                 }
//             });
//         });
//     });

//     document.addEventListener('click', function(event) {
//         if (!event.target.closest('.header-main-menu-nav')) {
//             menuItems.forEach(item => {
//                 const subMenu = item.querySelector('.header-sub-menu-2');
//                 subMenu.style.display = 'none';
//             });
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const logo = document.querySelector('.header-logo img');
    
//     if (logo) {
//         logo.addEventListener('click', function() {
//             this.style.border = this.style.border === '2px solid #007bff' ? 'none' : '2px solid #007bff';
//         });
//     }
// });


// Select the left and right arrow elements
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

// Log a message to indicate arrow clicks (can be expanded for functionality)
leftArrow.addEventListener('click', () => {
  console.log('Left arrow clicked');
  // Add your custom logic here (e.g., navigate to the previous slide)
});

rightArrow.addEventListener('click', () => {
  console.log('Right arrow clicked');
  // Add your custom logic here (e.g., navigate to the next slide)
});

// Additional functionality idea: You could implement a slider or carousel logic here,
// like switching images or sections within the hero area.

































document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.btn-secondary-hover');
    button.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
    });
    button.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
    });
});


const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
   
});

document.querySelector('.home-slider-prev').addEventListener('click', function() {
    swiper.slidePrev();
});


