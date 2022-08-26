const info = document.querySelector('.info');
const btn_info = document.querySelector('.btn-info');
const cls_info = document.querySelector('.close-info');

btn_info.addEventListener('click', openInfo);
cls_info.addEventListener('click', closeInfo);

function openInfo() {
  info.classList.remove('hidden');
  info.classList.add('grid');
}

function closeInfo() {
  info.classList.remove('grid');
  info.classList.add('hidden');
}

const colorpicker = document.querySelector('#colorpicker-aside');
const element = document.querySelector('#element');

colorpicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  element.style.fill = event.target.value;
}