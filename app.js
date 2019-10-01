const startAnimation = (e) => {

    const item = e.target

    if (item.classList.contains('active') || item.classList.contains('images'))
        return;

    const content = document.querySelector('.image')
    const {
        width: cWidth,
        height: cHeight,
        x: cX,
        y: cY
    } = content.getBoundingClientRect()
    const {
        width: iWidth,
        height: iHeight,
        y: iY,
        x: iX
    } = item.getBoundingClientRect()
    const x = (cX - iX) + cWidth / 2 - iWidth / 2
    const y = (cY - iY) + cHeight / 2 - iHeight / 2

    TweenMax.to('.images > img', .3, { x: 0, y: 0 })
    TweenMax.to(item, .3, {
        x: x,
        y: y,
        // zIndex: -1
    })
    document.querySelectorAll('.images > img').forEach(element => {
        element.classList.remove('active')
    });
    item.classList.add('active')
}

const el = document.querySelector('.images')

el.addEventListener('click', e => startAnimation(e))