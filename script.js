// Animated scroll effect for sections
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll('.section');
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('DOMContentLoaded', revealSectionsOnScroll);

// Sticky navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 40) {
    navbar.style.background = '#fff';
    navbar.style.boxShadow = '0 4px 24px rgba(30, 41, 59, 0.08)';
  } else {
    navbar.style.background = 'var(--white)';
    navbar.style.boxShadow = 'var(--shadow)';
  }
});

// Easy update for project links and resume
// To update project links, add anchor tags in the HTML where needed.
// To update resume, set the href of the resume-link anchor below:
document.addEventListener('DOMContentLoaded', function() {
  const resumeLink = document.getElementById('resume-link');
  // Set your resume file path here (e.g., 'Harishwaran_Resume.pdf')
  resumeLink.href = 'Harishwaran.pdf';
}); 