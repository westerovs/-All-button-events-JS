/*eslint-disable*/
const buttons = document.querySelectorAll('.button');
const wrapper = document.querySelector('.wrapper');
const btnJustClick = document.querySelector('.button--click')
const btnToggle = document.querySelector('.button--toggle')
const btnFlag = document.querySelector('.button--flag')
const btnUpDown = document.querySelector('.button--upDown')
const btnLeft = document.querySelector('.button--left');
const btnRight = document.querySelector('.button--right');

function changeImage(first, second) {
    wrapper.style.backgroundImage = `url(img/${first}.jpg)`
    wrapper.style.pointerEvents = 'none';

    setTimeout(() => {
        wrapper.style.backgroundImage = `url(img/${second}.jpg)`
        wrapper.style.pointerEvents = 'auto';
    }, 1000);
}

function onSignaling() {
    const signal = new Audio('./signal.mp3')
    signal.play()
    changeImage(1, 0)
}

// =========================== CLICK
btnJustClick.addEventListener('click', () => {
    onSignaling()
})

// =========================== TOGGLE
btnToggle.addEventListener('click', function () {
    btnToggle.classList.toggle('button--press')

    wrapper.style.backgroundImage = 'url(img/3.jpg)'
    if (!btnToggle.classList.contains('button--press')) {
        wrapper.style.backgroundImage = 'url(img/0.jpg)'
    }
})

// =========================== FLAG
let flag = false

btnFlag.addEventListener('click', function () {
    flag = !flag

    if (flag) {
        wrapper.style.backgroundImage = 'url(img/3.jpg)'
        btnFlag.classList.add('button--press')
    }
    else {
        btnFlag.classList.remove('button--press')
        wrapper.style.backgroundImage = 'url(img/0.jpg)'
    }
})

// =========================== up / down

btnUpDown.addEventListener('mousedown', () => {
    wrapper.style.backgroundImage = 'url(img/4.jpg)'
    btnUpDown.innerHTML = 'UP'
})

btnUpDown.addEventListener('mouseup', () => {
    wrapper.style.backgroundImage = 'url(img/0.jpg)'
    btnUpDown.innerHTML = 'DOWN'
})

// =========================== all buttons

function clearAllTabs() {
    buttons.forEach(item => {
        if (item.classList.contains('is-active')) {
            item.classList.remove('is-active')
        }
    })
}

buttons.forEach(item => {
    item.addEventListener('mouseover', () => {
        clearAllTabs()
        item.classList.add('is-active')
    });
});
