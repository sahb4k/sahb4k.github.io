document.querySelectorAll('.hero-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = `url(${item.style.backgroundImage.slice(5, -2)})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  });
  item.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = '';
  });
});
