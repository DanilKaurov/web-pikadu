//Переменная для кнопки меню
let menuToggle = document.querySelector('#menu-toggle');
//Перменная для меню
let menu = document.querySelector('.sidebar');
//Отслеживаем клик по кнопке меню
menuToggle.addEventListener('click',function (event) {
  //Отмена стандартного поведения ссылки
 event.preventDefault();
 //класс после клика по меню
 menu.classList.toggle('visible');
})