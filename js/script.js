"use strict";
const button = document.querySelector('.button');
console.log(button);
/*button.onclick = function () {
    console.log('Клик');
};*/
//addEventListener
//И removeEventListener
button.addEventListener("click", function (e) {
    console.log('Клик');
});
button.addEventListener("click", function (e) {
    console.log('Клак');
});
//button.removeEventListener("click", function); - снимает задачу события после выполнения предудыщей ф-ии
//Параметры addEventListener
//"capture": true|false - фаза срабатывания
//"опсе": true|false - заменяет remove
//"passive": true|false - true, значит обработчик никогда не будет PreventDefault
//button.addEventListener("click", function,{"capture": true, "once": true,..});
const button1 = document.querySelector('.button1');
function showConsole(event) {
    console.log("Выводим информацию о событии");
    //Тип объекта
    console.log(event.type);
    //Объект, ка котором сработал обработчик
    console.log(event.target);
    //Выдает координаты мыши при выполнении обработчика
    console.log(event.clientX);
    console.log(event.clientY);
};
button1.addEventListener("click", showConsole, { "once": true });
//Делегироваие
//Способ передачи задачи родительскому объекту
const lesson1 = document.querySelector(".lesson1");
function showConsole() {
    console.log("Ура, Нажал!");
};
lesson1.addEventListener("click", function (event) {
    if (event.target.closest('.button2')) {
        showConsole();
    }
});
//Пример делегирования
//Вместо создания события на каждый объкет 
//Создаем событие на родителя
const menuBody = document.querySelector('.menu');
document.addEventListener('click', menu);
function menu(event) {
    if (event.target.closest('.menu__button')) {
        menuBody.classList.toggle('__active');
    };
    if (!event.target.closest('.menu')) {
        menuBody.classList.remove('__active');
    };
};
document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        menuBody.classList.remove('__active');
    };
});

//Основные события мыши
const button3 = document.querySelector('.button3');
button3.addEventListener('mousedown', function (event) {
    console.log(`Нажата кнопка ${event.which}`);
});
button3.addEventListener('click', function (event) {
    console.log("Нажата основная кнопка мыши");
});
button3.addEventListener('contextmenu', function (event) {
    console.log(`Нажата кнопка ${event.which}`);
});

//Движение мыши
const mouseMove = document.querySelector('.mouse__move');
mouseMove.addEventListener('mousemove', function (event) {
    mouseMove.innerHTML = `clientX-${event.clientX} <br> clientY - ${event.clientY}`;
});

//Наведение мыши
mouseMove.addEventListener('mouseover', function (event) {
    mouseMove.innerHTML = `Курсор над объектом`;
});
mouseMove.addEventListener('mouseout', function (event) {
    mouseMove.innerHTML = `Курсор вне объекта`;
});

//События клавиатуры 
document.addEventListener('keydown', function (event) {
    console.log(`Нажата клавиша ${event.code} (${event.key})`);
})
document.addEventListener('keyup', function (event) {
    console.log(`Отжата клавиша ${event.code} (${event.key})`);
})
//Пример применения (счетчик символов)
const txtarea = document.querySelector('.text__area');
const txtLimit = txtarea.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtLimit;
txtarea.addEventListener('keyup', txtSetCounter);
//Убирает автоповтор при зажимании  клавиши
txtarea.addEventListener('keydown', function (event) {
    if (event.repeat) txtSetCounter();
});
function txtSetCounter() {
    const txtCounterResult = txtLimit - txtarea.value.length;
    txtCounter.innerHTML = txtCounterResult;
};

//События прокрутки 
window.addEventListener('scroll', function (event) {
    console.log(`${scrollY}px`);
});
//События загрузки страницы 
document.addEventListener('DOMContentLoaded', readyDOM);
window.addEventListener('load', readyLoad);
function readyDOM() {
    const image = document.querySelector('.image');
    console.log(document.readyState);
    console.log('DOM Загружен');
    console.log(image.offsetWidth);
};
function readyLoad() {
    const image = document.querySelector('.image');
    console.log(document.readyState);
    console.log('Страница загружена');
    console.log(image.offsetWidth);
};
//События закрытия страницы 
window.addEventListener('beforeunload', beforeUnload);
function beforeUnload(event) {
    event.preventDefault();
    event.returnValue = '';
};