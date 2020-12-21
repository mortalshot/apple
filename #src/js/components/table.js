const slider = document.querySelector('.block-table');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
}

let table = $(".characteristic-table");
let button = $('.characteristics__btn');

button.click(function (e) {
  e.preventDefault();
  $('.characteristic-table__item:not(.characteristic-table__item--main)').slideToggle(300);

  $(this).text(function (i, text) {
    return text === "Детальные характеристики" ? "Скрыть характеристики" : "Детальные характеристики";
  })
});