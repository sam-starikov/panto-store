/* tooltips */
const dotInfoBtn = document.querySelectorAll('.dot-info')
const tooltips = document.querySelectorAll('.tooltip')

//Уст. клик на кнопку открытия tooltip
dotInfoBtn.forEach(btn =>
    btn.addEventListener('click', function (e) {
        e.stopPropagation()
        this.parentNode.querySelector('.tooltip').classList.toggle('tooltip--active')
    })
)

// Отменяем всплытие для закрытия tooltip при клике на document
for (const tooltip of tooltips) {
    tooltip.addEventListener('click', function stopPropagation(e) {
        e.stopPropagation()
    })
}

//Уст. клик на document для закрытия tooltip и удаляем прослушку
document.addEventListener('click', function () {
    for (const tooltip of tooltips) {
        tooltip.classList.remove('tooltip--active')
        tooltip.removeEventListener('click', function stopPropagation(e) {
            e.stopPropagation()
        })
    }
})

/* tabs */
const tabs = document.querySelectorAll('.tabs__btn')

// Уст. активный tab
for (const tab of tabs) {
    tab.addEventListener('click', function setActive(e) {
        for (const tab of tabs) {
            tab.classList.remove('tabs__btn--active')
        }
        this.classList.add('tabs__btn--active')
        tab.closest('.tabs').querySelector('.tabs__btn--active')
    })
}

// Удаляем прослушку на tabs
// document.addEventListener('click', function setActive() {
//     tabs.forEach(tab => {
//         tab.removeEventListener('click', function setActive() {})
//     })
// })
