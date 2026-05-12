const navLinks = document.querySelectorAll('.nav-link');
const panels = document.querySelectorAll('.panel');

navLinks.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;

    navLinks.forEach((link) => link.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});
