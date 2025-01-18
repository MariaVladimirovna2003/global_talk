var link__games = document.getElementById('link__games')
var header = document.getElementById('header')
let nowscroll = document.documentElement.scrollTop;

var burger = document.getElementById('burger')

var nav = document.getElementById('nav')

var stat__content = document.getElementsByClassName('stat__content')

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
    const withinBoundaries__game = e.composedPath().includes(link__games); /*массив элементов, на которых сработает событие; проверяет, содержит ли массив искомый элемент*/
    const withinBoundaries__burger = e.composedPath().includes(burger)
    if (!withinBoundaries__burger) {
        if (!link__games.classList.contains('show')) {
            nav.classList.remove('active')
        }
    }
    if (!withinBoundaries__game) {
        if (link__games.classList.contains('show')) {
            link__games.classList.remove('show')
        }
    }
})

window.addEventListener('scroll', function() {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
    }

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
}

stat__content.onclick = function() {
    if (stat__content.classList.contains('active')) {

    }
}

document.addEventListener('DOMContentLoaded', function() {
    var tabItems = document.querySelectorAll('.statistic__title__item');
   
    tabItems.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
        var content = document.getElementById(tabId);
   
        // Удаляем активный класс у текущих вкладок и контента
        document.querySelector('.statistic__title__item.active').classList.remove('active');
        document.querySelector('.stat__content.active').classList.remove('active');
   
        // Добавляем активный класс для выбранной вкладки и контента
        this.classList.add('active');
        content.classList.add('active');
      });
    });
  });