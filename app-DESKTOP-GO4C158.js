var link__games = document.getElementById('link__games')
var header = document.getElementById('header')
let nowscroll = document.documentElement.scrollTop;

var burger = document.getElementById('burger')

var nav = document.getElementById('nav')

window.addEventListener('resize', () => {
    header = document.getElementById('header');
})

link__games.onclick = function() {
    if (!link__games.classList.contains('show')) {
        link__games.classList.add('show')
        console.log(1)
    } else {
        link__games.classList.remove('show')
        console.log(0)
    }
}

/*скрытие всплывающего меню при клике на экран*/
window.addEventListener('click', e => {
    const withinBoundaries = e.composedPath().includes(link__games); /*массив элементов, на которых сработает событие; проверяет, содержит ли массив искомый элемент*/
    if (!withinBoundaries) {
        if (link__games.classList.contains('show')) {
            link__games.classList.remove('show')
        }
    }
})

window.addEventListener('scroll', function() {
    if (link__games.classList.contains('show')) {
        link__games.classList.remove('show')
    }
})

window.addEventListener('scroll', function() {
    let nowscroll = document.documentElement.scrollTop;
    if (nowscroll>header.offsetHeight) {
        header.classList.add('fixed')
    }

    else {
        header.classList.remove('fixed')
    }
})

burger.onclick = function() {
    if (burger.classList.contains('show')) {
        burger.classList.remove('show')
        nav.classList.remove('active')

    } else {
        burger.classList.add('show')
        nav.classList.add('active')
    }
}0