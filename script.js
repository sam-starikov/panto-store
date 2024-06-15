const dotInfoBtn = document.querySelectorAll('.dot-info')

dotInfoBtn.forEach(btn =>
    btn.addEventListener('click', function (e) {
        e.stopPropagation()
        console.log(this.parentNode.querySelector('.tooltip').classList.toggle('tooltip--active'))
    })
)
