const navbar = document.getElementById('main-navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

const mobileNav = document.getElementById('top-navbar');

if (mobileNav && window.bootstrap) {
    const navLinks = mobileNav.querySelectorAll('.nav-link, .drawer-action a');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                bootstrap.Offcanvas.getOrCreateInstance(mobileNav).hide();
            }
        });
    });
}

const priceAccordionItems = document.querySelectorAll('.price-accordion-item');

function closePriceItem(item) {
    item.classList.remove('is-open');
    item.querySelector(':scope > .price-accordion-trigger')
        ?.setAttribute('aria-expanded', 'false');
}

function closePriceSiblings(item) {
    const accordion = item.parentElement;

    if (!accordion?.classList.contains('price-accordion')) return;

    accordion.querySelectorAll(':scope > .price-accordion-item').forEach((sibling) => {
        if (sibling !== item) {
            closePriceItem(sibling);
        }
    });
}

priceAccordionItems.forEach((item) => {
    const trigger = item.querySelector(':scope > .price-accordion-trigger');

    if (!trigger) return;

    trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        if (!isOpen) {
            closePriceSiblings(item);
        }

        item.classList.toggle('is-open', !isOpen);
        trigger.setAttribute('aria-expanded', String(!isOpen));
    });
});