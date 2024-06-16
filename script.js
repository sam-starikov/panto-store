const dotInfoBtn = document.querySelectorAll('.dot-info')
const tooltips = document.querySelectorAll('.tooltip')

dotInfoBtn.forEach(btn =>
    btn.addEventListener('click', function (e) {
        e.stopPropagation()
        console.log(this.parentNode.querySelector('.tooltip').classList.toggle('tooltip--active'))
    })
)

for (const tooltip of tooltips) {
    tooltip.addEventListener('click', function stopPropagation(e) {
        e.stopPropagation()
    })
}

document.addEventListener('click', function () {
    for (const tooltip of tooltips) {
        tooltip.classList.remove('tooltip--active')
        tooltip.removeEventListener('click', function stopPropagation(e) {
            e.stopPropagation()
        })
    }
})
