document.querySelectorAll('.accordion__header').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);

    const content = button.nextElementSibling;
    content.style.display = expanded ? 'none' : 'block';
  });
});