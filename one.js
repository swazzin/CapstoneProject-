// Add a smooth scroll effect to the navigation links
var navLinks = document.querySelectorAll('nav a');

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(event) {
    event.preventDefault();

    var target = this.getAttribute('href');

    window.scrollTo({
      top: document.querySelector(target).offsetTop - 80,
      behavior: 'smooth'
    });
  });
}
// Get the ad image element
var adImage = document.querySelector('img.ad');

// Set the ad image's source attribute to the ad URL
adImage.src = 'Black short.jpg';

// Display the ad image
adImage.style.display = 'block';
