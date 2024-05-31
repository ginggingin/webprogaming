document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
      event.preventDefault(); 
      var targetId = this.getAttribute('href'); 
      var targetSection = document.querySelector(targetId); 
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  const navt = document.querySelector('.nav-t');
  const menu = document.querySelector('.nav-menu');

  navt.addEventListener('click', () => {
    event.preventDefault();
    menu.classList.toggle('active');
  });
});
