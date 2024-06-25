/* tooltips */
const dotInfoBtn = document.querySelectorAll('.dot-info')
const tooltips = document.querySelectorAll('.tooltip')

//Уст. клик на кнопку для открытия: tooltip
dotInfoBtn.forEach(btn =>
    btn.addEventListener('click', function (e) {
        e.stopPropagation()
        this.parentNode.querySelector('.tooltip').classList.toggle('tooltip--active')

        //Уст. клик на tooltip и отменяем всплытие
        for (const tooltip of tooltips) {
            tooltip.addEventListener('click', stopPropagation)
        }
    })
)

// Удаляем прослушку с tooltip и закрываем его при клике на document
document.addEventListener('click', function () {
    for (const tooltip of tooltips) {
        tooltip.classList.remove('tooltip--active')
        tooltip.removeEventListener('click', stopPropagation)
    }
})

// Отменяем всплытие при закрытии tooltip при клике на document
const stopPropagation = e => {
    e.stopPropagation()
}
/* end */

/* swiper */
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // loop: true,
    // slidesPerView: 1,
    spaceBetween: 42,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.slider__btn-next',
        prevEl: '.slider__btn-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        430: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        630: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 42,
        },
    },
})
/* end */

/* tabs */
const tabsBtn = document.querySelectorAll('[data-tab]')
const dataProducts = document.querySelectorAll('[data-tab-value]')

// Уст. активный tab
for (const tab of tabsBtn) {
    if (tab.dataset.tab === 'chair') {
        for (const product of dataProducts) {
            if (product.dataset.tabValue === 'chair') {
                product.classList.remove('none')
            } else {
                product.classList.add('none')
            }
        }
    }

    tab.addEventListener('click', e => {
        for (const tab of tabsBtn) {
            tab.classList.remove('tabs__btn--active')
        }
        e.target.classList.add('tabs__btn--active')

        for (product of dataProducts) {
            if (tab.dataset.tab === product.dataset.tabValue) {
                product.classList.remove('none')
            } else {
                product.classList.add('none')
            }
        }
        swiper.update()
    })
}

/* end */

/* mobile nav */
const mobileNav = document.querySelector('.mobile-nav')
const openMobileMenuBtn = document.querySelector('.nav__menu-btn')
const closeMobileMenuBtn = document.querySelector('.mobile-nav__btn-close')

const openDropDownBtn = document.querySelector('.mobile-nav__dropdown-btn')
const mobileDropdown = document.querySelector('.mobile-nav__dropdown')
const dropDownList = document.querySelector('.mobile-nav__dropdown-list')

openDropDownBtn.addEventListener('click', function () {
    const isOpen = this.classList.toggle('mobile-nav__btn--active')
    dropDownList.classList.toggle('mobile-nav__dropdown-list--open')

    if (isOpen) {
        mobileDropdown.style.maxHeight = mobileDropdown.scrollHeight + 'px'
    } else {
        mobileDropdown.style.maxHeight = '0px'
    }
})

closeMobileMenuBtn.addEventListener('click', function () {
    mobileNav.classList.remove('mobile-nav--open')
})

openMobileMenuBtn.addEventListener('click', function () {
    mobileNav.classList.add('mobile-nav--open')
})
/* end */
