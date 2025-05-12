document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const buttons = {
    home: document.getElementById('home'),
    about: document.getElementById('about'),
    projects: document.getElementById('projects')
  };

  const pages = {
    home: document.getElementById('page-home'),
    about: document.getElementById('page-about'),
    projects: document.getElementById('page-projects')
  };

  function switchPage(pageKey) {
    // Hide all pages
    Object.values(pages).forEach(page => page.style.display = 'none');
    // Show selected page
    pages[pageKey].style.display = 'block';

    // Remove active state from all buttons
    Object.values(buttons).forEach(btn => btn.classList.remove('active'));
    // Add active state to selected button
    buttons[pageKey].classList.add('active');
  }

  // Attach click handlers
  buttons.home.addEventListener('click', () => switchPage('home'));
  buttons.about.addEventListener('click', () => switchPage('about'));
  buttons.projects.addEventListener('click', () => switchPage('projects'));
  document.getElementById('read-more').addEventListener('click', () => switchPage('about'))

  // Default to home
  switchPage('about');
});
