const navbar = document.getElementById('main-navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

const mobileNav = document.getElementById('top-navbar');

if (mobileNav && window.bootstrap) {
    const navLinks = mobileNav.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                bootstrap.Offcanvas.getOrCreateInstance(mobileNav).hide();
            }
        });
    });
}

const WIRETUCK_DATA = [
    {
        id: 'honda',
        label: 'Honda',
        types: [
            {
                id: 'matic',
                label: 'Matic',
                models: [
                    { name: 'Beat Series Karbu / FI / Street', mesin: 'Rp100.000', fullBody: 'Rp350.000' },
                    { name: 'Genio / Scoopy', mesin: 'Rp100.000', fullBody: 'Rp350.000' },
                    { name: 'Vario Series 110 / 125 / 150', mesin: 'Rp100.000', fullBody: 'Rp380.000 - Rp400.000' },
                    { name: 'Vario 160', mesin: 'Rp120.000', fullBody: 'Rp450.000' },
                    { name: 'PCX Series 150 / 160', mesin: 'Rp150.000', fullBody: 'Rp500.000' },
                    { name: 'ADV Series 150 / 160', mesin: 'Rp150.000', fullBody: 'Rp500.000' },
                    { name: 'Stylo 160', mesin: 'Rp120.000', fullBody: 'Rp450.000' },
                ],
            },
            {
                id: 'sport-bike',
                label: 'Sport Bike',
                models: [
                    { name: 'CBR150R', mesin: 'Rp150.000', fullBody: 'Rp500.000' },
                    { name: 'CBR250RR', mesin: 'Rp200.000', fullBody: 'Rp650.000' },
                ],
            },
            {
                id: 'naked-bike',
                label: 'Naked Bike',
                models: [
                    { name: 'Verza / MegaPro', mesin: 'Rp150.000', fullBody: 'Rp400.000' },
                    { name: 'Tiger / CB150R', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                    { name: 'CB150X', mesin: 'Rp180.000', fullBody: 'Rp500.000' },
                ],
            },
            {
                id: 'underbone',
                label: 'Underbone',
                models: [
                    { name: 'Revo / Supra X 125', mesin: 'Rp120.000', fullBody: 'Rp350.000' },
                    { name: 'Supra GTR 150 / Sonic 150R', mesin: 'Rp120.000', fullBody: 'Rp400.000' },
                ],
            },
            {
                id: 'trail',
                label: 'Trail',
                models: [
                    { name: 'CRF150L', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                    { name: 'CRF250 Series L / Rally', mesin: 'Rp200.000', fullBody: 'Rp600.000' },
                ],
            },
            {
                id: '2tak',
                label: '2 Tak',
                models: [
                    { name: 'NSR150 Series RR / SP', mesin: 'Rp200.000', fullBody: 'Rp600.000' },
                ],
            },
        ],
    },
    {
        id: 'yamaha',
        label: 'Yamaha',
        types: [
            {
                id: 'matic',
                label: 'Matic',
                models: [
                    { name: 'Mio Series Sporty / Soul / J / GT / M3', mesin: 'Rp100.000', fullBody: 'Rp350.000' },
                    { name: 'Fino', mesin: 'Rp100.000', fullBody: 'Rp350.000' },
                    { name: 'Gear 125 / FreeGo', mesin: 'Rp100.000', fullBody: 'Rp380.000' },
                    { name: 'Lexi', mesin: 'Rp120.000', fullBody: 'Rp400.000' },
                    { name: 'Aerox 155', mesin: 'Rp120.000', fullBody: 'Rp450.000' },
                    { name: 'Aerox Alpha/Turbo', mesin: 'Rp150.000', fullBody: 'Rp500.000' },
                    { name: 'NMAX 155', mesin: 'Rp120.000', fullBody: 'Rp450.000' },
                    { name: 'NMAX Neo/Turbo', mesin: 'Rp150.000', fullBody: 'Rp500.000' },
                    { name: 'XMAX 250', mesin: 'Rp250.000', fullBody: 'Rp800.000' },
                ],
            },
            {
                id: 'sport-bike',
                label: 'Sport Bike',
                models: [
                    { name: 'R15', mesin: 'Rp150.000', fullBody: 'Rp500.000' },
                    { name: 'R25', mesin: 'Rp200.000', fullBody: 'Rp650.000' },
                ],
            },
            {
                id: 'naked-bike',
                label: 'Naked Bike',
                models: [
                    { name: 'Vixion / MT15 / XSR155', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                ],
            },
            {
                id: 'underbone',
                label: 'Underbone',
                models: [
                    { name: 'Jupiter Z / Vega', mesin: 'Rp120.000', fullBody: 'Rp350.000' },
                    { name: 'Jupiter MX', mesin: 'Rp120.000', fullBody: 'Rp380.000' },
                    { name: 'MX King', mesin: 'Rp120.000', fullBody: 'Rp400.000' },
                ],
            },
            {
                id: 'trail',
                label: 'Trail',
                models: [
                    { name: 'WR155', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                ],
            },
            {
                id: '2tak',
                label: '2 Tak',
                models: [
                    { name: 'RX Series King / Z', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                    { name: 'Bebek 2T F1ZR / Force 1 / Alfa / Champ', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                ],
            },
        ],
    },
    {
        id: 'kawasaki',
        label: 'Kawasaki',
        types: [
            {
                id: 'sport-bike',
                label: 'Sport Bike',
                models: [
                    { name: 'Ninja 150 R', mesin: 'Rp180.000', fullBody: 'Rp500.000' },
                    { name: 'Ninja Series 150 RR / 250', mesin: 'Rp200.000', fullBody: 'Rp650.000' },
                    { name: 'ZX25R', mesin: 'Rp220.000', fullBody: 'Rp700.000' },
                ],
            },
            {
                id: 'naked-bike',
                label: 'Naked Bike',
                models: [
                    { name: 'Z250', mesin: 'Rp180.000', fullBody: 'Rp500.000' },
                    { name: 'W175', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                ],
            },
            {
                id: 'trail',
                label: 'Trail',
                models: [
                    { name: 'KLX / D-Tracker 150', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                    { name: 'KLX Series 230 / 230SM / 250', mesin: 'Rp200.000', fullBody: 'Rp600.000' },
                ],
            },
            {
                id: '2tak',
                label: '2 Tak',
                models: [
                    { name: 'KRR ZX150', mesin: 'Rp200.000', fullBody: 'Rp650.000' },
                ],
            },
        ],
    },
    {
        id: 'suzuki',
        label: 'Suzuki',
        types: [
            {
                id: 'matic',
                label: 'Matic',
                models: [
                    { name: 'Nex / Address', mesin: 'Rp100.000', fullBody: 'Rp350.000' },
                    { name: 'Burgman Street', mesin: 'Rp120.000', fullBody: 'Rp400.000' },
                ],
            },
            {
                id: 'sport-bike',
                label: 'Sport Bike',
                models: [
                    { name: 'GSX-R150', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                ],
            },
            {
                id: 'naked-bike',
                label: 'Naked Bike',
                models: [
                    { name: 'GSX-S150 / Bandit 150', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                ],
            },
            {
                id: 'underbone',
                label: 'Underbone',
                models: [
                    { name: 'Smash / Shogun', mesin: 'Rp120.000', fullBody: 'Rp350.000' },
                    { name: 'Satria F150', mesin: 'Rp120.000', fullBody: 'Rp400.000' },
                ],
            },
            {
                id: 'trail',
                label: 'Trail',
                models: [
                    { name: 'DR150', mesin: 'Rp150.000', fullBody: 'Rp450.000' },
                    { name: 'TS125', mesin: 'Rp180.000', fullBody: 'Rp500.000' },
                ],
            },
            {
                id: '2tak',
                label: '2 Tak',
                models: [
                    { name: 'Suzuki 2T Satria 120R / Tornado / RGR150', mesin: 'Rp180.000', fullBody: 'Rp500.000' },
                ],
            },
        ],
    },
    {
        id: 'vespa',
        label: 'Vespa',
        types: [
            {
                id: 'matic',
                label: 'Matic',
                models: [
                    { name: 'Small Frame LX / S / Primavera / Sprint', mesin: 'Rp180.000', fullBody: 'Rp600.000' },
                    { name: 'GTS Series 150 / 300', mesin: 'Rp250.000', fullBody: 'Rp800.000' },
                ],
            },
            {
                id: 'touring',
                label: 'Touring',
                models: [
                    { name: 'GTS 300 / GTV', mesin: 'Rp250.000', fullBody: 'Rp800.000' },
                ],
            },
            {
                id: '2tak',
                label: '2 Tak',
                models: [
                    { name: 'Vespa 2T PX / Super / Sprint / Excel / Exclusive', mesin: 'Rp200.000', fullBody: 'Rp600.000' },
                ],
            },
        ],
    },
];

const wiretuckPickers = document.querySelectorAll('[data-wiretuck]');

function createWireButton(label, datasetKey, value) {
    const button = document.createElement('button');
    button.className = 'wiretuck-tab';
    button.type = 'button';
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', 'false');
    button.dataset[datasetKey] = value;
    button.textContent = label;
    return button;
}

function setWireButtonState(buttons, activeButton) {
    buttons.forEach((button) => {
        const isActive = button === activeButton;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-selected', String(isActive));
    });
}

function clearWireList(element) {
    element.innerHTML = '';
    element.hidden = true;
}

function renderWirePrices(output, models) {
    const mesinItems = models.map((model) => (
        `<div class="wiretuck-price-item"><span>${model.name}</span><strong>${model.mesin}</strong></div>`
    )).join('');
    const fullBodyItems = models.map((model) => (
        `<div class="wiretuck-price-item"><span>${model.name}</span><strong>${model.fullBody}</strong></div>`
    )).join('');

    output.hidden = false;
    output.innerHTML = `
        <div class="wiretuck-price-columns">
            <div class="wiretuck-price-card">
                <h3>Wiretuck Mesin</h3>
                ${mesinItems}
            </div>
            <div class="wiretuck-price-card">
                <h3>Rapihin Full Body</h3>
                ${fullBodyItems}
            </div>
        </div>
        <a class="wiretuck-admin-link" href="https://wa.me/6287725316510" target="_blank" rel="noopener">Motor tidak ada di list? Hubungi Admin</a>
    `;
}

function resetWiretuckPicker(picker) {
    picker.dataset.step = 'brand';
    picker.removeAttribute('data-active-brand');
    picker.removeAttribute('data-active-type');

    picker.querySelector('[data-wire-step-label]').textContent = 'Pilih Brand';
    picker.querySelector('[data-wire-back]').hidden = true;

    const brandList = picker.querySelector('[data-wire-brand-list]');
    const typeList = picker.querySelector('[data-wire-type-list]');
    const output = picker.querySelector('[data-wire-price-output]');

    brandList.hidden = false;
    brandList.querySelectorAll('.wiretuck-tab').forEach((button) => {
        button.classList.remove('is-active');
        button.setAttribute('aria-selected', 'false');
    });

    clearWireList(typeList);
    output.hidden = true;
    output.innerHTML = '';
}

function hideWirePrices(picker) {
    const output = picker.querySelector('[data-wire-price-output]');
    output.hidden = true;
    output.innerHTML = '';
}

function renderWireTypes(picker, brand) {
    const typeList = picker.querySelector('[data-wire-type-list]');

    picker.removeAttribute('data-active-type');
    hideWirePrices(picker);

    typeList.innerHTML = '';
    typeList.hidden = false;

    brand.types.forEach((type) => {
        const button = createWireButton(type.label, 'wireType', type.id);
        button.classList.add('wiretuck-type-tab');
        button.addEventListener('click', () => {
            picker.dataset.activeType = type.id;
            setWireButtonState(typeList.querySelectorAll('.wiretuck-tab'), button);
            renderWirePrices(picker.querySelector('[data-wire-price-output]'), type.models);
        });
        typeList.appendChild(button);
    });
}

wiretuckPickers.forEach((picker) => {
    const brandList = picker.querySelector('[data-wire-brand-list]');
    const backButton = picker.querySelector('[data-wire-back]');

    WIRETUCK_DATA.forEach((brand) => {
        const button = createWireButton(brand.label, 'wireBrand', brand.id);
        button.addEventListener('click', () => {
            picker.dataset.step = 'type';
            picker.dataset.activeBrand = brand.id;
            picker.querySelector('[data-wire-step-label]').textContent = 'Pilih Type';
            backButton.hidden = false;
            brandList.hidden = true;
            setWireButtonState(brandList.querySelectorAll('.wiretuck-tab'), button);
            renderWireTypes(picker, brand);
        });
        brandList.appendChild(button);
    });

    backButton.addEventListener('click', () => resetWiretuckPicker(picker));
    resetWiretuckPicker(picker);
});
const priceAccordionItems = document.querySelectorAll('.price-accordion-item');

function resetPriceTabs(scope) {
    scope.querySelectorAll('[data-wiretuck]').forEach(resetWiretuckPicker);
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

