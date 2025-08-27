
// DOM elements
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const scrollTopBtn = document.getElementById('scroll-top');
const contactForm = document.getElementById("contact-form")
const yearSpan = document.getElementById('year');

// Set current year in footer
yearSpan.textContent = new Date().getFullYear();

// Toggle mobile menu
mobileToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  
  // Toggle between menu and close icon
  const icon = mobileToggle.querySelector('i');
  if (mobileMenu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    
    const icon = mobileToggle.querySelector('i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Show/hide scroll to top button
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

// Scroll to top
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Handle form submission
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_tee3w4q";
  const templateID = "template_2897hrb";

  emailjs.send(serviceID, templateID, params)
  .then(res=>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!")

  })
  .catch(err=>console.log(err));
}

// Fade-in animations for Sections
const fadeElements = document.querySelectorAll('.section-title, .section-subtitle, .tool-card, .timeline-item, .contact-item');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) 
    {
      entry.target.classList.add('fade-in');
      fadeObserver.unobserve(entry.target);
    }
  });
}, 
{
  threshold: 0.1
});

fadeElements.forEach(element => {
  fadeObserver.observe(element);
});