// 图片轮播
let current = 0;
const slides = document.querySelectorAll('.hero img');
setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 4000);
