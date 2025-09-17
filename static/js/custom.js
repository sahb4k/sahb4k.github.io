document.addEventListener('DOMContentLoaded', function() {
  console.log('Custom JS loaded');
  const menuItems = document.querySelectorAll('ul#menu li a');
  const defaultBg = document.body.style.backgroundImage || `url('/images/nav/home.webp')`;

  if (!menuItems.length) {
    console.error('No menu items found. Selector: ul#menu li a');
    console.log('Menu HTML:', document.querySelector('ul#menu')?.outerHTML || 'No ul#menu found');
    return;
  }

  menuItems.forEach(item => {
    const bgUrl = item.getAttribute('data-bg');
    console.log(`Menu item: ${item.textContent.trim()}, data-bg: ${bgUrl}`);
    if (bgUrl) {
      item.addEventListener('mouseover', function() {
        console.log(`Hovering: ${item.textContent.trim()}, setting bg: ${bgUrl}`);
        document.body.style.backgroundImage = `url(${bgUrl})`;
      });
      item.addEventListener('mouseout', function() {
        console.log('Mouse out, resetting to default bg');
        document.body.style.backgroundImage = defaultBg;
      });
    } else {
      console.warn(`No data-bg for menu item: ${item.textContent.trim()}`);
    }
  });
});
