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
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 42,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider__btn-next',
        prevEl: '.slider__btn-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
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

// swiper.updateSlides()
// swiper.updateProgress()
// swiper.updateSlidesClasses()
