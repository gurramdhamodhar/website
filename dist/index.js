const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const links = document.querySelectorAll('ul li a'); // Select all anchor tags within the list

// Toggle menu open
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.remove('-translate-x-full');
  mobileMenu.classList.add('translate-x-0');
});

// Toggle menu close
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-0');
  mobileMenu.classList.add('-translate-x-full');
});

// Smooth scroll to the respective section
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href').substring(1); // Get the ID without the #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start' // Align to the top
      });
      // Optionally close the mobile menu after navigation
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('-translate-x-full');
    }
  });
});

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
  alert('Right-click is disabled on this website.');
});

// Disable specific keyboard shortcuts
document.addEventListener('keydown', function (event) {
  // Prevent F12, Ctrl+Shift+I, Ctrl+U, etc.
  if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.key === "U")) {
      event.preventDefault();
      alert("You cannot access developer tools.");
  }
});

// Disable copying using keyboard shortcuts (Ctrl+C, Ctrl+X, Ctrl+V)
document.addEventListener('keydown', function (event) {
  if ((event.ctrlKey && event.key === 'c') || (event.ctrlKey && event.key === 'x') || (event.ctrlKey && event.key === 'v')) {
      event.preventDefault();
      alert("Copying and pasting is disabled.");
  }
});

// Disable text selection (this is included in the CSS part but can also be done with JS)
document.addEventListener('selectstart', function (event) {
  event.preventDefault();
});