// toggle menu
document.getElementById('menu-toggle').addEventListener('change', function () {
    const navEl = document.getElementById('main-menu');

    navEl.classList.toggle('hidden');

    const menuListItems = Array.from(navEl.children[0].children);
    // toggle menu for keyboards and screen readers
    if (navEl.classList.contains('hidden')) {
        menuListItems.forEach(function (e) {
            e.children[0].setAttribute('tabindex', '-1');
            e.children[0].setAttribute('aria-hidden', 'true');
        });
    } else {
        menuListItems.forEach(function (e) {
            e.children[0].toggleAttribute('tabindex');
            e.children[0].toggleAttribute('aria-hidden');
        });
    }

    animateMenyBtn();

}, false);

// do not focus on click
document.getElementById('menu-toggle').addEventListener('mousedown', function (e) {
    e.preventDefault();
}, false);

// toggle menu button classes for animation
function animateMenyBtn() {
    const btn = document.getElementById('menu-btn');
    const delay = 200;

    if (btn.classList.contains('rotate')) {
        btn.classList.toggle('rotate');
        setTimeout(function () { btn.classList.toggle('close') }, delay);
    } else {
        btn.classList.toggle('close');
        setTimeout(function () { btn.classList.toggle('rotate') }, delay);
    }
}