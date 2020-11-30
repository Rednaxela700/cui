function invoke() {
  const primaryNavBtns = document.querySelectorAll('.nav--primary > .nav__item')

  function handleNavRadius() {
    const radiusNavItem = document.getElementById('js-nav--radius');

    if (radiusNavItem.lastElementChild.offsetHeight) {
      radiusNavItem.classList.remove('nav__item--radius');
    } else {
      radiusNavItem.classList.add('nav__item--radius');
    }
  }

  Array.from(primaryNavBtns).forEach(btn => btn.addEventListener('click', handleNavRadius))
}

window.addEventListener('DOMContentLoaded', invoke)
