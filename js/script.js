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

const priceTabs = document.querySelectorAll('.price-tab');

priceTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('aria-controls');
        const tabScope = tab.closest('.price-accordion-content') ?? document;
        const relatedTabs = tabScope.querySelectorAll('.price-tab');
        const relatedPanels = tabScope.querySelectorAll('.price-tab-panel');

        relatedTabs.forEach((item) => {
            item.classList.toggle('is-active', item === tab);
            item.setAttribute('aria-selected', String(item === tab));
        });

        relatedPanels.forEach((panel) => {
            panel.classList.toggle('is-active', panel.id === targetId);
        });
    });
});

const priceAccordionItems = document.querySelectorAll('.price-accordion-item');

function resetPriceTabs(scope) {
    scope.querySelectorAll('.price-tab').forEach((tab) => {
        tab.classList.remove('is-active');
        tab.setAttribute('aria-selected', 'false');
    });

    scope.querySelectorAll('.price-tab-panel').forEach((panel) => {
        panel.classList.remove('is-active');
    });
}

function closePriceItem(item) {
    item.classList.remove('is-open');
    item.querySelector(':scope > .price-accordion-trigger')
        ?.setAttribute('aria-expanded', 'false');
    resetPriceTabs(item);
}

priceAccordionItems.forEach((item) => {
    const trigger = item.querySelector(':scope > .price-accordion-trigger');

    if (!trigger) return;

    trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        item.parentElement
            ?.querySelectorAll(':scope > .price-accordion-item')
            .forEach((sibling) => {
                if (sibling !== item) {
                    closePriceItem(sibling);
                }
            });

        item.classList.toggle('is-open', !isOpen);
        trigger.setAttribute('aria-expanded', String(!isOpen));

        if (isOpen) {
            resetPriceTabs(item);
        }
    });
});
