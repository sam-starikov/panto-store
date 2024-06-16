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

/* tabs */
const tabsBtn = document.querySelectorAll('.tabs__btn')

// Уст. активный tab
for (const tab of tabsBtn) {
    tab.addEventListener('click', e => {
        for (const tab of tabsBtn) {
            tab.classList.remove('tabs__btn--active')
        }
        e.target.classList.add('tabs__btn--active')
    })
}
/* end */
